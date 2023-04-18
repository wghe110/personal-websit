const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
    const options = {
        root: path.resolve(__dirname, '../src/welcome')
    }

    res.sendFile('index.html', options)
})

router.get('/blog', (req, res) => {
    const options = {
        root: path.resolve(__dirname, '../src/blog')
    }
    
    res.sendFile('index.html', options)
})

router.get('/echarts-demo', (req, res) => {
    const options = {
        root: path.resolve(__dirname, '../src/echarts-demo')
    }
    
    res.sendFile('index.html', options)
})

router.get('/vue-component', (req, res) => {
    const options = {
        root: path.resolve(__dirname, '../src/vue-component')
    }
    
    res.sendFile('index.html', options)
})

module.exports = router