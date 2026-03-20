export enum AnalyticsEventName {
  DealViewed = "deal_impression",
  DealClicked = "deal_click",
}

export function trackEvent(
  event: AnalyticsEventName,
  properties?: Record<string, unknown>,
): void {
  console.log(`[Analytics] ${event}`, properties ?? {});
}
