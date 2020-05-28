require('dotenv').config()
const express = require('express')  
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/Person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json()) //Middleware
app.use(morgan(':method :url :status - :response-time ms :req-content'))

morgan.token('req-content',(req,res) => {
  console.log('invoking token')
  return JSON.stringify(req.body)
})

app.get(`/api/persons`,(req,res) => {
  Person.find({}).then(persons => res.json(persons))
})

app.get('/api/persons/:id',(req,res) => {
    const id = req.params.id
    Person.findById(id).then(person=> res.json(person))
    // const person = persons.find(person => person.id===Number(id))
    // if(!person) {
    //     console.log(`${id} not found`)
    //     return res.status(404).end()
    // }
 
})

app.delete('/api/persons/:id',(req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => id !== person.id)
    console.log("deleted")
    res.status(204).end()
    
})

app.post('/api/persons',(req,res) => {
    const body = req.body
    console.log(body)
    let match 
    Person.find({name:body.name}).then(response => match = response)
    if(!body.name ||!body.number){
        return res.status(400).json({error:"name or number missing."})
    }
    
    else if (match){
        return res.status(400).json({error:"name must be unique"})
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    })
    person.save().then(resp => {
      console.log(`saved ${resp}`)
      res.json(resp)
    })

})

app.get('/info',(req,res)=>{
    
    
    res.send(
        `<p>Phonebook has info for ${persons.length} people</p>
        <br>${Date()}`
    )
})

const PORT = process.env.PORT || 3001
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})


