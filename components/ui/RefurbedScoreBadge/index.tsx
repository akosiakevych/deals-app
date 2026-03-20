import { Text, View } from "react-native";

import { refurbedScoreBadgeStyles as styles } from "./styles";

type Props = {
  score: number;
};

export default function RefurbedScoreBadge({ score }: Props) {
  return (
    <View
      style={styles.root}
      accessibilityLabel={`Refurbed score ${score} out of 10`}
    >
      <Text style={styles.label}>Refurbed</Text>
      <Text style={styles.score}>{score}/10</Text>
    </View>
  );
}
