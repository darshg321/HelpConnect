// "use client"
import Card from "@/app/(components)/card";

async function getPosts() {
    return await fetch('http://localhost:3000/api/getposts',
        { cache: 'no-store' })
}

export default function Page() {

    async function Posts() {
        let postsArray = (await (await getPosts()).json())['postArray']
        console.log(postsArray)

        return (
            <div id={"posts"}>
                {postsArray.map((prop) => (
                    <Card key={prop['_id']} title={prop['title']} location={prop['address']} timestamp={prop['timestamp']}
                          InPersonOrVirtual={prop['InPersonOrVirtual']} length={prop['length']} helpTime={prop['helptime']}/>
                ))}
            </div>
        )
    }

    return (
        <div>
            <Posts />
        </div>
    )
}