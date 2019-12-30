(function() {
  let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    {
      name: "Monte Falterona",
      height: 1654,
      place: "Parco Foreste Casentinesi"
    },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];

  let table = document.querySelector("#table");
  let firstDatum = Object.keys(mountains[0]);

  generateTableHead(table, firstDatum);
  generateTableBody(table, mountains);

  function generateTableHead(table, keyList) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let index in keyList) {
      let thead = document.createElement("th");
      let text = document.createTextNode(keyList[index]);
      thead.appendChild(text);
      row.appendChild(thead);
    }
  }

  function generateTableBody(table, data) {
    let tbody = table.createTBody();
    data.forEach(mountain => {
      let row = tbody.insertRow();
      tbody.appendChild(row);
      for (let key in mountain) {
        let text = document.createTextNode(mountain[key]);
        let td = document.createElement("td");
        td.appendChild(text);
        row.appendChild(td);
      }
    });
  }
})();
