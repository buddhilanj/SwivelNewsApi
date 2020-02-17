import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HeadLineScreen from '../screens/HeadLineScreen';
import CustomNewsScreen from '../screens/CustomNewsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewsScreen from '../screens/NewsScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

class MainScreen extends React.Component {
  // static navigationO
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Top" component={HeadLineScreen} />
        <Tab.Screen name="Custom" component={CustomNewsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }
}

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Swivel" component={MainScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationStack;
