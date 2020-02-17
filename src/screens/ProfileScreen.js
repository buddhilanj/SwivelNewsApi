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
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Input, CheckBox, Card, Image} from 'react-native-elements';
import {connect} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NEWS_TYPES} from '../helpers/Enum';
import {saveProfileData} from '../actions';
import {component_checkbox} from '../assets';

class ProfileScreen extends React.Component {
  renderItems() {
    const items = [];
    let index = 0;
    for (const key in NEWS_TYPES) {
      items.push(
        <CheckBox
          key={`${index++}`}
          title={`${NEWS_TYPES[key]}`}
          checkedIcon={
            <Image
              style={styles.checkbox}
              source={component_checkbox.selected}
            />
          }
          uncheckedIcon={
            <Image
              style={styles.checkbox}
              source={component_checkbox.unselected}
            />
          }
          checked={this.props.preference === NEWS_TYPES[key]}
          onPress={() =>
            this.props.saveProfileData({
              username: this.props.username,
              preference: NEWS_TYPES[key],
            })
          }
        />,
      );
    }
    return items;
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Profile</Text>
              </View>
              <View style={styles.sectionContainer}>
                <Input
                  placeholder="User Name"
                  value={this.props.username}
                  onChange={({nativeEvent}) =>
                    this.props.saveProfileData({
                      username: nativeEvent.text,
                      preference: this.props.preference,
                    })
                  }
                />
              </View>
              <View style={styles.sectionContainer}>
                <Card style={styles.sectionContainer}>
                  <Text>Preference</Text>
                  {this.renderItems()}
                </Card>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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
  checkbox: {
    width: 15,
    height: 15,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    saveProfileData: ({username, preference}) =>
      dispatch(saveProfileData({username, preference})),
  };
};

const mapStateToProps = ({ProfileReducer}) => {
  const {username, preference} = ProfileReducer;
  return {
    username,
    preference,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
