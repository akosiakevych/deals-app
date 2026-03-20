import { StyleSheet } from "react-native";

import { colors, radii, spacing, typography } from "@/constants/theme";

export const dealDetailsComponentStyles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: spacing.screen,
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: spacing.screen,
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
    gap: spacing.md,
  },
  headerContent: {
    flex: 1,
    minWidth: 0,
    gap: spacing.sm,
  },
  sideBadges: {
    flexShrink: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    gap: spacing.sm,
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
    gap: spacing.sm,
  },
  descriptionContainer: {
    marginTop: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    padding: spacing.cardPadding,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: spacing.sm,
    gap: spacing.md,
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
