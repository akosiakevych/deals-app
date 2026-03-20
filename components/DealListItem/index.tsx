import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Deal } from "@/types";

import { dealListItemStyles as styles } from "./styles";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type Props = {
  deal: Deal;
};

export default function DealListItem({ deal }: Props) {
  const {
    id,
    title,
    price,
    discountPercentage,
    refurbedScore,
    imageUrl,
    isBestSeller,
  } = deal;

  const accessibilityLabel = `${title}, ${priceFormatter.format(price)}, ${discountPercentage} percent off, refurbed score ${refurbedScore} out of 10${isBestSeller ? ", best seller" : ""}`;

  return (
    <Link href={{ pathname: "/deal/[id]", params: { id } }} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
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
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>
                  −{discountPercentage}%
                </Text>
              </View>
            </View>
            <View style={styles.refurbedPill}>
              <Text style={styles.refurbedLabel}>Refurbed</Text>
              <Text style={styles.refurbedScore}>
                {refurbedScore}/10
              </Text>
            </View>
          </View>
          <View style={styles.badgeColumn}>
            {isBestSeller ? (
              <View style={styles.bestSellerBadge}>
                <Text style={styles.bestSellerText}>Best seller</Text>
              </View>
            ) : null}
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
