import { givemedata } from "./main.js";

const place = document.querySelector(".container");
function makeInput() {
  let query = document.createElement("input");
  let submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  query.setAttribute("type", "text");
  query.setAttribute("placeholder", "input word");
  query.setAttribute("id", "myquery");
  query.addEventListener("click", function() {
    query.setAttribute("placeholder", "");
  });
  submit.addEventListener("click", function() {
    let myinput = document.getElementById("myquery").value;
    console.log(myinput);
    givemedata(myinput);
  });

  console.log(query);
  console.log(place);

  place.appendChild(query);
  place.appendChild(submit);
}

export { makeInput };
