const list = document.querySelector(".display-list");
let array = [];
// let array2 = [
//   { appliance: "" },
//   { house: "" },
//   { hygiene: "" },
//   { drink: "" },
//   { fish: "" },
//   { butcher: "" },
//   { fruits: "" },
//   { dairy: "" },
//   { bakery: "" },
//   { frozen: "" },
//   { grocery: "" },
// ];

function save() {
  localStorage.setItem("shoppingList", list.innerHTML);
  localStorage.shoppingList2 = JSON.stringify(array);
}
function reload() {
  if (localStorage.shoppingList) {
    list.innerHTML = localStorage.getItem("shoppingList");
  }
  if (localStorage.shoppingList2) {
    array = JSON.parse(localStorage.shoppingList2);
  }
}

function displayList(id) {
  const ul = document.getElementById(id);
  if (!input.value && ul.children.length == 2) {
    ul.style.display = "none";
  } else if (input.value) {
    ul.style.display = "flex";
    ul.innerHTML += `
    <li> <input type="number" id="number" min="0" value="1"> ${input.value}</li>
    `;
  }
}
function displaySpan(tag, span) {
  if (tag.value.length == 0) {
    span.style.display = "block";
  } else {
    span.style.display = "none";
  }
}

window.addEventListener("load", reload());

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value == "") {
    displaySpan(input, inputSpan);
  } else if (select.value == "") {
    displaySpan(select, selectSpan);
  } else {
    array.push(input.value, select.value);
    noList.style.display = "none";
    displayList(select.value);
    save();
    input.value = "";
    select.value = "";
  }
});

input.addEventListener("input", () => {
  displaySpan(input, inputSpan);
  let w = 0;
  while (w < array.length) {
    if (array[w] == input.value) {
      select.value = array[w + 1];
      break;
    }
    select.value = "";
    w += 2;
  }
});

select.addEventListener("input", () => displaySpan(select, selectSpan));

list.addEventListener("click", (e) => {
  const numbers = document.querySelectorAll('input[type="number"]');
  if (e.target.localName === "input") {
    numbers.forEach((number) => {
      // console.log(number.value);
      number.addEventListener("input", (e) => {
        console.log("ok " + number.value);
        if (number.value === "0") {
          e.target.parentElement.classList.add("checked");
          number.disabled = true;
        }
      });
    });
  }
  if (e.target.localName === "li") {
    if (e.target.classList.contains("checked")) {
      input.value = "";
      displayList(e.target.parentElement.id);
      e.target.remove();
    } else {
      e.target.classList.add("checked");
    }
  }
  save();
});

// reset.addEventListener("click", () => {
//   localStorage.removeItem("shoppingList");
//   localStorage.removeItem("shoppingList2");
//   location.reload();
// });
