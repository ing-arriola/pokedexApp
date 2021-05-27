import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/SearchScreen';
import Navigator from './Navigator';


const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={Navigator} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default BottomNav