function highlight(table) {
  let tableRows = table.querySelectorAll("tr");
  let tableCells = table.querySelectorAll("td");
  for (let i = 0; i < tableRows.length; i++) {
    let currentTableRow = tableRows[i];

    if (!currentTableRow.lastElementChild.dataset.available) {
      currentTableRow.setAttribute("hidden", true);
    }

    for (let j = 0; j < tableCells.length; j++) {
      let currentTableCell = tableCells[j];
      if (currentTableCell.dataset.available === "true") {
        currentTableCell.parentElement.classList.remove("unavailable");
        currentTableCell.parentElement.classList.add("available");
      } else {
        currentTableCell.parentElement.classList.add("unavailable");
      }
      if (currentTableCell.textContent === "f") {
        currentTableCell.parentElement.classList.add("female");
      } else if (currentTableCell.textContent === "m") {
        currentTableCell.parentElement.classList.add("male");
      }
      if (Number(currentTableCell.textContent) < 18) {
        currentTableCell.parentElement.style.textDecoration = "line-through";
      }
    }
  }
}
