import Card from "@/(components)/card";


export default function Posts(props) {
    let postsArray = props.postsArray
    if (!postsArray) {
        return (
            <div>
                <h1>Unable to fetch posts</h1>
            </div>
        )
    }

    return (
        <div id={"posts"}>
            {postsArray.map((prop) => (
                <Card key={prop['_id']} title={prop['title']} location={prop['address']} timestamp={prop['timestamp']}
                      InPersonOrVirtual={prop['InPersonOrVirtual']} length={prop['length']} helpTime={prop['helptime']}/>
            ))}
        </div>
    )
}