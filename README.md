# Nama Produk: SELUMBUNG!

## Deskripsi Produk
**SELUMBUNG!** adalah aplikasi monitoring dan pengelolaan data pertanian berbasis mobile. Aplikasi ini dirancang untuk membantu petani, penyuluh, dan pemangku kepentingan lainnya dalam memantau hasil pertanian, mengelola informasi, serta membuat keputusan berbasis data. Dengan antarmuka yang sederhana dan mudah digunakan, aplikasi ini bertujuan untuk meningkatkan efisiensi dan produktivitas sektor pertanian.

## Komponen Pembangun Produk
- **React Native**: Framework utama untuk membangun aplikasi mobile.
- **Metro Bundler**: JavaScript bundler bawaan React Native.
- **Node.js**: Untuk mengelola dependensi dan skrip aplikasi.
- **Android Studio & Xcode**: Emulator/simulator untuk pengujian aplikasi di Android dan iOS.
- **Backend/API**: Menggunakan RESTful API untuk pengelolaan data (opsional, sesuai dengan kebutuhan).

## Sumber Data
Aplikasi ini menggunakan data:
- Data pertanian yang diunggah oleh pengguna.

## Tangkapan Layar Komponen Penting Produk
### Halaman Utama
![Halaman Utama](./screenshots/homepage.jpeg)

### Halaman Input Data
![Halaman Input Data](./screenshots/inputdata.jpeg)

### Halaman List Data
![Halaman List Data](./screenshots/datatanaman.jpeg)

### Halaman Maps
![Halaman Maps](./screenshots/map.jpeg)

### Halaman Edit Data
![Halaman Edit Data](./screenshots/edit.jpeg)

### Halaman Tentang
![Halaman Tentang App](./screenshots/tentang.jpeg)

---

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server
First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application
Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
