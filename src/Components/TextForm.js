import React, { useState } from "react";

export default function TextForm(props) {
  const ClickToUpperCase  = () =>{
    // console.log("Clicked Uppercase" + text)
    let new_text = text.toUpperCase();
    setText(new_text)
    props.showAlert("Converted To Upper Case!", "success");
  }
  const ClickToLowerCase  = () =>{
    let new_text = text.toLowerCase();
    setText(new_text)
    props.showAlert("Converted To Lower Case!", "success");
  }
  const ClickToTitleCase = () =>{
    let words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    props.showAlert("Converted To Title Case!", "success");
  }

  
  
  setText(words.join(' '))
}

const ClickToClear = () =>{
  setText("");
  props.showAlert("Text Clear!", "success");
}

const handleOnChamge = (event) =>{
  console.log("On Change")
  setText(event.target.value)
}
const[text, setText] = useState("")

const ClickToCopy = () =>{
  let text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Coppied!", "success");
}

const ClickToRemoveSpaces= () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Removed Extra Spaceses!", "success");
}
  // setText("new text");
  return (
    <>
    <div className="container" style= {{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        {/* <label for="myBox" className="form-label">
          Example textarea
        </label> */}
        <textarea className="form-control" onChange = {handleOnChamge} style= {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} value = {text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={ClickToUpperCase}> Upper Case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={ClickToLowerCase}>Lower Case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={ClickToTitleCase}>Title Case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={ClickToCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={ClickToRemoveSpaces}>Remove Spaces</button>
      
      <button className="btn btn-primary mx-1" onClick={ClickToClear}>Clear</button>
      
    </div>
    <div className="container my-3" style= {{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Length</p>
      <p>{0.008 * text.split(" ").length} Minutes To Read</p>
      <h2>Privew</h2>
      <p>{text.length>0?text:"Enter Your Text To Preview"}</p>
    </div>
    </>
  );
}
