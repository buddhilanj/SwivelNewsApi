import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Image, Card, Button} from 'react-native-elements';

export const NewsRow = ({urlToImage, title, onPress, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <View style={styles.row}>
          <Image source={{uri: urlToImage}} style={styles.image} />
          <Text style={{flex: 1}}>{title}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {width: 100, height: 100, margin: 5},
  row: {
    flexDirection: 'row',
    margin: 5,
  },
});
