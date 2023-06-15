
const grid = document.getElementById("grid-container");
function createGrid (cellsXAndY = 16, newGrid = grid) {
    let cellsTotal = cellsXAndY * cellsXAndY
    let cellDimensions = 200/cellsXAndY
    for (i=0; i < cellsTotal; i++) {
        singleCell = document.createElement('div');
        singleCell.classList.add('cell');
        singleCell.style.width = `${cellDimensions}px`;
        singleCell.style.height = `${cellDimensions}px`;
        singleCell.style.border = "1px solid gray";
        newGrid.appendChild(singleCell);
    };
};
createGrid(16)
function resetTable() {
  const cells = Array.from(document.getElementsByClassName("cell"));
  cells.forEach((e) => {
    eClone = e.cloneNode(true);
    e.parentNode.replaceChild(eClone, e);
  });
} 

// set flag for button value
let flag = "undefined";
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    switch (button.textContent) {
      case "Black":
        flag = "Black";
        break;
      case "RGB":
        flag = "RGB";
        break;
      case "Eraser":
        flag = "Eraser";
        break;
    }
  });
}

function randomRGB(cell) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  cell.style.backgroundColor = `rgb(${r},${g},${b})`;
}
function setColorBlack(cell) {
  cell.style.backgroundColor = "black";
}
function setColorWhite(cell) {
  cell.style.backgroundColor = "white";
}
function applyCustomColor(cell) {
  colorPicker = document.getElementById("colorPicker");
  cell.style.backgroundColor = colorPicker.value;
}

const cells = Array.from(document.getElementsByClassName("cell"));
cells.forEach((element) => {
  element.addEventListener("mouseenter", (event) => {
    console.log("this is mouse enter event");
    switch (flag) {
      case "RGB":
        randomRGB(element);
        break;
      case "Black":
        setColorBlack(element);
        break;
      case "Eraser":
        setColorWhite(element);
        break;
      default:
        applyCustomColor(element);
    }
  });
});

function resetTable() {
  const cells = Array.from(document.getElementsByClassName("cell"));
  cells.forEach((cell) => {
    setColorWhite(cell);
  });
} 