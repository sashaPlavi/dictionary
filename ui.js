import { givemedata, gimisugdata } from "./main.js";

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
  place.addEventListener("keypress", function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      let myinput = document.getElementById("myquery").value;
      givemedata(myinput);
    }
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
      element.innerHTML = `${e} , `;
      element.addEventListener("click", function() {
        let myinput = element.innerHTML.split(",");
        gimisugdata(myinput[0]);
      });
      place.appendChild(element);
      document.getElementById("myquery").value = "";
    });
  } else {
    def.map(e => {
      let myinput = document.getElementById("myquery").value;
      if (e.hwi.hw === myinput) {
        let exactMach = document.createElement("p");
        exactMach.innerHTML = `<p style="color:white;text-align:center;"> exact mach - <span style="color:red">'${myinput}'</span>  ${e.fl}</p>
        def. -----' ${e.shortdef[0]}'`;

        place.appendChild(exactMach);
      }
    });
    document.getElementById("myquery").value = "";
  }
}
function sugresult(def) {
  clear();
  def.map(e => {
    let exactMach = document.createElement("p");
    exactMach.innerHTML = `<p style="color:white;text-align:center;">  mach - <span style="color:red">'${e.hwi.hw}'</span>  ${e.fl}</p>
        def. -----' ${e.shortdef[0]}'`;
    place.appendChild(exactMach);
  });
}
function clear() {
  let text = document.getElementsByTagName("p");
  if (text.length) {
    for (let item of text) {
      item.innerHTML = "";
    }
  }
}
export { makeInput, result, sugresult };
