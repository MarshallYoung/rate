import {
  StyleSheet,
} from 'react-native';

const Images = {
  styles: StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
    },
  }),
  user: require('./user.png'),
  lock: require('./running.png'),
  services: require('./services.png'),
};

export { Images as default };
