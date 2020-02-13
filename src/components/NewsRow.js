import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export const NewsRow = ({urlToImage, title, onPress, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        <Image source={{uri: urlToImage}} style={styles.image} />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {width: 100, height: 100},
  row: {
    flexDirection: 'row',
    margin: 5,
  },
});
