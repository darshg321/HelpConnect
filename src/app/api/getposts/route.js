import {NextResponse} from "next/server"

import { MongoClient } from "mongodb";
import 'dotenv/config'

function getParamsFromUrl(url) {
    const params = {};
    const paramStr = url.split('?')[1]; // Get the query string part of the URL

    if (paramStr) {
        const paramPairs = paramStr.split('&');

        for (const paramPair of paramPairs) {
            const [key, value] = paramPair.split('=');
            if (key && value) {
                params[decodeURIComponent(key)] = decodeURIComponent(value);
            }
        }
    }

    return params;
}

export async function GET(req) {
    let uri = process.env.MONGODB_URI
    if (!process.env.MONGODB_URI) {
        throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
    }

    const client = new MongoClient(uri)
    let params = getParamsFromUrl(await req.url)
    let helptype = params['helptype']
    let limit = parseInt(params['limit'])

    try {
        await client.connect()

        // let postCollection = client.db('Posts').collection('Posts')
        let postCollection
        if (helptype === "OfferHelp") {
            postCollection = client.db('Posts').collection('OfferHelp')
        }
        else if (helptype === "RequestHelp") {
            postCollection = client.db('Posts').collection('RequestHelp')
        }

        let postArray = []

        const cursor = postCollection.find({}).limit(limit)

        for await (const doc of cursor) {
            postArray.push(doc)
        }
        console.log(postArray)
        // res.status(200).json({postArray})

        return NextResponse.json({ postArray })
        // return NextResponse.json({ "test": "stuff" })
    }
    catch (e) {
        console.log(e)
        return NextResponse.json({ message: e, worked: false });
    }
    finally {
        await client.close()
    }
}