import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FlatList, Pressable, Text, View, type ViewToken } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnalyticsEventName, trackEvent } from "@/analytics";
import DealListItem from "@/components/DealListItem";
import DealsSortFilterModal from "@/components/DealsSortFilterModal";
import DealListSeparator from "@/components/ui/DealListSeparator";
import { colors } from "@/constants/theme";
import { FeatureFlagKey, useFeatureFlag } from "@/launchDarkly";
import {
  setSortBy,
  toggleOnlyRefurbedHighestScore,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { dealsStyles } from "@/styles/screens";
import { Deal } from "@/types";
import { useDeals } from "../api/hooks/deals/queryHooks";
import { DealSortMode } from "../utils/sortDeals";

export default function Deals() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector((s) => s.ui.sortBy);
  const onlyRefurbedHighestScore = useAppSelector(
    (s) => s.ui.onlyRefurbedHighestScore,
  );
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const showDealsSpotlight = useFeatureFlag(FeatureFlagKey.ShowDealsSpotlight);
  const deals = useDeals({
    sortBy,
    onlyRefurbedHighestScore,
  });

  const dealsImpressionKey = useMemo(
    () => deals.map((d) => d.id).join("\0"),
    [deals],
  );
  const viewedDealIds = useRef(new Set<string>());

  useEffect(() => {
    viewedDealIds.current = new Set();
  }, [dealsImpressionKey]);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      for (const token of viewableItems) {
        if (!token.isViewable || token.item == null) continue;
        const deal = token.item as Deal;
        if (viewedDealIds.current.has(deal.id)) continue;
        viewedDealIds.current.add(deal.id);
        trackEvent(AnalyticsEventName.DealViewed, { dealId: deal.id });
      }
    },
    [],
  );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 60,
  }).current;

  const openSortMenu = useCallback(() => {
    setSortMenuOpen(true);
  }, []);

  const handleSelectSortMode = useCallback(
    (mode: DealSortMode) => {
      dispatch(setSortBy(mode));
    },
    [dispatch],
  );

  const handleToggleOnlyRefurbedHighestScore = useCallback(() => {
    dispatch(toggleOnlyRefurbedHighestScore());
  }, [dispatch]);

  const handleCloseSortMenu = useCallback(() => {
    setSortMenuOpen(false);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={openSortMenu}
          style={dealsStyles.sortHeaderButton}
          accessibilityRole="button"
          accessibilityLabel="Sort and filter deals"
        >
          <View style={dealsStyles.sortHeaderIcons}>
            <Ionicons name="swap-vertical" size={22} color={colors.primary} />
          </View>
        </Pressable>
      ),
    });
  }, [navigation, openSortMenu]);

  const renderItem = ({ item }: { item: Deal }) => {
    return <DealListItem deal={item} />;
  };

  if (!showDealsSpotlight) {
    return (
      <View style={dealsStyles.container}>
        <Text style={dealsStyles.noDealsText}>
          This feature is under construction
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={dealsStyles.container}
      edges={["bottom", "left", "right"]}
    >
      <FlatList
        style={dealsStyles.list}
        data={deals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={DealListSeparator}
        windowSize={10}
        initialNumToRender={10}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <DealsSortFilterModal
        visible={sortMenuOpen}
        onClose={handleCloseSortMenu}
        sortMode={sortBy}
        onSelectSortMode={handleSelectSortMode}
        onlyRefurbedHighestScore={onlyRefurbedHighestScore}
        onToggleOnlyRefurbedHighestScore={handleToggleOnlyRefurbedHighestScore}
      />
    </SafeAreaView>
  );
}
