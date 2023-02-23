const name = document.getElementById("name");
const profession = document.getElementById("profession");
const age = document.getElementById("age");
const btn = document.getElementById("btn");

const tbody = document.getElementById("tbody");

const arr = [];

btn.addEventListener("click", add);

function add() {
  if (!(name.value && profession.value && age.value)) {
    alert("fill all fields");
    return;
  }

  arr.push({
    name: name.value,
    profession: profession.value,
    age: age.value,
  });

  render();
}

function render() {
  tbody.innerHTML = "";
  let op = "";

  arr.forEach((e, i) => {
    op += `<tr>
    <td>${i}</td>
    <td>${e.name}</td>
    <td>${e.profession}</td>
    <td>${e.age}</td>
    </tr>`;
  });

  tbody.innerHTML = op;
}
