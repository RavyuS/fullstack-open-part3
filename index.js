const express = require('express')
const app = express()


app.use(express.json())

app.get(`/api/persons`,(req,res) => {
    res.json(persons)

})

app.get('/api/persons/:id',(req,res) => {
    const id = req.params.id
    const person = persons.find(person => person.id===Number(id))
    if(!person) {
        console.log(`${id} not found`)
        return res.status(404).end()
    }
    res.json(person)
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
    const id = Math.floor(Math.random()*100000)
    console.log(`ID generated: ${id}`)
    const match = persons.find(person => person.name ===body.name)
    if(!body.name ||!body.number){
        return res.status(400).json({error:"name or number missing."})
    }
    
    else if (match){
        return res.status(400).json({error:"name must be unique"})
    }

    const person = {
        name: body.name,
        number: body.number,
        id:id
    }
    persons.push(person)
    res.json(person)

})

app.get('/info',(req,res)=>{
    
    
    res.send(
        `<p>Phonebook has info for ${persons.length} people</p>
        <br>${Date()}`
    )
})

const PORT =3001
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})

let persons = [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      },
      {
        "name": "Mummy",
        "number": "93896702",
        "id": 5
      }
    ]