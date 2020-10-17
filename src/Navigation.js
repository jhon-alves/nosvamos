import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Rotas
import {
  HomeStackNavigator,
  TrajetosStackNavigator,
  AcompanheStackNavigator,
  PerfilStackNavigator
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#9d1d64',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Trajetos"
        component={TrajetosStackNavigator}
        options={{
          tabBarLabel: 'Trajetos',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map-marker" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Acompanhe"
        component={AcompanheStackNavigator}
        options={{
          tabBarLabel: 'Acompanhe',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="running" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilStackNavigator}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
