import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import { observer, inject } from 'mobx-react'
import weatherConditions from '../Recommendations/data'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Divider } from 'react-native-paper'


function History(props) {

    const { history, getRecommendations, deleteInteraction } = props.info

    useEffect(() => {
        getRecommendations('history')
    }, [])

    return (
        <LinearGradient colors={['#7F7FD5', '#86A8E7', '#91EAE4']} style={styles.container}>
            <Text style={{ marginTop: 55, fontSize: 25, fontWeight: 'bold', color: 'white' }}>Interactions History</Text>
            <FlatList
                data={history}
                keyExtractor={(h) => h.myID}
                renderItem={({ item }) => (
                    <View >
                        <View style={{ flexDirection: 'row', marginTop: 67 }}>
                            <Text style={styles.txt}>At {item.date} </Text>
                            <Text style={styles.txt}>It was {item.temp}°C  </Text>
                            <MaterialCommunityIcons name="delete" color='#C71585' size={30} onPress={() => deleteInteraction(item.myID, 'history')} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                            <Text style={styles.txt}>Recommended </Text>
                            {weatherConditions[item.condition].map(i => <Image style={{ width: 30, height: 30, margin: 5 }} source={{ uri: i }} key={(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()} />)}
                        </View>
                        <Divider />
                    </View>
                )} />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#C71585',
    }
})

export default inject("info")(observer(History))
