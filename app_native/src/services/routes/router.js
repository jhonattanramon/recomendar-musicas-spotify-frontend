const router = require('express').Router()

const userRouter = require('./User')

router.use('/', userRouter)

module.exports = router