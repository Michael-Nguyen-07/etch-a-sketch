function createCell() {
  const cell = document.createElement("td");
  cell.classList.add("cell");
  return cell;
}
function setCellDimension() {
  const cell = createCell();
  cell.style.width = "20px";
  cell.style.height = "20px";
  cell.style.border = "1px solid gray";
  return cell;
}

const grid = document.querySelector(".grid");
function generateTable() {
  const tblBody = document.createElement("tbody");
  tblBody.classList.add("tblBody");
  // creating grid
  for (let i = 0; i < 20; i++) {
    const row = document.createElement("tr"); // creates table row

    for (let j = 0; j < 20; j++) {
      const cell = setCellDimension(); // create cell for row

      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }
  grid.appendChild(tblBody);
}

generateTable();

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

/* 
let flag = "undefined";
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    if (button.textContent === "Black") {
      flag = "Black";
    } else if (button.textContent === "RGB") {
      flag = "RGB";
    } else if (button.textContent === "Eraser") {
      flag = "White"
    }
  });
}
 */

const cells = document.getElementsByClassName("cell");
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    for (let element of cells) {
      element.addEventListener("mouseenter", (event) => {
        if (button.textContent === "RGB") {
          randomRGB(element);
        } else if (button.textContent === "Black") {
          setColorBlack(element);
        } else if (button.textContent === "Eraser") {
        setColorWhite(element);
        }
      });
    }
  });
}
