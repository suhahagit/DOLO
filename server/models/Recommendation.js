const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecommendationSchema = new Schema({
    myID: String,
    type: String,
    date: String,
    temp: String,
    icon: String,
    condition: String
})

const Recommendation = mongoose.model('Recommendation', RecommendationSchema)

module.exports = Recommendation