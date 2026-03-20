import { StyleSheet } from "react-native";

import { colors, radii, spacing, typography } from "@/constants/theme";

export const dealsStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: spacing.screen,
    backgroundColor: colors.background,
  },
  noDealsText: {
    fontSize: typography.title,
    fontWeight: "600",
    color: colors.text,
    textAlign: "center",
  },
  list: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.background,
  },
  linkButton: {
    paddingVertical: spacing.buttonVertical,
    paddingHorizontal: spacing.buttonHorizontal,
    backgroundColor: colors.primary,
    borderRadius: radii.button,
  },
  linkButtonLabel: {
    color: colors.onPrimary,
    fontWeight: "600",
  },
  sortMenuOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  sortMenuBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  sortMenuSheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radii.card,
    borderTopRightRadius: radii.card,
    paddingBottom: spacing.md,
    paddingTop: spacing.sm,
  },
  sortMenuTitle: {
    fontSize: typography.caption,
    fontWeight: "600",
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    paddingHorizontal: spacing.screen,
    paddingVertical: spacing.sm,
  },
  sortMenuRow: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.screen,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  sortMenuRowActive: {
    backgroundColor: colors.background,
  },
  sortMenuRowLabel: {
    fontSize: typography.body,
    color: colors.text,
  },
  sortMenuRowLabelActive: {
    fontWeight: "600",
    color: colors.primary,
  },
  sortMenuFilterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  sortMenuFilterRowLabel: {
    flex: 1,
    fontSize: typography.body,
    color: colors.text,
  },
  sortHeaderButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  sortHeaderIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});

export const dealDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: spacing.screen,
    backgroundColor: colors.background,
  },
});
