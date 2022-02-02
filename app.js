const express = require('express')
const app = express()
const port = 5555

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('home')
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
    console.log('About')
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
    console.log('works works')
    res.sendFile(__dirname + '/views/works.html')
})

app.get('/photogallery', (req, res) => {
    console.log('pictures')
    res.sendFile(__dirname + '/views/photo-gallery.html')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})