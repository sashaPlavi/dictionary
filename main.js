import { makeInput, result } from "./ui.js";
import { fechDef } from "./data.js";
function main() {
  makeInput();
}

function givemedata(data) {
  fechDef(data, renderResponse);
}

function renderResponse(def) {
  result(def);
}

export { main, givemedata, renderResponse };
