import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';

export default class Functions extends Component {
  static navigationOptions = {
    title: '功能',
  }
  render() {
    return (
      <View>
        <Button title="拍照" onPress={()=>this.props.navigation.navigate('takePicture')} />
      </View>
    );
  }
}
