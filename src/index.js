//create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points)
//It shoudl contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const fname = "Saikeerthi";
const lname = "Jupally";
const num = 7;

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <h1>Hello {fname + " " + lname}!</h1>
      <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    </div>
  </div>,
  document.getElementById("root")
);

// var h1 = document.createElement("h1");
// h1.innerHTML = "pure javascript";
// document.getElementById("root").appendChild(h1);
