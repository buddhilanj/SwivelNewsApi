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
} from 'react-native';
import {connect} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getTopHeadlines} from '../actions';
import {NewsRow} from '../components';

class HeadLineScreen extends React.Component {
  componentDidMount() {
    this.props.getTopHeadlines();
  }

  handleOnPress = item => {
    console.log('Pressed', item); // create new screen and pass item as navigation props
  };

  renderRow = ({item}) => {
    return (
      <NewsRow
        urlToImage={item.urlToImage}
        title={item.title}
        onPress={() => this.handleOnPress(item)}
      />
    );
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Top Headlines</Text>
            </View>
            {this.props.headlinesError ? (
              <View style={styles.error}>
                <Text>{this.props.headlinesError}</Text>
              </View>
            ) : null}
            <FlatList
              data={this.props.headlines}
              renderItem={this.renderRow}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
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
  row: {
    flexDirection: 'row',
  },
  error: {
    backgroundColor: 'red',
    padding: 2,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    getTopHeadlines: () => dispatch(getTopHeadlines()),
  };
};

const mapStateToProps = ({NewsReducer}) => {
  const {headlines, headlinesError} = NewsReducer;
  return {headlines, headlinesError};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeadLineScreen);
