import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
}
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
}
    const handleOnChange= (event)=>{
        setText(event.target.value)
}

const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ');
    setText(newText.trim());
};

const copyText = () => {
    navigator.clipboard.writeText(text);
};

const pasteText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setText(clipboardText);
};

const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
};

const clearText = () => {
    setText('');
};

const [text, setText] = useState('');

  return (
    <>
        <div className='container' style={{color: props.mode === 'dark'?'white': 'dark'}}>
        <h1 style={{color: props.mode === 'dark'?'white': 'black'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white': 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={copyText}>Copy to Clipboard</button>
        <button className="btn btn-success mx-2" onClick={pasteText}>Paste Text Here</button>
        <button className="btn btn-info mx-2" onClick={speakText}>Read Text</button>
        <button className="btn btn-danger mx-2" onClick={clearText}>Clear Text</button>
        </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white': 'black'}}>
        <h2>You Text Summary</h2>
        <p>{text.split(" ").length - 1 } words & {text.length} Characters</p>
        <p>{text.split(" ").length <= 1 ? "< 1" : (0.008 * (text.split(" ").length - 1))} minutes read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text in the textbox above to preview here"}</p>
    </div>
    </>
  );
}