//create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points)
//It shoudl contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const fname = "Saikeerthi";
const lname = "Jupally";
const num = 7;
const img = "https://picsum.photos/200";
const customStyle = {
  color: "green",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <h1 style={customStyle}> Hello {fname + " " + lname}!</h1>
      <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    </div>
    <div>
      <h1>Random Images</h1>
      <img alt="random" src={img + "?grayscale"} />
      <img
        className="food-img"
        alt="bacon"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
      />
      <img
        className="food-img"
        alt="jamon"
        src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
      />
      <img
        className="food-img"
        alt="noodles"
        src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);

// var h1 = document.createElement("h1");
// h1.innerHTML = "pure javascript";
// document.getElementById("root").appendChild(h1);
