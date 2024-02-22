const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://brayacheat:0965984619@bytechnology.piywfi8.mongodb.net/BY__Database?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB...'))
.catch((error) => console.log(error))

module.exports = mongoose