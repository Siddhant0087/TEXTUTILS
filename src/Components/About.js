import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "whtie",
  });
  const [btnChose, setbtnChose] = useState("Enable Dark Mode");

  const ColorTrigger = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnChose("Enable Light Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnChose("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div style={myStyle} className="accordion-body">
              <strong>
                TextUtils is simply a set of utility functions to do operations
                on String objects.
              </strong>{" "}
              A text file (sometimes spelled textfile; an old alternative name
              is flatfile) is a kind of computer file that is structured as a
              sequence of lines of electronic text. A text file exists stored as
              data within a computer file system. In operating systems such as
              CP/M and MS-DOS, where the operating system does not keep track of
              the file size in bytes, the end of a text file is denoted by
              placing one or more special characters, known as an end-of-file
              (EOF) marker, as padding after the last line in a text file. On
              modern operating systems such as Microsoft Windows and Unix-like
              systems, text files do not contain any special EOF character,
              because file systems on those operating systems keep track of the
              file size in bytes. Most text files need to have end-of-line
              delimiters, which are done in a few different ways depending on
              operating system. Some operating systems with record-orientated
              file systems may not use new line delimiters and will primarily
              store text files with lines separated as fixed or variable length
              records.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div style={myStyle} className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div style={myStyle} className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button onClick={ColorTrigger} type="button" className="btn btn-primary my-3">
        {btnChose}
      </button>
    </div>
  );
}
