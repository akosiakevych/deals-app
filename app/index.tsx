import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useCallback, useLayoutEffect, useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DealListItem from "@/components/DealListItem";
import DealsSortFilterModal from "@/components/DealsSortFilterModal";
import DealListSeparator from "@/components/ui/DealListSeparator";
import { colors } from "@/constants/theme";
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
  const deals = useDeals({
    sortBy,
    onlyRefurbedHighestScore,
  });

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
