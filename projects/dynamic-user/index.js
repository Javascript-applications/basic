const endpoint = 'https://jsonplaceholder.typicode.com/users';

const btn = document.getElementById('btn');

async function getUser() {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

async function handleTable() {
  // get all users
  const user = await getUser();

  // create table and tbody elements

  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');
  const tblHeader = document.createElement('thead');
  const theadRow = document.createElement('tr');
  // create table headers

  for (const iterator of ['name', 'usernmae', 'email']) {
    const headCell = document.createElement('th');
    const headCellText = document.createTextNode(iterator);
    headCell.appendChild(headCellText);
    theadRow.appendChild(headCell);
  }

  tblHeader.appendChild(theadRow);

  for (let i = 0; i < user?.length; i++) {
    const element = user[i];

    // create a row for table

    const row = document.createElement('tr');

    for (const [key, value] of Object.entries(element)) {
      if (key === 'name' || key === 'username' || key === 'email') {
        // create table cell
        const cell = document.createElement('td');
        const cellText = document.createTextNode(value);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblHeader);
  tbl.appendChild(tblBody);

  document.body.appendChild(tbl);

  tbl.setAttribute('border', '2');
  btn.setAttribute('disabled', true);
}

btn.addEventListener('click', handleTable);
