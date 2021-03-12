import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from "./components/Tabs"
import { Provider } from 'mobx-react'
import { WeatherStore } from './stores/WeatherStore'

const info = new WeatherStore()
const stores = { info }

export default function App() {

  return (
    <Provider {...stores}>
      <NavigationContainer>
        <Tabs />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  )

}