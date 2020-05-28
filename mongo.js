const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }

const password = process.argv[2]
const URL = 
    `mongodb+srv://fullstack_ravyu:${password}@cluster0-u0xtq.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person',personSchema,'persons')

const newPerson = new Person( {
    name:process.argv[3],
    number:process.argv[4]
})

if(process.argv.length > 3) newPerson.save().then(resp => {
    // console.log(`Saved ${newPerson.toJSON}`)
    console.log(resp)
    mongoose.connection.close()
    })

else Person.find({}).then(result => {
    console.log(typeof result)
    result.forEach(person =>
        console.log(person))
    mongoose.connection.close()
})

