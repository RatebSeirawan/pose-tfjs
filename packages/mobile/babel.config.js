const MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: ['.js', '.ios.js', '.android.js', '.json'],
    alias: {
      Src: './src/',
      Config: './src/Config/',
      Navigation: './src/Views/Navigation/',
      Assets: './src/Views/Assets/',
      Theme: './src/Views/Theme/',
      Screens: './src/Views/Screens/',
      Constants: './src/Views/Constants/',
      Components: './src/Views/Components/',
      Utils: './src/Utils/',
      Store: './src/Store/',
      API: './src/API/',
      Hooks: './src/Views/Hooks/',
      Services: './src/Services/',
    },
  },
];

module.exports = {
  plugins: [MODULE_RESOLVER],
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
};
