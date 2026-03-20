import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

/**
 * Supports links such as `dealsapp://?dealId=42` or `dealsapp:///?dealId=42` by
 * rewriting to `/deal/42`. Path-style links (`dealsapp:///deal/42`, `dealsapp://deal/42`)
 * are left to Expo Router.
 */
function DealIdQueryDeepLink() {
  const router = useRouter();

  useEffect(() => {
    function maybeRedirect(parsed: Linking.ParsedURL) {
      const raw = parsed.queryParams?.dealId;
      if (raw == null) return;
      const dealId = Array.isArray(raw) ? raw[0] : raw;
      if (!dealId) return;
      if (parsed.hostname === "deal") {
        return;
      }
      const path = parsed.path ?? "";
      if (path.startsWith("deal/") || path.startsWith("/deal/")) {
        return;
      }
      router.replace(`/deal/${encodeURIComponent(dealId)}`);
    }

    let active = true;
    Linking.parseInitialURLAsync().then((parsed) => {
      if (active) maybeRedirect(parsed);
    });
    const sub = Linking.addEventListener("url", ({ url }) => {
      maybeRedirect(Linking.parse(url));
    });
    return () => {
      active = false;
      sub.remove();
    };
  }, [router]);

  return null;
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <DealIdQueryDeepLink />
      <Stack>
        <Stack.Screen name="index" options={{ title: "Deals" }} />
        <Stack.Screen name="deal/[id]" options={{ title: "Deal Details" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
