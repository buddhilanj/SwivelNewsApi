/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {} from '../actions';
import {} from '../components';
import {WebView} from 'react-native-webview';

class NewsScreen extends React.Component {
  state = {
    source: null,
    author: null,
    title: null,
    description: null,
    url: null,
    urlToImage: null,
    publishedAt: null,
    content: null,
  };

  componentDidMount() {
    const {
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    } = this.props.route.params.news;
    this.setState({
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    });
  }
  handleOnPress = item => {
    Linking.openURL(this.state.url);
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{this.state.title}</Text>
            </View>
            <Image style={styles.image} source={{uri: this.state.urlToImage}} />
            {this.state.content ? (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                  {this.state.content.replace(/<\/?[^>]+(>|$)/g, '')}
                </Text>
              </View>
            ) : null}
            <View style={styles.sectionContainer}>
              {this.state.author ? (
                <Text style={styles.sectionDescription}>
                  -{this.state.author}
                </Text>
              ) : null}
              {this.state.source ? (
                <Text style={styles.sectionDescription}>
                  Source : {this.state.source.name}
                </Text>
              ) : null}
            </View>
            <Button onPress={this.handleOnPress} title="Go to link" />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  image: {
    height: 200,
  },
  row: {
    flexDirection: 'row',
  },
  error: {
    backgroundColor: 'red',
    padding: 2,
  },
  html: {
    height: 400,
  },
});

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsScreen);
