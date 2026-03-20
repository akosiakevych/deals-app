import { StyleSheet } from "react-native";

import { colors, spacing } from "@/constants/theme";

export const dealListSeparatorStyles = StyleSheet.create({
  root: {
    height: spacing.listItemGap,
    width: "100%",
    justifyContent: "center",
  },
  line: {
    height: StyleSheet.hairlineWidth,
    width: "100%",
    backgroundColor: colors.border,
  },
});
