import { StyleSheet } from "react-native";

import { colors, radii, spacing, typography } from "@/constants/theme";

export const discountBadgeStyles = StyleSheet.create({
  root: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.sm,
    backgroundColor: colors.discountBg,
  },
  text: {
    fontSize: typography.caption,
    fontWeight: "600",
    color: colors.discount,
  },
});
