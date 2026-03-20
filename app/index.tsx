import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DealListItem from "@/components/DealListItem";
import DealListSeparator from "@/components/ui/DealListSeparator";
import { dealsStyles } from "@/styles/screens";
import { useDeals } from "../api/hooks/deals/queryHooks";
import { Deal } from "../types";

export default function Deals() {
  const deals = useDeals();

  const renderItem = ({ item }: { item: Deal }) => {
    return <DealListItem deal={item} />;
  };

  return (
    <SafeAreaView style={dealsStyles.container} edges={["bottom", "left", "right"]}>
      <FlatList
        style={dealsStyles.list}
        data={deals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={DealListSeparator}
        windowSize={10}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );
}
