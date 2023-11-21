import React from 'react';
import ReactDOM from 'react-dom/client';

//Using React createElement
// const heading = React.createElement("h1", {id: "heading"}, "This is a heading");
// console.log(heading);
//Using JSX creation
const JSXHeading = <h1 id="heading">React is AMAZING!</h1>
console.log(JSXHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(JSXHeading);



/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am a h1 Tag</h1>
 *          <h2>I am a h2 Tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am a h1 Tag</h1>
 *          <h2>I am a h2 Tag</h2>
 *      </div>
 * </div>
 */
//
//createElement
//create nested elements
//use of root render
// const parent = React.createElement(
//     "div",
//     {id: "parent"},//attribute
//     [React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement(
//             "h1",
//             {},
//             "React is Amazing"
//         ),
//         React.createElement(
//             "h2",
//             {},
//             "I am a h2 Tag"
//         )
//         ]
//       ),
//       React.createElement(
//         "div",
//         {id: "child2"},
//         [React.createElement(
//             "h1",
//             {},
//             "I am a h1 Tag"
//         ),
//         React.createElement(
//             "h2",
//             {},
//             "I am a h2 Tag"
//         )
//         ]
//       )
//     ]//Children
//     ); //It is a JS object
//     console.log(parent); 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);