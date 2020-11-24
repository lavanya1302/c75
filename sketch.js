import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
const DATA = [
  {
    
    title: 'Books',
  },
  {
    
    title: 'Authors',
  },
  {
  
    title: 'BookPrice',
  },
  {
   
    title: 'Autobioagraphies',
  },
  {
      title: 'BookPrice',
  };

  var AppNavigator = createSwitchNavigator({
   LoginScreen: LoginScreen,
  });
  
const AppContainer = createAppContainer(AppNavigator);
const Tab = createBottomTabNavigator();

function theTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Books issued"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Books issued"
        component={Booksissued}
        options={{
          tabBarLabel: 'Books Issued',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="Books issued" color={Blue} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Books&Authors"
        component={Books&Authors}
        options={{
          tabBarLabel: 'Books&Authors',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="Books&Authors" color={Red} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="Seach" color={Green} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function BookTransactionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>BookTransaction!</Text>
    </View>
  );
}

    
    
function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Searc?</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="BookTransaction" component={BookTransaction} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}