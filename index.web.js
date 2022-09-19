import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';

const MaterialCommunityIconsStyles = `@font-face {
  src: url(${MaterialCommunityIcons});
  font-family: MaterialCommunityIcons;
}`;

const style = document.createElement('style');
style.type = 'text/css';

if (style.styleSheet) {
  style.styleSheet.cssText = MaterialCommunityIconsStyles;
} else {
  style.appendChild(document.createTextNode(MaterialCommunityIconsStyles));
}

document.head.appendChild(style);

if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
