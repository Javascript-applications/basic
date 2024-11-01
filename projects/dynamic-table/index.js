const endpoint = 'https://jsonplaceholder.typicode.com/users';

// create html elements
function dynamicElememt(name) {
  return document.createElement(name);
}

// create text element
function dynamicText(text) {
  return document.createTextNode(text);
}

// access the html elements
const btn = document.getElementById('tableBtn');
const tableTarget = document.getElementById('table');

async function getUsers() {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
}

// creating a dynamic table
async function handleTable() {
  const data = await getUsers();

  // start to create table

  const tbl = dynamicElememt('table');
  const tblBody = dynamicElememt('tbody');
  const tblHead = dynamicElememt('thead');
  const rowHead = dynamicElememt('tr');

  for (const iterator of ['name', 'email', 'phone']) {
    const th = dynamicElememt('th');
    const cellText = dynamicText(iterator);
    th.appendChild(cellText);
    rowHead.appendChild(th);
  }

  for (let i = 0; i < data?.length; i++) {
    const element = data[i];
    const row = dynamicElememt('tr');

    for (const key in element) {
      if (key === 'name' || key === 'email' || key === 'phone') {
        const cell = dynamicElememt('td');
        const cellText = dynamicText(element[key]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }
    tblBody.appendChild(row);
  }

  tblHead.appendChild(rowHead);
  tbl.appendChild(tblHead);
  tbl.appendChild(tblBody);
  tableTarget.append(tbl);
  tbl.setAttribute('border', 2);
}

// call method after clikc on button
btn.addEventListener('click', handleTable);
