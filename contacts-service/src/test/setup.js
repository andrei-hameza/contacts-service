'use strict'

const sinon = require('sinon')

process.env.PORT = 3000

beforeEach(function beforeEach () {
  this.sandbox = sinon.sandbox.create()
  this.sandbox.stub(console, 'info')
  this.sandbox.stub(console, 'error')
})

afterEach(function afterEach () {
  this.sandbox.restore()
})
