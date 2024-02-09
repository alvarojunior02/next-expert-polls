import fastfy from 'fastify'
import cookie from '@fastify/cookie'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import 'dotenv/config'

const app = fastfy()

app.register(cookie, {
  secret: process.env.COOCKIE_SECRET,
  hook: 'onRequest'
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.get('/', () => {
  return { message: "Hello World!" }
})

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server is running!")
})