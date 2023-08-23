import Posts from "@/app/(components)/posts";

async function getPosts() {
    let jsonData = await fetch('http://localhost:3000/api/getposts?helptype=RequestHelp&limit=5',
        { cache: 'no-store' })
    return (await jsonData.json())['postArray'];
}

export default async function Page() {

    return (
        <div>
            <Posts postsArray={await getPosts()}/>
        </div>
    )
}