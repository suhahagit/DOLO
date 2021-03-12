import React, { useState, useEffect } from 'react'
import { Text, Image, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { observer, inject } from 'mobx-react'
import weatherConditions from '../Recommendations/data'
import moment from 'moment'

function Weather(props) {

    const { currWeather, setIsLiked, isLiked, addInteraction, deleteInteraction } = props.info
    const [currId, setCurrId] = useState(null)

    function handleClose() {
        props.setPressed(false)
    }

    useEffect(() => {
        const type = 'history'
        const myID = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
        const date = moment().format('MMMM Do YYYY, h:mm:ss a')
        const intercation = { myID, type, date, temp: currWeather.main.temp, icon: currWeather.weather[0].icon, condition: currWeather.weather[0].main }
        addInteraction(intercation)
    }, [])

    function handleLike() {
        const type = 'favorites'
        if (isLiked) {
            deleteInteraction(currId, 'favorites')
        } else {
            const myID = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
            setCurrId(myID)
            const date = moment().format('MMMM Do YYYY, h:mm:ss a')
            const intercation = { myID, type, date, temp: currWeather.main.temp, icon: currWeather.weather[0].icon, condition: currWeather.weather[0].main }
            addInteraction(intercation)
        }
        setIsLiked()
    }

    return (
        <LinearGradient colors={['#7F7FD5', '#86A8E7', '#91EAE4']} style={styles.container}>
            <View style={{ alignSelf: "flex-start", marginTop: 55 }} >
                <MaterialCommunityIcons onPress={handleClose} name="close" color='white' size={55} />
            </View>
            <View style={styles.content}>
                <Text style={styles.txt}>Today's temperature is {currWeather.main.temp}°C</Text>
                <Text style={styles.txt}>it looks like this  <Image style={{ width: 50, height: 50 }} source={{ uri: `http://openweathermap.org/img/wn/${currWeather.weather[0].icon}@2x.png` }} /> </Text>
                <Text style={styles.txt}>I recommend you these items</Text>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    {weatherConditions[currWeather.weather[0].main].map(i => <Image style={{ width: 50, height: 50, margin: 10 }} source={{ uri: i }} key={(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()} />)}
                </View>
                <MaterialCommunityIcons name="heart" color={isLiked ? 'red' : 'white'} size={43} style={{ marginTop: 55 }} onPress={handleLike} />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    }
})

export default inject("info")(observer(Weather))
