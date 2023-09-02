import Image from "next/image";
import "./cardstyle.css"

export default function Card(props) {
    let { title, accountName, profilePicture, picture, location, timestamp, InPersonOrVirtual, length, helpTime, contactInfo } = props;

    if (InPersonOrVirtual === "inPerson") {
        InPersonOrVirtual = "In Person"
    }

    return (
        <div className="custom-card">
            <h2 className="custom-card-title">{title}</h2>
            <div className="custom-card-content">
                <div className="custom-card-profile">
                    <Image className={"pfp"} src={profilePicture || "/pfp.png"} alt={`${accountName}'s Profile`} width={35}  height={35}/>
                    <span>{accountName || "Anonymous"}</span>
                </div>
                {/*<img className="custom-card-image" src={picture} alt="Card Content" />*/}
            </div>
            <div><p>{InPersonOrVirtual}</p></div>
            <div><p>Length: {length} hours</p></div>
            <div className="custom-card-info">
                <p className={"location"}>{location}</p>
                <p>{contactInfo}</p>
                <p>{helpTime}</p>
            </div>
            <div><p>{timestamp}</p></div>
        </div>
    );
};
