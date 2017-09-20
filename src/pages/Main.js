import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Camera from 'react-native-camera';
import Images from '../img';

export default class Main extends Component {
  static navigationOptions = {
    title: '主界面',
    tabBarLabel: '左边',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={Images.services}
        style={[Images.styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
	render() {
    return(
      <View style={styles.container}>
        <Camera
         ref={(cam) => {
           this.camera = cam;
         }}
         style={styles.preview}
         aspect={Camera.constants.Aspect.fill}>
         <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
       </Camera>
      </View>
    )
	}

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
