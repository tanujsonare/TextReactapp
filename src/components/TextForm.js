import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const showUppercaseText = () => {
        let convertedUppercaseText= text.toUpperCase();
        setText(convertedUppercaseText);
    };
    const textChange = (event) => {
        setText(event.currentTarget.value);
    };
    const clearText = () => {
        setText('');
    };
    const showLowercaseText = ()=>{
        let convertedLowercaseText = text.toLowerCase();
        setText(convertedLowercaseText);
    }
    const copyText = ()=>{
        let text = document.getElementById("message");
        navigator.clipboard.writeText(text.value);
    }
    const removeExtraSpaces = ()=>{
        let intialText = text.split(/[ ]+/);
        setText(intialText.join(" "));
    }
    return (
        // use "props.mode &&" when this condition is mandatory 
        <>
        <div className='container' style={{color: props.mode===true ? "white" : "black"}}>
            <h2 className="mt-4">{props.title}</h2>
            <div className="mb-3 mt-4">
                <textarea className="form-control text_to_convert" value={text} onChange={textChange} id="message" rows="8" style={{backgroundColor: props.mode===true ? "#a4a7a7" : "white", color: props.mode===true ? "white" : "black"}}/>
                <div>
                    <button className="btn btn-primary mt-4" onClick={showUppercaseText}>Uppercase</button>
                    <button className="btn btn-primary mt-4 mx-2" onClick={showLowercaseText}>Lowercase</button>
                    <button className="btn btn-primary mt-4 mx-2" onClick={removeExtraSpaces}>Remove Extraspaces</button>
                    <button className="btn btn-success mt-4 mx-2" onClick={copyText}>Copy</button>
                    <button className="btn btn-danger mt-4 mx-2" onClick={clearText}>Clear</button>
                </div>
            </div>
        </div>
        <div className="container" style={{color: props.mode===true ? "white" : "black"}}>
            <h3 className='mt-4'>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Time required to read this preview {0.008 * text.split(" ").length} minutes.</p>
            <h3 className='mt-4'>Preview</h3>
            <p>{text.length>0 ? text : "Please Enter some text in box to see preview."}</p>
        </div>
        </>
    );
}
