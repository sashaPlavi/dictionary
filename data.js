//import { renderResponse } from "./main";

function fechDef(word, call) {
  //console.log(word);
  //console.log(call);

  let query = word.toLowerCase();
  const key = "63e83d1c-a14e-412a-be96-1b811cba434e";

  let url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${query}?key=${key} `;

  fetch(url)
    .then(response => response.json())
    .then(res => {
      console.log(res);
      call(res);
    });
}

export { fechDef };
