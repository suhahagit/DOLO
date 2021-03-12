import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import History from "./History"
import Favorites from "./Favorites"
import Home from "./Home"

const Tab = createBottomTabNavigator()

export default function Tabs() {

    return (

        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#86A8E7',
            }}>

            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />

            <Tab.Screen name="Favorites" component={Favorites} options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="heart" color={color} size={size} />
                ),
            }} />

            <Tab.Screen name="History" component={History} options={{
                tabBarLabel: 'History',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="history" color={color} size={size} />
                ),
            }} />

        </Tab.Navigator>
    )

}