import { MongoClient } from "https://deno.land/x/mongo@v0.31.0/mod.ts";

export const client = new MongoClient
await client.connect("mongodb://localhost:27017")