const mongoose = require('mongoose')
const password = process.env.MONGODB_USER_PASSWORD
const URL = `mongodb+srv://fullstack_ravyu:${password}@cluster0-u0xtq.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Person',personSchema,'persons')