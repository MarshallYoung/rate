import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  CameraRoll,
} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: 120,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

// 照片获取参数
const fetchParams = {
  first: 6,
  groupTypes: 'All',
  assetType: 'Photos',
};

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
    };
  }

  componentDidMount() {
    // 获取照片
    const promise = CameraRoll.getPhotos(fetchParams);
    promise.then((data) => {
      const edges = data.edges;
      const photos = [];
      for (const i in edges) {
        photos.push(edges[i].node.image.uri);
      }
      this.setState({
        photos,
      });
    }, (err) => {
      alert('获取照片失败！');
    });
  }

  render() {
    const photos = this.state.photos || [];
    const photosView = [];
    for (let i = 0; i < 6; i += 2) {
      photosView.push(
        <View key={i} style={styles.row}>
          <View style={styles.flex}>
            <Image resizeMode="stretch" style={styles.image} source={{ uri: photos[i] }} />
          </View>
          <View style={styles.flex}>
            <Image resizeMode="stretch" style={styles.image} source={{ uri: photos[i + 1] }} />
          </View>
        </View>,
      );
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          {photosView}
        </View>
      </ScrollView>
    );
  }
}
