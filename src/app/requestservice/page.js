import Posts from "@/(components)/Posts";

async function getPosts() {
    let jsonData
    try {
        jsonData = await fetch(`${process.env.PREFIX}${process.env.VERCEL_URL}/api/getposts?helptype=RequestHelp&limit=5`,
            { cache: 'no-store' })
        jsonData = (await jsonData.json())['postArray']
    }
    catch {
        return
    }
    return jsonData
}

export default async function Page() {

    return (
        <div>
            <Posts postsArray={await getPosts()}/>
        </div>
    )
}