const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const route = require('./src/Routes/postRoute')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/BYAPI/v1', route)

app.get('/', (req, res) => {
    res.send("Braya's server")
})


//Initialize MongoDB
require('./src/utility/database')

//Port Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})