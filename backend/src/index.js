import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import indexRouter from './routes/index.routes.js';
import patientsRouter from './routes/patients.routes.js';
import errorHandler from './middlewares/error.handler.js'
import notFoundHandler from './middlewares/not.found.handler.js'
import './config/env.config.js'
import userRoutes from './routes/user.routes.js';

const app = express()
const PORT = process.env.PORT || 8080

const connection = async url => {
    await mongoose.connect(url)
}

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/api/patients', patientsRouter)
app.use('/api/user', userRoutes)

app.use(notFoundHandler)

app.use(errorHandler)

app.listen(PORT, () => {
    connection(process.env.MONGO_URI).then(console.log('Connected to Mongo DB'))
    console.log(`Server running in PORT ${PORT}`);
});