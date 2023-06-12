
function createCell() {
  const cell = document.createElement("td");
  cell.classList.add("cell");
  return cell;
}
function setCellDimension() {
  const cell = createCell();
  cell.style.width = "20px";
  cell.style.height = "20px";
  cell.style.border = "1px solid blue"; 
  return cell;
}

const container = document.querySelector(".grid-container");
function generateTable() {
  
  const tblBody = document.createElement("tbody");
  // creating grid
  for (let i = 0; i < 16; i++) {
    
    const row = document.createElement("tr"); // creates table row

    for (let j = 0; j < 16; j++) {
      const cell = setCellDimension(); // create cell for row
      
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  container.appendChild(tblBody);

}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  generateTable(); 
});


