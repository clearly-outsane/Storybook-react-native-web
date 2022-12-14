export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialCommunityIcons;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
