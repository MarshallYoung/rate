import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
} from 'react-native';
import Images from '../img';
import ImageTextInput from '../widget/ImageTextInput'

export default class Login extends Component {

  static navigationOptions = {
    title: '登录',
    style: {
      backgroundColor: 'green',
    }
  };

  render(){
    return (
      <View>
        <Text>登录</Text>
        <ImageTextInput source={Images.user} title={'用户名'} secureTextEntry={false}/>
        <ImageTextInput source={Images.lock} title={'密码'} secureTextEntry={true}/>
        <Button onPress={()=>{}} title='确定'/>
      </View>
    )
  }
}
