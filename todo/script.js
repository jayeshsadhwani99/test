const array = [];
const form = document.querySelector("form");
const completed = document.getElementById("completed");
const list = document.getElementById("list");
const future = document.getElementById("future");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

getData();

// Set min val for date
const datePicker = document.getElementById("date");
datePicker.min = new Date().toISOString().split("T")[0];
datePicker.value = new Date().toISOString().split("T")[0];

function add() {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;

  const dateToSave = new Date(date);

  array.push({
    name,
    date: dateToSave,
    completed: false,
  });

  save();
}

function showData() {
  let data = "";
  let empty = "<p class='empty'>No Todos yet</p>";
  list.innerHTML = "";
  completed.innerHTML = "";
  future.innerHTML = "";
  array.forEach((e, i) => {
    data = `
            <div id="todo">
              <p>${e.name} </p>
              <p>Date: ${e.date.toDateString()}<p>
              <div class="buttons">
                <button id="delete" onclick=del(${i})>Delete</button>
              </div>
            </div>
          `;

    if (e.completed) {
      document.getElementById("completed").innerHTML += data;
      return;
    }

    data = `
            <div id="todo">
              <p>${e.name} </p>
              <p>Date: ${e.date.toDateString()}<p>
              <div class="buttons">
                <button onclick=complete(${i})>Complete</button>
                <button id="delete" onclick=del(${i})>Delete</button>
              </div>
            </div>
          `;
    if (e.date > new Date()) {
      document.getElementById("future").innerHTML += data;
      return;
    }

    document.getElementById("list").innerHTML += data;
  });

  if (array.filter((e) => e.completed).length === 0)
    completed.innerHTML = empty;

  if (array.filter((e) => e.date > new Date() && !e.completed).length === 0)
    future.innerHTML = empty;

  if (array.filter((e) => e.date < new Date() && !e.completed).length === 0)
    list.innerHTML = empty;
}

function complete(i) {
  array[i].completed = true;
  save();
}

function del(i) {
  array.splice(i, 1);
  save();
}

function save() {
  const str = JSON.stringify(array.map((e) => JSON.stringify(e)));
  localStorage.setItem("list", str);
  showData();
}

function getData() {
  const listStr = localStorage.getItem("list");
  const arr = JSON.parse(listStr);
  if (arr && arr.length > 0) {
    array.push(
      ...arr
        .map((e) => JSON.parse(e))
        .map((e) => {
          e.date = new Date(e.date);
          return e;
        })
    );
  }
  showData();
}
