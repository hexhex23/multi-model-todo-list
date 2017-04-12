const express = require('express')
const router = express.Router()

router.get('/', function (req,res) {
res.send('homepage')
})

router.get('/about', function (req,res) {
res.send('about')
})

router.get('/faq', function (req,res) {
res.send('faq')
})

module.exports = router
