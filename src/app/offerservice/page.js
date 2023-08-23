import Posts from "@/(components)/posts";

async function getPosts() {
    let jsonData
    try {
        jsonData = await fetch('http://localhost:3000/api/getposts?helptype=OfferHelp&limit=5',
            { cache: 'no-store' })
    }
    catch {
        return
    }
    return (await jsonData.json())['postArray'];
}

export default async function Page() {

    return (
        <div>
            <Posts postsArray={await getPosts()}/>
        </div>
    )
}