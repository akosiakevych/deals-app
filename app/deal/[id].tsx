import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { dealDetailsStyles } from "@/styles/screens";

export default function DealDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={dealDetailsStyles.container} edges={["bottom", "left", "right"]}>
      <Text>Deal ID: {id}</Text>
    </SafeAreaView>
  );
}
