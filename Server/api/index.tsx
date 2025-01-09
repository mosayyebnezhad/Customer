import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import Hello from './Component/hello'


const app = new Hono().basePath('/api')


app.get('/hello', (req, res) => {
  return req.html(<Hello/>)
})



const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;