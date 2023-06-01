import React, { useState } from "react"

export default function TextForm(props) {
    const [text, setText] = useState("");
    const onChanged = (event) => {
        setText(event.target.value);
    }
    const onUpClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onLowClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.title}</h1>
                <div>
                    <textarea className="form-control" value={text} onChange={onChanged} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={onUpClicked}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={onLowClicked}>Convert to Lowercase</button>
            </div>
            <div className="container">
                <h2>Your Summary</h2>
                <p>{text.split(' ').length - 1} words and {text.trim().length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}