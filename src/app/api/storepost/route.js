import { NextResponse } from "next/server"

import { MongoClient } from "mongodb";
import 'dotenv/config'

export async function POST(req) {
    let uri = process.env.MONGODB_URI
    const client = new MongoClient(uri)

    try {
        await client.connect()

        let jsonData = await req.json()
        // console.log(jsonData)

        let helpType = jsonData['helpType']
        console.log(helpType)
        // let postCollection = client.db('Posts').collection('Posts')
        let postCollection
        if (helpType === 'OfferHelp') {
            postCollection = client.db('Posts').collection('OfferHelp')
        }
        else if (helpType === 'RequestHelp') {
            postCollection = client.db('Posts').collection('RequestHelp')
        }

        await postCollection.insertOne(jsonData)
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