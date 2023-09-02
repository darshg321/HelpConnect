import Link from "next/link";
import './mainpagestyle.css'

export default function Home() {
    function Title() {
        return (
            <div>
                <h1 className={"mainTitle"}>Help Connect</h1>
                <h3 className={"subTitle"}>Help your community today!</h3>
            </div>
        )
    }

    return (
        <div className={"maindiv"}>
            <Title />
            <Link href={"/createpost"}>
                <button className={"getstartedbutton"}>Create Post</button>
            </Link>
        </div>
    )
}