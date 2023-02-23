const table = document.getElementById("table");

const array = [
  {
    name: "Bitcoin",
    amount: 20000,
    symbol: "BTC",
  },
  {
    name: "Bitcoin",
    amount: 20000,
    symbol: "BTC",
  },
  {
    name: "Bitcoin",
    amount: 20000,
    symbol: "BTC",
  },
  {
    name: "Bitcoin",
    amount: 20000,
    symbol: "BTC",
  },
  {
    name: "Bitcoin",
    amount: 20000,
    symbol: "BTC",
  },
];

function addToScreen() {
  array.forEach((el) => {
    // Create a row
    const node = document.createElement("tr");

    // Fill the data in the columns

    // First column
    // Name
    const tdNode = document.createElement("td");
    const textnode = document.createTextNode(el.name);
    tdNode.appendChild(textnode);
    node.appendChild(tdNode);

    // Second Column
    // Amount
    const amountNode = document.createElement("td");
    const amountText = document.createTextNode(el.amount);
    amountNode.appendChild(amountText);
    node.appendChild(amountNode);

    // Third Column
    // Symbol
    const symbolNode = document.createElement("td");
    const symbolText = document.createTextNode(el.symbol);
    symbolNode.appendChild(symbolText);
    node.appendChild(symbolNode);

    table.appendChild(node);
  });
}

addToScreen();
