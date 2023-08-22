import { NextResponse } from "next/server"

import { MongoClient } from "mongodb";
import 'dotenv/config'

export async function POST(req) {
    let uri = process.env.MONGODB_URI
    const client = new MongoClient(uri)

    try {
        await client.connect()

        // let jsonData = await req.json()
        // if jsonData

        let postCollection = client.db('Posts').collection('Posts')

        await postCollection.insertOne(await req.json())
        return NextResponse.json({ message: "Stored post", worked: true })
    }
    catch (e) {
        console.log(e)
        return NextResponse.json({ message: e, worked: false });
    }
    finally {
        await client.close()
    }
}