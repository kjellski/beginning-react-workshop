import React from "react";
import ReactDOM from "react-dom";

// TASK: Understand Elements and JSX
//       Write your own one!

const Caption = () => <h1>Hello World!</h1>;

ReactDOM.render(<Caption />, document.getElementById("root"));

// QUESTIONS:
//   - How does react integrate into your website?
//   - What is an Element?
//   - How to pass attributes / compose them?
// LINKS:
//   - Rendering: https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects
//   - Updating Elements: https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element
