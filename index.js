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

app.get('/api/persons/:id',(req,res,next) => {
    const id = req.params.id
    Person.findById(id).then(person=> {
      if(person)res.json(person)
      else next(error)
    }).catch(error => next(error))
    // const person = persons.find(person => person.id===Number(id))
    // if(!person) {
    //     console.log(`${id} not found`)
    //     return res.status(404).end()
    // }
 
})

app.delete('/api/persons/:id',(req,res,next) => {
    const id = req.params.id
    Person.findByIdAndDelete(id).then(deleted =>{
      res.status(204).end()
      console.log(`Deleted ${deleted}`)
    }).catch(error => next(error))
    
    
})

app.put('/api/persons/:id',(req,res,next) => {
  const id = req.params.id
  const body = req.body
  const replacementNote = {
    name:body.name,
    number:body.number
  }

  Person.findByIdAndUpdate(id,replacementNote,{new:true})
  .then(updatedPerson => res.json(updatedPerson)).catch(error=>next(error))
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
    
    Person.find({}).then(Persons =>{
      res.send(
        `<p>Phonebook has info for ${Persons.length} people</p>
        <br>${Date()}`
    )      
    })
 
})

const errorHandler = (error,request,response,next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error) //default express error handler
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})


