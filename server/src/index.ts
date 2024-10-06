import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { trpcServer } from '@hono/trpc-server'
import {appRouter} from "./_app";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.use(
  '/trpc/*',
  trpcServer({
    router: appRouter,
  })
)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
