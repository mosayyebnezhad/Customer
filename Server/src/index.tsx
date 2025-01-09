import { Hono } from 'hono'
import { Hello } from './Components/Client/Intrypoint'

const app = new Hono()

app.get('/', (c) => {
  return c.html(<Hello />)
})

export default app
