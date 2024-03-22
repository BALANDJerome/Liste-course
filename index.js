const list = document.querySelector(".display-list");
let array = [];

function save() {
  localStorage.setItem("shoppingList", list.innerHTML);
  localStorage.shoppingList2 = JSON.stringify(array);
}
function reload() {
  if (localStorage.shoppingList) {
    list.innerHTML = localStorage.getItem("shoppingList");
    array = JSON.parse(localStorage.shoppingList2);
  } else {
  }
}

function displayList(id) {
  const ul = document.getElementById(id);
  if (!input.value && ul.children.length == 2) {
    ul.style.display = "none";
  } else if (input.value) {
    ul.style.display = "flex";
    ul.innerHTML += `
    <li> ${input.value}</li>
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
    console.log(array);
    input.value = "";
    select.value = "";
  }
});

input.addEventListener("input", () => {
  displaySpan(input, inputSpan);
  // array.some((a) => {
  //   if (a === input.value) {
  //     select.value = array[array.indexOf(a) + 1];
  //   } else {
  //     // select.value = "";
  //   }
  // });
});

select.addEventListener("input", () => displaySpan(select, selectSpan));

list.addEventListener("click", (e) => {
  if (e.target.localName == "li") {
    if (e.target.classList.contains("checked")) {
      input.value = "";
      displayList(e.target.parentElement.id);
      e.target.remove();
    } else {
      e.target.classList.add("checked");
    }
    save();
  }
});
