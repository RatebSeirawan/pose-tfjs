module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
      'react-native/no-inline-styles': 0
    },
    settings: {
      'import/resolver': {
        'babel-module': {
          alias: {
            'Config': './src/Config',
            'Src': './src',
            'Navigation': './src/Views/Navigation',
            'Assets': './src/Views/Assets',
            'Theme': './src/Views/Theme',
            'Screens': './src/Views/Screens',
            'Constants': './src/Views/Constants',
            'Components': './src/Views/Components',
            'Utils': './src/Utils',
            'Store': './src/Store',
            'API': './src/API',
            'Hooks': './src/Views/Hooks',
            'Services': './src/Services',
          },
        },
      },
    },
  };
  