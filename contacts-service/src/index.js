'use strict'

const server = require('./server/server.js')
const db = require('./db')
const config = require('./config')
const port = config.get('port')
const uri = config.get('MONGODB_URI') || config.get('mongoose:uri')

console.log('### Contacts service ###')

console.info(`Starting process PID=${process.pid}`)

console.log('Starting http server...')

async function start () {
  let app

  try {
    await db.connect({ uri })
    app = await server.start({ port })
    app.on('close', () => db.disconnect())
    console.log('Server started on port: ', port)
  } catch (e) {
    console.error('Server couldn\'t start.')
    console.error(e.message)
  }
}

start()
