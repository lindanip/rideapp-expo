import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  TripsScreen

} from '../screens/index'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function AppNavigation() {

  const Tab = createBottomTabNavigator();

  const TabScreenStack = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // let iconName;

            if (route.name == 'Home')
              return <FontAwesome name='home' size={24} color="black" />
            else if (route.name == 'Trips')
              return <FontAwesome5 name='history' size={24} color="black" />
            else if (route.name == 'Profile')
              return <Ionicons name='ios-person-circle' size={24} color="black" />
          }
        })}
      >
        <Tab.Screen 
          name='Home'
          component={HomeScreen}
        />
        <Tab.Screen 
          name='Trips'
          component={TripsScreen}
        />
        <Tab.Screen 
          name='Profile'
          component={ProfileScreen}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <TabScreenStack />
    </NavigationContainer>
  )
}
