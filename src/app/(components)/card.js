import Image from "next/image";
import "./cardstyle.css"
// change pfp

export default function Card(props) {
    const { title, accountName, profilePicture, picture, location, timestamp } = props;

    return (
        <div className="custom-card">
            <h2 className="custom-card-title">{title}</h2>
            <div className="custom-card-content">
                <div className="custom-card-profile">
                    <Image className={"pfp"} src={profilePicture} alt={`${accountName}'s Profile`} width={35}  height={35}/>
                    <span>{accountName}</span>
                </div>
                <img className="custom-card-image" src={picture} alt="Card Content" />
            </div>
            <div className="custom-card-info">
                <p className={"location"}>{location}</p>
                <p>{timestamp}</p>
            </div>
        </div>
    );
};
