import { StyleSheet } from "react-native";

import { colors, radii, spacing, typography } from "@/constants/theme";

export const dealListItemStyles = StyleSheet.create({
  pressable: {
    width: "100%",
    paddingVertical: spacing.sm,
    paddingHorizontal: 0,
    backgroundColor: "transparent",
  },
  pressablePressed: {
    opacity: 0.92,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: spacing.md,
    padding: spacing.cardPadding,
    backgroundColor: colors.surface,
    borderRadius: radii.card,
  },
  imageColumn: {
    flexShrink: 0,
    justifyContent: "center",
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: radii.image,
    backgroundColor: colors.border,
  },
  descriptionColumn: {
    flex: 1,
    minWidth: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: spacing.sm,
  },
  badgeColumn: {
    flexShrink: 0,
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  title: {
    width: "100%",
    fontSize: typography.title,
    fontWeight: "600",
    color: colors.text,
    lineHeight: 22,
  },
  bestSellerBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.sm,
    backgroundColor: colors.bestSellerBg,
  },
  bestSellerText: {
    fontSize: typography.caption - 1,
    fontWeight: "600",
    color: colors.bestSeller,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: spacing.sm,
  },
  price: {
    fontSize: typography.price,
    fontWeight: "700",
    color: colors.text,
  },
  discountBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.sm,
    backgroundColor: colors.discountBg,
  },
  discountText: {
    fontSize: typography.caption,
    fontWeight: "600",
    color: colors.discount,
  },
  refurbedPill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.sm,
    backgroundColor: colors.refurbedBg,
  },
  refurbedLabel: {
    fontSize: typography.caption,
    fontWeight: "600",
    color: colors.refurbed,
  },
  refurbedScore: {
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
});
