// deno-lint-ignore-file
//? Deno REST API
import { Server, type Handler } from "https://deno.land/std@0.152.0/http/server.ts";
import { client } from "./connection/conn.ts";

const db = client.database("distros");
const coll = db.collection("rolldists");

const headers = {
    "Access-Control-Allow-Origin": "http://localhost:3000"
}

const handler: Handler = async (req: Request) => {
    const url = new URL(req.url)
    if (url.pathname === "/") {
        const distro = coll.find({"name": "Arch Linux"})
        const getAllDistros = await distro.map(item => item)
        return new Response(JSON.stringify(getAllDistros), {headers: headers})
    }
    
    if (url.pathname === "/about") {
        return new Response(`Ruta visitada ${req.url}`)
    }

    return new Response(`Route not found ${req.url}`, {status: 404})
}

const server = new Server({ handler })

export default server