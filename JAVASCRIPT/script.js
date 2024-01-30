// selecting add button,popup overlay,popup box
var ppol = document.querySelector(".ppol");
var ppb = document.querySelector(".ppb");
var apb = document.getElementById("apb");

apb.addEventListener("click", function () {
  ppol.style.display = "block";
  ppb.style.display = "block";
});

// selecting cancel button
var cb = document.getElementById("cb");
cb.addEventListener("click", function (event) {
  event.preventDefault();
  ppol.style.display = "none";
  ppb.style.display = "none";
});

// selecting container,add button,book title,book author,book description
var container = document.querySelector(".container");
var adp = document.getElementById("adp");
var bt = document.getElementById("bt");
var ba = document.getElementById("ba");
var bd = document.getElementById("bd");

adp.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${bt.value}</h2>
        <h4>${ba.value}</h4>
        <p>${bd.value}</p>
    <button onclick="del(event)">Delete</button>`;
  container.append(div);
  ppol.style.display = "none";
  ppb.style.display = "none";
});

// deleting the container
function del(event) {
  event.target.parentElement.remove();
}
