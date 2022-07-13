import React, { useState } from "react";

export default function TextForm(props) {
 const [text, setText] = useState("Enter your text here");

  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase " , "Success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase " , "Success");
  };

  const handleClearClick = () => {
    let newText = (" ")
    setText(newText);
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            style={{backgroundColor:props.mode === 'dark'?'grey':'white' , color:props.mode === 'dark'?'white':'black'}}
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-Primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-Primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-Primary mx-2" onClick={handleClearClick}>
         Clear Text
        </button>



      </div>
      <div className="container" style={{color:props.mode === 'dark'?'white':'black'}} >
        <h1>Your text summary is here</h1>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above to preview it here"}</p>
      </div>
    </>
  );
}
