import { makeInput } from "./ui.js";
import { fechDef } from "./data.js";
function main() {
  makeInput();
}

function givemedata(data) {
  fechDef(data);
}

export { main, givemedata };
