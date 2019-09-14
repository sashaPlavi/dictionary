import { makeInput, result, sugresult } from "./ui.js";
import { fechDef, sugestion } from "./data.js";
function main() {
  makeInput();
}

function givemedata(data) {
  fechDef(data, renderResponse);
}

function renderResponse(def) {
  result(def);
}
function gimisugdata(data) {
  sugestion(data, sugresponse);
}
function sugresponse(def) {
  sugresult(def);
}

export { main, givemedata, renderResponse, gimisugdata, sugresponse };
