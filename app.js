require('./db')

const app = require('express')()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const productsController = require('./controller/productscontroller')
const usersController = require('./controller/userscontroller')
const logisticsController = require('./controller/logisticscontroller')
const dashboardController = require('./controller/dashboardcontroller')
const authController = require('./controller/authController')
const manufacturerController = require('./controller/manufacturerController')

const validate = (req, res, next) => {
    console.log("I'm in a validate");
}

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

app.use('/products/', productsController)
app.use('/logistics/', logisticsController)
app.use('/dashboard/', dashboardController)
app.use('/users/', usersController)
app.use('/auth/login', authController)
app.use('/manufacturer', manufacturerController)

module.exports = app;