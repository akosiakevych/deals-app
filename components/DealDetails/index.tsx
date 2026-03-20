import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

import { useDeal } from "@/api/hooks/deals/queryHooks";
import BestSellerBadge from "@/components/ui/BestSellerBadge";
import DiscountBadge from "@/components/ui/DiscountBadge";
import RefurbedScoreBadge from "@/components/ui/RefurbedScoreBadge";

import { priceFormatter } from "../../utils";
import { dealDetailsComponentStyles as styles } from "./styles";

function paramId(raw: string | string[] | undefined): string {
  if (raw == null) return "";
  return Array.isArray(raw) ? raw[0] : raw;
}

function DetailRow({
  label,
  value,
  isLast,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <View style={[styles.detailRow, isLast && styles.detailRowLast]}>
      <Text style={styles.detailLabel}>{label}</Text>
      <View style={styles.detailValueWrap}>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
  );
}

export default function DealDetailsComponent() {
  const { id: rawId } = useLocalSearchParams<{ id: string }>();
  const id = paramId(rawId);
  const deal = useDeal(id);

  if (!deal) return null;

  const description = `Rated ${deal.rating} out of 5 · Save ${deal.discountPercentage}% off retail.`;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: deal.imageUrl }} style={styles.image} />
          <View style={styles.headerContent}>
            <Text style={styles.title}>{deal.title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                {priceFormatter.format(deal.price)}
              </Text>
              <DiscountBadge percentage={deal.discountPercentage} />
            </View>
          </View>
          <View style={styles.sideBadges}>
            <BestSellerBadge visible={deal.isBestSeller} />
            <RefurbedScoreBadge score={deal.refurbedScore} />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <DetailRow label="Category" value={deal.category} />
          <DetailRow label="Listing ID" value={deal.id} />
          <DetailRow label="Rating" value={`${deal.rating} / 5`} />
          <DetailRow label="Price" value={priceFormatter.format(deal.price)} />
          <DetailRow label="Discount" value={`${deal.discountPercentage}%`} />
          <DetailRow label="Refurbed score" value={`${deal.refurbedScore} / 10`} />
          <DetailRow
            label="Best seller"
            value={deal.isBestSeller ? "Yes" : "No"}
            isLast
          />
        </View>
      </View>
    </ScrollView>
  );
}
