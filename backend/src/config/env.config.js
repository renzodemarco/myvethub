import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

export default {
    MONGO_URI: process.env.MONGO_URI,
}