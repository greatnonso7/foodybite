module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          screens: './src/screens',
          navigation: './src/navigation',
          components: './src/components',
          images: './src/assets/images',
          'common-components': './src/common-components',
          state: './src/state',
        },
      },
    ],
  ],
};
