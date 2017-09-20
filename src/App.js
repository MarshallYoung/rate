import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import { createStore } from 'redux';
import Main from './pages/Main';
import Login from './pages/Login';
import Photos from './pages/Photos';
import Functions from './pages/Functions'

// 应用界面路由
const FuncNav = StackNavigator({
  Functions: { screen: Functions },
  takePicture: { screen: Main },
}, {
  header: 'screen',
});
const LoginNav = StackNavigator({
  Login: { screen: Login },
}, {
  header: 'screen',
});
// 根Tab
const App = TabNavigator({
  Functions: { screen: FuncNav },
  Mine: { screen: LoginNav },
  Photos: { screen: Photos },
});

export default App;
