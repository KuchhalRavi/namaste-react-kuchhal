 /** create Heading tag using react **/

/**
 * Nestend html structure using React
 * 
 * <div id="parent">
 *  <div id="child">
 *     <h1>I am H1 Tag</h1>
 *     <h2>I am H2 Tag</h2>
 *  </div>
 *  
 * </div>
 * 
 * 
 * 
 * 
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client"

 const heading = React.createElement(
    "h1",
    {id:"heading",key:"firstChild"},
    "Hello World using React!!")

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child",key:"firstChild1"},
        [
            React.createElement(
                "h1",
                {id:"heading",key:"firstChild2"},
                "I am H1 Tag!!!"
            ),
            React.createElement(
                "h2",
                {id:"heading2",key:"firstChild3"},  
                "I am H2 Tag!!!"
            )
        ]
        
        )
    )
console.log('parent',parent);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 // const root = ReactDOM.createRoot("root");
 root.render(parent);