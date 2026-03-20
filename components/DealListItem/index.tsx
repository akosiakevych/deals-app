import { Image } from "expo-image";
import { Link } from "expo-router";
import { useCallback } from "react";
import { Pressable, Text, View } from "react-native";

import { AnalyticsEventName, trackEvent } from "@/analytics";
import DiscountBadge from "@/components/ui/DiscountBadge";
import RefurbedScoreBadge from "@/components/ui/RefurbedScoreBadge";
import { Deal } from "@/types";

import { priceFormatter } from "../../utils";
import { dealListItemStyles as styles } from "./styles";

type Props = {
  deal: Deal;
};

export default function DealListItem({ deal }: Props) {
  const { id, title, price, discountPercentage, refurbedScore, imageUrl } =
    deal;

  const accessibilityLabel = `${title}, ${priceFormatter.format(price)}, ${discountPercentage} percent off, refurbed score ${refurbedScore} out of 10`;

  const handlePress = useCallback(() => {
    trackEvent(AnalyticsEventName.DealClicked, { dealId: id });
  }, [id]);

  return (
    <Link href={{ pathname: "/deal/[id]", params: { id } }} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        onPress={handlePress}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressablePressed,
        ]}
      >
        <View style={styles.container}>
          <View style={styles.imageColumn}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              contentFit="cover"
              accessibilityIgnoresInvertColors
            />
          </View>
          <View style={styles.descriptionColumn}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <View style={styles.metaRow}>
              <Text style={styles.price}>{priceFormatter.format(price)}</Text>
              <DiscountBadge percentage={discountPercentage} />
            </View>
            <RefurbedScoreBadge score={refurbedScore} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
