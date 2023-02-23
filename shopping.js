const name = document.getElementById("name");
const price = document.getElementById("price");
const btn = document.getElementById("add");

const tbody = document.getElementById("body");

var data = [];

// Show the data on the screen
function renderData() {
  console.log(data);

  var htmlData = "";

  data.forEach((e) => {
    htmlData += `
            <tr>
                <td>${e.name}</td>
                <td>${e.price}</td>
            </tr>
        `;
  });

  tbody.innerHTML = htmlData;
}

// Add the data
function addData() {
  data.push({
    name: name.value,
    price: price.value,
  });

  name.value = "";
  price.value = "";

  renderData();
}

btn.addEventListener("click", addData);
