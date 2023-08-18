import Link from "next/link";
import Image from "next/image";
import "./navstyle.css"

// if not signed in sign in button else account button

export default function Navbar() {
    return (
        <div>
            <nav className={"mainNav"}>
                <Link href={"/"}>
                    <Image src={"/next.svg"} alt={"logo"} width={100} height={50} />
                </Link>
                <ul>
                    <Link href={"/offerservice"}>Offering Services</Link>
                    <Link href={"/requestservice"}>Requesting Services</Link>
                    {/*<Link href={"/offeritem"}>Offering Items</Link>*/}
                </ul>
                <Link href={"/createpost"}>
                    <Image src={"/createpost.png"} alt={"Create new post"} width={75} height={75}></Image>
                </Link>
                <Link href={"/signin"}>Sign In</Link>

            </nav>
        </div>
    )
}