const list = document.querySelector(".display-list");

function save() {
  localStorage.setItem("shoppingList", list.innerHTML);
}
function reload() {
  if (localStorage.shoppingList) {
    list.innerHTML = localStorage.getItem("shoppingList");
  } else {
  }
}

function displayList(id) {
  const ul = document.getElementById(id);
  ul.style.display = "block";
  ul.innerHTML += `
    <li> ${input.value}</li>
    `;
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
    noList.style.display = "none";
    displayList(select.value);
    save();
    input.value = "";
    select.value = "";
  }
});

input.addEventListener("input", () => displaySpan(input, inputSpan));

select.addEventListener("input", () => displaySpan(select, selectSpan));
