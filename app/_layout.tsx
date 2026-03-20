import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Deals" }} />
        <Stack.Screen name="deal/[id]" options={{ title: "Deal Details" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
