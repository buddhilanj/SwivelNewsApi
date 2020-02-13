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
} from 'react-native';
import {connect} from 'react-redux';
import {getEverythingNews} from '../actions';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NewsRow} from '../components';

class CustomNewsScreen extends React.Component {
  componentDidMount() {
    this.props.getEverythingNews({type: this.props.custom});
  }

  componentWillReceiveProps(nextProps) {
    this.props.getEverythingNews({type: nextProps.custom});
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
    console.log('prps', this.props);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}> {this.props.username} </Text>
            </View>
            {this.props.customError ? (
              <View style={styles.error}>
                <Text>{this.props.customError}</Text>
              </View>
            ) : null}
            {!this.props.custom ? (
              <View style={styles.error}>
                <Text>Please Set User Preference From Profile</Text>
              </View>
            ) : (
              <FlatList
                data={this.props.customnews}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => `${index}`}
              />
            )}
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
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    getEverythingNews: ({type}) => dispatch(getEverythingNews({type})),
  };
};

const mapStateToProps = ({ProfileReducer, NewsReducer}) => {
  const {username, custom} = ProfileReducer;
  const {customnews, customError} = NewsReducer;
  return {
    username,
    custom,
    customnews,
    customError,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomNewsScreen);
