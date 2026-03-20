import { SafeAreaView } from "react-native-safe-area-context";

import DealDetailsComponent from "@/components/DealDetails";
import { dealDetailsStyles } from "@/styles/screens";

export default function DealDetails() {
  return (
    <SafeAreaView
      style={dealDetailsStyles.container}
      edges={["bottom", "left", "right"]}
    >
      <DealDetailsComponent />
    </SafeAreaView>
  );
}
