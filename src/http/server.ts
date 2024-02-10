import fastfy from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import 'dotenv/config'
import { pollResults } from './ws/poll-results'

const app = fastfy()

app.register(cookie, {
  secret: process.env.COOCKIE_SECRET,
  hook: 'onRequest'
})

app.register(websocket)

// HTTP Routes
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

// WebSocket Routes
app.register(pollResults)

// Run Server
app.listen({ port: 3333 }).then(() => {
  console.log("Server is running!")
})