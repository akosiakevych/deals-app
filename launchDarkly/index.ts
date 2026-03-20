// Mocked implementation of useBoolVariation from LaunchDarkly SDK
const useBoolVariation = (flag: FeatureFlagKey): boolean => {
  return true;
};

export enum FeatureFlagKey {
  ShowDealsSpotlight = "show-deals-spotlight",
}

export function useFeatureFlag(flag: FeatureFlagKey): boolean {
  const isEnabled = useBoolVariation(flag);
  return isEnabled;
}
