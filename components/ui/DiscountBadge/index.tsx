import { Text, View } from "react-native";

import { discountBadgeStyles as styles } from "./styles";

type Props = {
  percentage: number;
};

export default function DiscountBadge({ percentage }: Props) {
  return (
    <View style={styles.root} accessibilityLabel={`${percentage} percent discount`}>
      <Text style={styles.text}>−{percentage}%</Text>
    </View>
  );
}
