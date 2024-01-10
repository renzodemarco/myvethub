import { Router } from 'express'

const indexRouter = new Router()

indexRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to myvethub backend!' })
})

export default indexRouter