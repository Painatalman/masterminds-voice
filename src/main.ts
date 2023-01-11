import "./app.css";
import App from "./App.svelte";

/*
let plays = [];
const solution = ["r", "g", "b", "y"];

function startGame() {
  const tries = 0;
  const colors = [
    { voice: "blue", value: "b" },
    { voice: "green", value: "g" },
    { voice: "red", value: "r" },
    { voice: "yellow", value: "y" }
  ];

  initCommands(colors);
}

function getHex(colorCode) {
  return {
    r: "#ff0000",
    g: "#00ff00",
    b: "#0000ff",
    y: "#ffff00"
  }[colorCode];
}

function renderColor(colorCode) {
  return `<div class='color' style="display: inline-block; width: 20px; height: 20px; margin-right: 2px; background-color:${getHex(
    colorCode
  )}"></div>`;
}

function renderColors(colors) {
  document.body.innerHTML = plays
    .map((play) => `${renderColor(play)}`)
    .join("");
}

function play(color) {
  plays.push(color);
  renderColors(plays);

  if (plays.length === solution.length) {
    checkSolution(plays);
  }
}

function setPlayColor(color) {
  return () => play(color);
}

function initCommands(colors) {
  const commands = colors.reduce((acc, { voice, value }) => {
    const playColor = setPlayColor(value);

    acc[voice] = () => playColor(solution);

    return acc;
  }, {});

  annyang.addCommands(commands);
  annyang.start();
}

function checkSolution() {
  if (plays.join("") === solution.join("")) {
    alert("won!");
  } else {
    alert("lost!");
  }
  plays = [];
  renderColors(plays);
}

startGame();

*/

const app = new App({
  target: document.getElementById("app"),
});

export default app;
