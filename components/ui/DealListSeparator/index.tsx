import { View } from "react-native";

import { dealListSeparatorStyles as styles } from "./styles";

export default function DealListSeparator() {
  return (
    <View style={styles.root}>
      <View style={styles.line} />
    </View>
  );
}
