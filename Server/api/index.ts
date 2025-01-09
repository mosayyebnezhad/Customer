import { Hono } from 'hono'
import { handle } from 'hono/vercel'
// @ts-ignore
import Mainpage from './Components/intrypoint.ts'


const app = new Hono().basePath('/api')







app.get('/', (c) => {
  return c.html(Mainpage)
})

const handler = handle(app);


















export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;