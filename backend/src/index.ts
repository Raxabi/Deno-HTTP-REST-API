import server from "./main.ts"

const port = 5000

// serve method require 1 parameter, a listener
await server.serve(Deno.listen({port}))