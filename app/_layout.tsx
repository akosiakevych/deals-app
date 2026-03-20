import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Deals" }} />
      <Stack.Screen name="deal/[id]" options={{ title: "Deal Details" }} />
    </Stack>
  );
}
