import { Text, View } from "react-native";

import { bestSellerBadgeStyles as styles } from "./styles";

type Props = {
  visible: boolean;
};

export default function BestSellerBadge({ visible }: Props) {
  if (!visible) return null;

  return (
    <View style={styles.root} accessibilityLabel="Best seller">
      <Text style={styles.text}>Best seller</Text>
    </View>
  );
}
