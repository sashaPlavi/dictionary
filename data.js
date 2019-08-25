function fechDef(word) {
  console.log(word);
  let query = word.toLowerCase();
  let key = "63e83d1c-a14e-412a-be96-1b811cba434e";
  let endpoint = "entries";
  let url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${query}?key=${key} `;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(res => {
      console.log(res);
    });
}

export { fechDef };
