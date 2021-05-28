import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigator from './Navigator';
import { Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SimplePokemon } from '../interfaces/pokeInterface';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

export type RootStackParams = {
    SearchScreen: undefined,
    PokemonScreen: { simplePokemon : SimplePokemon, color: string }
  }

const Tab = createBottomTabNavigator();

const TabStack = createStackNavigator <RootStackParams> ();

const TabSearch = () => {
    return (
      <TabStack.Navigator
          screenOptions={{
              headerShown:false,
              cardStyle:{
                  backgroundColor:'#fff'
              }
          }}
      >
        <TabStack.Screen name="SearchScreen" component={SearchScreen} />
        <TabStack.Screen name="PokemonScreen" component={PokemonScreen} />
        
      </TabStack.Navigator>
    );
  }

const BottomNav = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={styles.navBackground}
        tabBarOptions={{
            activeTintColor:'#000',
            labelStyle:styles.label,
            style:styles.tabStyle
        }
        }
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={Navigator} 
        options={{ 
            tabBarLabel:'List',
            tabBarIcon: ({color}) => (
                <Icon
                    color={color}
                    size={25}
                    name='list-outline'
                />
            )

        }}
        />
      <Tab.Screen 
        name="SearchScreen" 
        component={TabSearch}
        options={{ 
            tabBarLabel:'List',
            tabBarIcon: ({color}) => (
                <Icon
                    color={color}
                    size={25}
                    name='search-outline'
                />
            )

        }}
       />
    </Tab.Navigator>
  );
}

export default BottomNav

const styles = StyleSheet.create({
    navBackground:{
        backgroundColor:'#fff'
    },
    label:{
        marginBottom: Platform.OS === 'android' ? 10 : 0
    },
    tabStyle:{
        position:'absolute',
        backgroundColor:'rgba(255,255,255,0.75)',
        borderWidth:0,
        elevation:0
    }
})