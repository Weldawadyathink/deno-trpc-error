import { Hono } from 'hono'
import { trpcServer } from '@hono/trpc-server'
import { appRouter } from "./_app.ts";

const app = new Hono()

// deno-lint-ignore no-explicit-any
app.get('/', (c: any) => {
  return c.text('Hello Hono!')
})

app.use(
  '/trpc/*',
  trpcServer({
    router: appRouter,
  })
)

Deno.serve(app.fetch)
