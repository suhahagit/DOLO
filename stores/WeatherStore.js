import { observable, action, makeObservable, runInAction } from 'mobx'
import * as Location from 'expo-location'
import axios from 'axios'
import { Platform } from 'react-native'

const API_KEY = 'f1f86ae326mshec3164bf9bdf29fp1f2e69jsnbbf55249ae99'
const SERVER_URL = Platform.OS === 'android' ? 'http://10.0.2.2:4200' : `http://10.0.0.24:4200`

export class WeatherStore {

    constructor() {

        this.getLocation()
        this.location = null
        this.currWeather = null
        this.isLiked = false
        this.history = []
        this.favorites = []

        makeObservable(this, {
            location: observable,
            currWeather: observable,
            isLiked: observable,
            history: observable,
            favorites: observable,
            setLocation: action,
            setCurrWeather: action,
            setIsLiked: action,
            deleteInteraction: action,
            addInteraction: action,
            getRecommendations: action,
        })
    }

    getLocation = async () => {
        const { status } = await Location.requestPermissionsAsync()
        if (status !== 'granted') {
            alert("This app requires location permission!")
        }
        const userLocation = await Location.getCurrentPositionAsync()
        this.setLocation(userLocation)
    }

    setLocation = async (userLocation) => {
        this.location = userLocation
        this.setCurrWeather()
    }

    setIsLiked = async () => {
        this.isLiked = !this.isLiked
    }

    setCurrWeather = async () => {
        const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?lat=${this.location?.coords.latitude}&lon=${this.location?.coords.longitude}&units=metric`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        const weatherResponse = await response.json()
        runInAction(() => {
            this.currWeather = weatherResponse
        })
    }

    getRecommendations = async (type) => {
        try {
            this[`${type}`] = []
            let recommendations = await axios.get(`${SERVER_URL}/${type}/recommendations`)
            runInAction(() => {
                this[`${type}`] = recommendations.data
            })
        } catch (error) {
            console.log(error.toString())
        }
    }

    deleteInteraction = async (id, type) => {
        try {
            await axios.delete(`${SERVER_URL}/recommendation/${id}`)
            runInAction(() => {
                const i = this[`${type}`].findIndex(r => r.myID === id)
                this[`${type}`].splice(i, 1)
            })
        } catch (error) {
            console.log(error.toString())
        }
    }

    addInteraction = async (recommendation) => {
        try {
            await axios.post(`${SERVER_URL}/recommendation`, recommendation)
            runInAction(() => {
                this[recommendation.type].push(recommendation)
            })
        } catch (error) {
            console.log(error.toString())
        }
    }
}
