import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import Weather from "./Weather"

export default function Home() {

    const [pressed, setPressed] = useState(false)

    function handlePress() {
        setPressed(true)
    }

    return (
        <LinearGradient colors={['#7F7FD5', '#86A8E7', '#91EAE4']} style={styles.container}>
            {!pressed ?
                <Button mode="contained" onPress={handlePress} style={{ padding: 40 }} color='#C71585'>
                    What should I wear today?
            </Button> :
                <Weather setPressed={setPressed} />
            }
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})