/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import {App} from './src/App';
import {name as appName} from './src/app.json';
LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);
