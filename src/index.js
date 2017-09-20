import { AppRegistry } from 'react-native';
import App from './App';
// import MyApp from './MyApp';

if (!global.__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}

AppRegistry.registerComponent('rate', () => App);
