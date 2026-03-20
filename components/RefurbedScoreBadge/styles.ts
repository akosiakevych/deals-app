import { StyleSheet } from "react-native";

import { colors, radii, spacing, typography } from "@/constants/theme";

export const refurbedScoreBadgeStyles = StyleSheet.create({
  root: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.sm,
    backgroundColor: colors.refurbedBg,
  },
  label: {
    fontSize: typography.caption,
    fontWeight: "600",
    color: colors.refurbed,
  },
  score: {
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
});
