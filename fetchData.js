const person = document.getElementById("person");
const btn = document.getElementById("btn");

btn.addEventListener("click", getAnotherUser);

async function fetchData() {
  const url = "https://randomuser.me/api/";
  const res = await fetch(url, {
    method: "get",
  });
  const data = await res.json();
  return data;
}

async function renderData() {
  const data = await fetchData();
  const personData = data.results[0];
  console.log(personData);
  const full_name = personData.name.first + " " + personData.name.last;
  const imgSrc = personData.picture.large;

  person.innerHTML = `
    <img src=${imgSrc} />
    <h2>${full_name}</h2>
    <p id="age" style='display: none'>${personData.dob.age}</p>
    <button onClick="showAge()">Age</button>
    <button>Email</button>
    <button>Phone</button>
  `;
}

function getAnotherUser() {
  renderData();
}

function showAge() {
  document.getElementById("age").style.display = "block";
}

renderData();
