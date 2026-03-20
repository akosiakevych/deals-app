# deals-app

Expo (Expo Router) app for browsing deals.

## Running the app

1. Use the Node version from `.nvmrc`:

   ```bash
   nvm use
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Run on a simulator or device (native build via Expo):

   ```bash
   yarn ios
   ```

   or

   ```bash
   yarn android
   ```

   These run `expo run:ios` / `expo run:android`, which builds and launches the dev client. Have Xcode / Android tooling set up as in the [Expo docs](https://docs.expo.dev/workflow/ios-simulator/) and [Android](https://docs.expo.dev/workflow/android-studio-emulator/).

For a Metro-only session (e.g. after a build is installed), you can use `yarn start` or `npx expo start`.

## Deep linking (simulators)

The app scheme is **`dealsapp`**. With the app installed on the simulator, open a deal details screen (e.g. deal id `1`) with:

```bash
npx uri-scheme open dealsapp:///deal/1 --android
```

```bash
npx uri-scheme open dealsapp:///deal/1 --ios
```

## Other scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `yarn lint`    | ESLint (Expo config)     |
| `yarn test`    | Jest                     |
| `yarn validate`| Lint then tests          |
| `yarn web`     | Start for web            |

## Architecture decisions

These choices target a **small demo app** and straightforward product work; they can be revisited as scope grows.

| Area | Choice | Rationale |
| ---- | ------ | --------- |
| **Navigation** | [Expo Router](https://docs.expo.dev/router/introduction/) | File-based routing fits quick demos and simple flows without extra boilerplate. |
| **API / server state** | [TanStack Query (React Query)](https://tanstack.com/query/latest) | Caching, background refresh, and request deduplication for remote data; keeps components thin. |
| **Analytics** | [Sentry](https://sentry.io/) or [Pendo](https://www.pendo.io/) | Error and performance visibility (Sentry) or product analytics (Pendo), depending on what we need to measure. |
| **Feature flags** | [LaunchDarkly](https://launchdarkly.com/) | Managed rollouts and experiments; the app may ship with a **mock** client until the real SDK is wired. |
| **Client state** | [Redux Toolkit](https://redux-toolkit.js.org/) | Sufficient for global UI and cross-screen state today. If we need lighter or more local control later, **Zustand** (or similar) is a reasonable alternative. |
| **Tests** | [Jest](https://jestjs.io/) (+ Testing Library for React Native) | Standard unit and component tests in the Expo ecosystem. |

## Roll out

How we ship changes depends on what changed:

### JavaScript-only updates and small fixes — OTA

Use **over-the-air (OTA)** updates (e.g. [EAS Update](https://docs.expo.dev/eas-update/introduction/)) when the change is **JavaScript / asset-only** and does not require a new native binary.

- Prefer **partial / staged rollout** (e.g. percentage of users or a channel) so issues surface before everyone receives the bundle.
- Keep the option to **roll back** to a known-good update if telemetry or support shows a regression.

### Native releases — bigger or breaking changes

Ship a **new store build** when you change **native code**, **native dependencies**, the **runtime/SDK** in ways OTA cannot cover, or introduce **breaking** behavior that must align with a specific binary.

- Run the **test process** through **TestFlight** (iOS) and **Google Play beta** (Android) before promoting to production.
- Use internal / closed testing tracks first, then open beta or phased production rollout per store guidelines.

## What's next

Planned follow-ups as the app moves beyond the demo:

- **OAuth2** — Add authentication (sign-in, token refresh, protected routes).
- **Backend & SDKs** — Connect to a real API; replace mocks with **production analytics** (e.g. Sentry / Pendo) and the **LaunchDarkly** client SDK.
- **Deals list** — **Load on demand** (pagination or infinite scroll) instead of loading the full list up front.
- **Splash screen** — Branded launch experience while the app initializes (Expo Splash Screen / assets).
- **CI/CD** — **Pipelines** for building, testing, and releasing (EAS Build / Submit, or similar).
- **UX robustness** — **Error handling** across the data layer, plus explicit **loading** and **error** UI states on list and detail screens.

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
