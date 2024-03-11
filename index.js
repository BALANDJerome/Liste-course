let list;

function displayList(id) {
  const ul = document.getElementById(id);
  ul.style.display = "block";
  ul.innerHTML += `
    <li>${input.value}</li>
    `;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.length == 0) {
    alert("Aucun produit écrit");
  } else if (select.value === "rayon") {
    alert("Rayon non selectionné");
  } else {
    noList.style.display = "none";
    displayList(select.value);
    input.value = "";
    select.value = "rayon";
  }
});
