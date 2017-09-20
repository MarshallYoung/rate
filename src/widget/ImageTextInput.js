import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  input: {
    backgroundColor: 'grey',
    flex: 1,
  },
});

export default class ImageTextInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={this.props.source} />
        <View>
          <Text>{this.props.title}</Text>
        </View>
        <View style={styles.input}>
          <TextInput secureTextEntry={this.props.secureTextEntry} />
        </View>
      </View>
    );
  }
}
