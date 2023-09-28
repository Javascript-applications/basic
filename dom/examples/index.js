// ======================================================
// Event onload
// =======

// ======================================================
// Dynamic content -
// ======================================================

let i = 0;

document.getElementById("dynamicContent").addEventListener(
  "click",
  function () {
    const showPara = document.getElementById("dynamicPara");

    const header = document.getElementsByTagName("h2").item(0);
    header.firstChild.data = "This is dynamic documents";

    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is my first paragraph";

    const newText = document.createTextNode(`This is my second paragraph ${i}`);

    const newElement = document.createElement("p");

    newElement.appendChild(newText);

    showPara.appendChild(newElement);

    i++;
  },
  false
);

// ======================================================
// Creating an HTML table dynamically-
// ======================================================

document.querySelector("#generateTable").addEventListener(
  "click",
  () => {
    const showTbl = document.getElementById("dynamicTables");
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < 2; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 2; j++) {
        const cell = document.createElement("td");
        const content = document.createTextNode(`cell in row${i}, column${j}`);
        cell.appendChild(content);
        row.appendChild(cell);
      }

      tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    tbl.style.paddingTop = "20px";
    tbl.setAttribute("border", "1");
    showTbl.appendChild(tbl);
  },

  false
);
