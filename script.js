"use strict";

const click = document.querySelector("h1");
click.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

fetch("data.js")
  .then((response) => response.json())
  .then((data) => showInfo(data));

function showInfo(data) {
  console.log(data.id);
}
