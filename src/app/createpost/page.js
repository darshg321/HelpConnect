"use client"
import "./poststyle.css"

import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {DateTimePicker} from "@mui/x-date-pickers";
import {useState} from "react";
import dayjs from "dayjs";

function sendToMongo(jsonData) {
    try {
        fetch('/api/storepost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
            .then(window.location = '/offerservice')
    }
    catch (e) {
        console.error("Failed to store post", e)
    }
}

function createPost(helpTime, timestamp) {
    const form = document.getElementById('postForm');
    const formData = new FormData(form);
    formData.append("helptime", helpTime)
    formData.append("timestamp", timestamp)

    const jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });

    sendToMongo(jsonObject)

}

export default function Page() {
    function PostForm() {
        const [helpTime, setHelpTime] = useState();
        return (
            <div className="create-post-container">
                <h1>Create a Post</h1>
                <form id="postForm" className="post-form" autoComplete={"off"}>
                    <label className="form-label">
                        <h4>Are you offering help or requesting help?</h4>
                        <select className="form-select" name="helpType" required={true}>
                            <option value="OfferHelp">Offering Help</option>
                            <option value="RequestHelp">Requesting Help</option>
                        </select>
                    </label>
                    <input type="text" className="form-input" name="title" placeholder="Title of your post" required={true}/>
                    <input type="text" className="form-input" name="contactInfo" placeholder="Your contact information" required={true}/>
                    <div className="radio-group">
                        <input id="InPerson" type="radio" className="form-radio" name="InPersonOrVirtual" value="inPerson" />
                        <label htmlFor="InPerson">In-Person</label>
                        <input id="Virtual" type="radio" className="form-radio" name="InPersonOrVirtual" value="Virtual" />
                        <label htmlFor="Virtual">Virtual</label>
                    </div>
                    <input type="text" className="form-input" name="address" placeholder="Address for help" required={true}/>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker label="Time" value={helpTime} onChange={(newValue) => setHelpTime(newValue)}/>
                    </LocalizationProvider>
                    <div className="radio-group">
                        <input id="less-than-1" type="radio" className="form-radio" name="length" value="&gt;1" />
                        <label htmlFor="less-than-1">Less than 1 hour</label>
                        <input id="1-2" type="radio" className="form-radio" name="length" value="1-2" />
                        <label htmlFor="1-2">1 to 2 hours</label>
                        <input id="2-more" type="radio" className="form-radio" name="length" value="2<" />
                        <label htmlFor="2-more">Longer than 2 hours</label>
                    </div>
                    <button type="button" className="form-button" onClick={() => createPost(helpTime, dayjs())}>Create Post</button>
                </form>
            </div>

        )
    }
    return (
        <div>
            <PostForm />
        </div>
    )
}