import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, Text, View } from "react-native";

import { colors } from "@/constants/theme";
import { dealsStyles } from "@/styles/screens";
import { DEAL_SORT_OPTIONS, type DealSortMode } from "@/utils/sortDeals";

type Props = {
  visible: boolean;
  onClose: () => void;
  sortMode: DealSortMode;
  onSelectSortMode: (mode: DealSortMode) => void;
  onlyRefurbedHighestScore: boolean;
  onToggleOnlyRefurbedHighestScore: () => void;
};

export default function DealsSortFilterModal({
  visible,
  onClose,
  sortMode,
  onSelectSortMode,
  onlyRefurbedHighestScore,
  onToggleOnlyRefurbedHighestScore,
}: Props) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={dealsStyles.sortMenuOverlay}>
        <Pressable
          style={dealsStyles.sortMenuBackdrop}
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="Close sort and filter menu"
        />
        <View style={dealsStyles.sortMenuSheet}>
          <Text style={dealsStyles.sortMenuTitle}>Filter</Text>
          <Pressable
            onPress={onToggleOnlyRefurbedHighestScore}
            style={[
              dealsStyles.sortMenuRow,
              onlyRefurbedHighestScore && dealsStyles.sortMenuRowActive,
            ]}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: onlyRefurbedHighestScore }}
          >
            <View style={dealsStyles.sortMenuFilterRow}>
              <Text style={dealsStyles.sortMenuFilterRowLabel}>
                Only show deals with score 10
              </Text>
              {!!onlyRefurbedHighestScore && (
                <Ionicons
                  name="checkmark-circle"
                  size={22}
                  color={colors.primary}
                />
              )}
            </View>
          </Pressable>

          <Text style={dealsStyles.sortMenuTitle}>Sort by</Text>
          {DEAL_SORT_OPTIONS.map(({ mode, label }) => (
            <Pressable
              key={mode}
              onPress={() => {
                onSelectSortMode(mode);
                onClose();
              }}
              style={[
                dealsStyles.sortMenuRow,
                sortMode === mode && dealsStyles.sortMenuRowActive,
              ]}
              accessibilityRole="button"
              accessibilityState={{ selected: sortMode === mode }}
            >
              <Text
                style={[
                  dealsStyles.sortMenuRowLabel,
                  sortMode === mode && dealsStyles.sortMenuRowLabelActive,
                ]}
              >
                {label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </Modal>
  );
}
