import React from "react";

export default function About(props) {
  

  return (
    <div className="container" style= {{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style= {{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analysis Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div style= {{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}} className="accordion-body">
              <strong>
                TextUtils is simply a set of utility functions to do operations
                on String objects.
              </strong>{" "}
              TextUtils gives you a way to analysis your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style= {{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div style= {{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}} className="accordion-body">
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style= {{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatiable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div style= {{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}} className="accordion-body">
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={ColorTrigger} type="button" className="btn btn-primary my-3">
        {btnChose}
      </button> */}
    </div>
  );
}
