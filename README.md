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

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
