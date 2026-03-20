import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

import { dealDetailsStyles } from "@/styles/screens";

export default function DealDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={dealDetailsStyles.container}>
      <Text>Deal ID: {id}</Text>
    </View>
  );
}
