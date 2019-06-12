import express from 'express'
import bodyparser from 'body-parser'
// import cors from 'cors'
import mongoose from 'mongoose'
import config from './DB'
import UserRouter from './src/routes/user.router'

mongoose.Promise = global.Promise
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected!')},
    err => { console.log(`Can not connect to the database ${err}`)}
)

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
// app.use(cors())

app.get('/', (req, res) => res.send('App is working'))

app.use('/api', UserRouter)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})