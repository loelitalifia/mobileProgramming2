import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Screens/Homescreen';
import FormScreen from '../Screens/FormScreen';
import MapsScreen from '../Screens/MapsScreen';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const [user, setUser] = useState(null);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#1b3d97' }}>
      <Tab.Screen
        name="home"
        component={() => <Homescreen user={user} />}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color: color, fontSize: 12 }}>Home</Text>,
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="form"
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color: color, fontSize: 12 }}>Form</Text>,
          tabBarIcon: ({ color }) => <AntDesign name="form" size={24} color={color} />,
        }}
      >
        {() => <FormScreen setUser={setUser} />}
      </Tab.Screen>
      <Tab.Screen
        name="map"
        component={() => <MapsScreen user={user} />}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color: color, fontSize: 12 }}>Maps</Text>,
          tabBarIcon: ({ color }) => <Entypo name="map" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
