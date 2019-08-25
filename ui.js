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

    givemedata(myinput);
  });

  place.appendChild(query);
  place.appendChild(submit);
}
function result(def) {
  const wordClass = def[0].fl;

  const result = document.createElement("p");
  result.innerHTML = `word class-${wordClass}`;
  place.appendChild(result);
  //console.log(result);
  def[0].shortdef.map((e, index) => {
    let res = document.createElement("p");
    res.innerHTML = `def. ${index + 1} -${e}`;
    place.appendChild(res);
  });
}
export { makeInput, result };
