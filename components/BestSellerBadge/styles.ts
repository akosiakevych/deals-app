import { StyleSheet } from "react-native";

import { colors, radii, spacing, typography } from "@/constants/theme";

export const bestSellerBadgeStyles = StyleSheet.create({
  root: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.sm,
    backgroundColor: colors.bestSellerBg,
  },
  text: {
    fontSize: typography.caption - 1,
    fontWeight: "600",
    color: colors.bestSeller,
  },
});
