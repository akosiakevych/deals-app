import { StyleSheet } from "react-native";

import { colors, radii, spacing } from "@/constants/theme";

export const dealsStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: spacing.screen,
    backgroundColor: colors.background,
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
});

export const dealDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: spacing.screen,
    backgroundColor: colors.background,
  },
});
