import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["my 40 feet tall Kangaroo ", "my dad ", "my left toenail ", "my grandpa "]
  let what = ["threw away ", "burned up ", "gifted away ", "ran with "]
  let posession = ["my PS5 ", "my hairline ", "my Jordans ", "my glasses "]
  let when = ["yesterday", "last night", "2 weeks ago", "an hour ago"]

  let whoIndex = Math.floor(Math.random() * who.length)
  let whatIndex = Math.floor(Math.random() * what.length)
  let posessionIndex = Math.floor(Math.random() * posession.length)
  let whenIndex = Math.floor(Math.random() * when.length)

console.log(whoIndex);
let docCenterPage = document.querySelector(".center-page")
docCenterPage.innerHTML = who[whoIndex] + what[whatIndex] + posession[posessionIndex] + when[whenIndex]
};
