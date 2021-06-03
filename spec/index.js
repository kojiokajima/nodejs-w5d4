require('dotenv').config()
const chai = require('chai')
const mongoose = require('mongoose')
global.expect = chai.expect
global.sinon = require('sinon')

before(() => {
  mongoose.connect(process.env.MONGODB_URL, { 
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
})

after(() => {
  mongoose.connection.close()
})

afterEach(() => {
  sinon.restore()
})

require('./routes/sign-up.spec')