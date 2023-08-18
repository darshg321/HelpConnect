import Navbar from "@/app/(components)/navbar";
import Card from "@/app/(components)/card";

export default function Page() {



    return (
        <div>
            <Navbar />
            <Card
                title="I want to help someone cook food."
                accountName="Joe Biden"
                profilePicture="/pfp.png"
                picture="/vercel.svg"
                location="Mississauga, Ontario"
                timestamp="September 17, 2023"
            />
        </div>
    )
}