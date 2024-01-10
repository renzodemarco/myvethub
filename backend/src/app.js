import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import indexRouter from './routes/index.routes.js';
import patientsRouter from './routes/patients.routes.js';
import errorHandler from './middlewares/error.handler.js'
import notFoundHandler from './middlewares/not.found.handler.js'

const app = express()
const PORT = process.env.PORT || 8080
const MONGO_URI = 'mongodb+srv://renzodemarco:coderhouse@rencluster.iuxqmho.mongodb.net/my-vet-hub?retryWrites=true&w=majority'

const connection = async url => {
    await mongoose.connect(url)
}

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)

app.use('/api/patients', patientsRouter)

app.use(errorHandler)

app.use(notFoundHandler)

app.listen(PORT, () => {
    connection(MONGO_URI).then(console.log('Connected to Mongo DB'))
    console.log(`Server running in PORT ${PORT}`);
});