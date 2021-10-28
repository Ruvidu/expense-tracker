const express = require('express')
const app = express()
const dbFile = require('./conn')
const bodyParser = require('body-parser')

const expenseRoute = require('./routes/expenses')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/api/expenses',expenseRoute)

app.get('/' , (req,res) => {
    res.end('Hello')
})

app.listen(5000 , function(){
    console.log('Server Started')
})