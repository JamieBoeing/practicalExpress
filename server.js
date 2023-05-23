
// import express package
const express = require('express')
const app = express()
const port = 3000

// Greetings 
app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}! It's so great to see you!`)
})

// Tip Calculator
app.get(, (req, res) => {
    const total =parseFloat(req.params.total)
    const tipPercentage = parseFloat(req.params.tipPercentage)

    const tipAmount = (total * tipPercentage) /100
    res.send(tipAmount.toString())
})

app.listen(port, () => {
    console.log(`Yes I am listening on port ${port}`)
})