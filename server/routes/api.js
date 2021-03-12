const express = require('express')
const router = express.Router()
const Recommendation = require('../models/Recommendation.js')

router.get('/sanity', function (req, res) {
    res.sendStatus(200)
})

router.get('/history/recommendations', async function (req, res) {
    try {
        const recommendations = await Recommendation.find({ type: 'history' })
        res.send(recommendations)
    } catch (error) {
        console.log(error)
        res.send(null)
    }
})

router.get('/favorites/recommendations', async function (req, res) {
    try {
        const recommendations = await Recommendation.find({ type: 'favorites' })
        res.send(recommendations)
    } catch (error) {
        console.log(error)
        res.send(null)
    }
})

router.post('/recommendation', async function (req, res) {
    try {
        const recommendation = new Recommendation({ ...req.body })
        await recommendation.save()
        res.send(recommendation)
    } catch (error) {
        console.log(error)
        res.send(null)
    }
})

router.delete('/recommendation/:recommendationID', async function (req, res) {
    try {
        const recommendation = await Recommendation.findOneAndRemove({ myID: req.params.recommendationID })
        res.send(recommendation)
    } catch (error) {
        console.log(error)
        res.send(null)
    }
})



module.exports = router