import { FlatList, View } from "react-native";

import { dealsStyles } from "@/styles/screens";
import { useDeals } from "../api/hooks/deals/queryHooks";
import DealListItem from "../components/DealListItem";
import { Deal } from "../types";

export default function Deals() {
  const deals = useDeals();

  const renderItem = ({ item }: { item: Deal }) => {
    return <DealListItem deal={item} />;
  };

  return (
    <View style={dealsStyles.container}>
      <FlatList
        style={dealsStyles.list}
        data={deals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        windowSize={10}
        initialNumToRender={10}
      />
    </View>
  );
}
