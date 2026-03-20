import { StyleSheet } from "react-native";

import { colors, radii, spacing, typography } from "@/constants/theme";

export const dealDetailsComponentStyles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: spacing.cardPadding,
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    paddingHorizontal: spacing.cardPadding,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    backgroundColor: colors.background,
  },
  image: {
    width: 168,
    height: 168,
    borderRadius: radii.card,
    backgroundColor: colors.border,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm,
  },
  headerContent: {
    flex: 1,
    minWidth: 0,
    gap: spacing.xs,
    alignItems: "flex-start",
  },
  title: {
    fontSize: typography.title,
    fontWeight: "600",
    color: colors.text,
  },
  description: {
    fontSize: typography.body,
    color: colors.textSecondary,
  },
  price: {
    fontSize: typography.price,
    fontWeight: "700",
    color: colors.text,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  descriptionContainer: {
    marginTop: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    padding: spacing.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 6,
    gap: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  detailRowLast: {
    borderBottomWidth: 0,
    paddingBottom: 0,
  },
  detailLabel: {
    width: 128,
    flexShrink: 0,
    fontSize: typography.body,
    color: colors.textSecondary,
  },
  detailValue: {
    flex: 1,
    minWidth: 0,
    fontSize: typography.body,
    color: colors.text,
    fontWeight: "500",
    textAlign: "right",
  },
  detailValueWrap: {
    flex: 1,
    minWidth: 0,
    alignItems: "flex-end",
  },
});
