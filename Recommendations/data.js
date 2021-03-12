
const UMBRELLA = 'https://imgur.com/MQKiOYh.png'
const SCARF = 'https://imgur.com/GV0MKlH.png'
const BEANIE = 'https://imgur.com/2KvJgB1.png'
const BOOTS = 'https://imgur.com/fotVoAI.png'
const CARROT = 'https://imgur.com/w5iNfYc.png'
const COAT = 'https://imgur.com/5uoCcQX.png'
const JUMPER = 'https://imgur.com/Z1Co9pM.png'
const LEGGINGS = 'https://imgur.com/TwUl4hC.png'
const RAINCOAT = 'https://imgur.com/dIu3LUT.png'
const SANDALS = 'https://imgur.com/syzkQYS.png'
const HAT = 'https://imgur.com/KryxtgY.png'
const SUNGLASSES = 'https://imgur.com/JYaVJ3t.png'

const weatherConditions = {
    Rain: [UMBRELLA, SCARF, BEANIE, RAINCOAT, BOOTS],
    Clouds: [BEANIE, JUMPER, SCARF],
    Snow: [CARROT, LEGGINGS, COAT, BEANIE, BOOTS],
    Clear: [SANDALS, HAT, SUNGLASSES],
    Thunderstorm: [RAINCOAT, UMBRELLA, SCARF],
    Drizzle: [UMBRELLA, RAINCOAT, BOOTS],
    Atmosphere: [BEANIE, JUMPER, SCARF]
}

module.exports = weatherConditions