import { NextResponse } from "next/server"

import { MongoClient } from "mongodb";
import 'dotenv/config'

export async function GET(req) {
    let uri = process.env.MONGODB_URI
    const client = new MongoClient(uri)

    try {
        await client.connect()

        let postCollection = client.db('Posts').collection('Posts')

        let postArray = []
        // limit could be custom
        const cursor = postCollection.find({}).limit(10)

        for await (const doc of cursor) {
            postArray.push(doc)
        }
        console.log(postArray)

        return NextResponse.json({ message: "Sent posts", worked: true })
    }
    catch (e) {
        console.log(e)
        return NextResponse.json({ message: e, worked: false });
    }
    finally {
        await client.close()
    }
}