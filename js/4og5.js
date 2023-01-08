window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#ani_1").addEventListener("mousedown", hoverOne);
  document.querySelector("#ani_2").addEventListener("mousedown", hoverTwo);
  document.querySelector("#ani_3").addEventListener("mousedown", hoverThree);
  document.querySelector("#ani_4").addEventListener("mousedown", hoverFour);
  document.querySelector("#ani_5").addEventListener("mousedown", hoverFive);
  document.querySelector("#ani_6").addEventListener("mousedown", hoverSix);

  function hoverOne() {
    this.classList.add("bouncing");
    this.addEventListener("animationend", done);
  }
  function hoverTwo() {
    this.classList.add("rotation");
    this.addEventListener("animationend", done);
  }
  function hoverThree() {
    this.classList.add("pulse");
    this.addEventListener("animationend", done);
  }
  function hoverFour() {
    this.classList.add("zoom_in");
    this.addEventListener("animationend", done);
  }
  function hoverFive() {
    this.classList.add("pattern");
    this.addEventListener("animationend", done);
  }
  function hoverSix() {
    this.classList.add("fade_out");
    this.addEventListener("animationend", done);
  }
  function done() {
    this.classList = "";
  }
}
