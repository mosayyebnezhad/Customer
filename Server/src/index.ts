import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('you hear my voice from CloudWlare workers and Hello Hono! 🚀' )
})

export default app
