module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-vector-icons'],
      },
    },
  ],
  framework: '@storybook/react',
};
