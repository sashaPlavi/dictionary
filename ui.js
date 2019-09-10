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
  clear();

  let type = typeof def[0];
  if (type === "string") {
    let ask = document.createElement("p");
    ask.innerHTML = "did you mean ?";
    place.appendChild(ask);
    def.map(e => {
      let element = document.createElement("p");

      element.innerHTML = `${e}`;
      place.appendChild(element);
    });
  } else {
    //const wordClass = def[0].fl;
    def.map(e => {
      let myinput = document.getElementById("myquery").value;
      console.log(e);

      if (e.hwi.hw === myinput) {
        console.log(e);

        const result = document.createElement("p");
        result.innerHTML = `word class - ${e.fl}`;
        place.appendChild(result);
      }
      //console.log(result);
      /*  def[0].shortdef.map((e, index) => {
         let res = document.createElement("p");
         res.innerHTML = `def. ${index + 1} -${e}`;
         place.appendChild(res);
       }); */
    });
  }
}
function clear() {
  let text = document.getElementsByTagName("p");
  if (text.length) {
    //console.log(text);
    for (let item of text) {
      //console.log(item);
      item.innerHTML = "";
    }
  }
}
export { makeInput, result };
