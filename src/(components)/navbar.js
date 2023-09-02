import Link from "next/link";
import Image from "next/image";
import "./navstyle.css"

export default function Navbar() {
    return (
        <div>
            <nav className={"mainNav"}>
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt={"logo"} width={200} height={100} />
                </Link>
                <ul>
                    <Link href={"/offerservice"}>Offering Services</Link>
                    <Link href={"/requestservice"}>Requesting Services</Link>
                </ul>
                <Link href={"/createpost"}>
                    <Image src={"/createpost.png"} alt={"Create new post"} width={75} height={75}></Image>
                </Link>
            </nav>
        </div>
    )
}