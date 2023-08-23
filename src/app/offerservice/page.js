import Posts from "@/(components)/posts";

async function getPosts() {
    let jsonData
    if (process.env.VERCEL_URL) {
        console.error(process.env.VERCEL_URL)
    }
    else {
        console.error("me sad")
    }
    try {
        jsonData = await fetch(`${process.env.PREFIX}${process.env.VERCEL_URL}/api/getposts?helptype=OfferHelp&limit=5`,
            { cache: 'no-store' })
    }
    catch {
        return
    }
    return (await jsonData.json())['postArray']
}

export default async function Page() {

    return (
        <div>
            <Posts postsArray={await getPosts()}/>
        </div>
    )
}