const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errMiddleware')
const dotenv = require('dotenv').config() // it's alowed us to have .env file 
const colors = require('colors')
const connectDB = require('./config/db')
connectDB()

// set up minddleware to be able see data in body send from req
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalsRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server run  on port ${port}`))