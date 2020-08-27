const modal = document.getElementById("catergory-overlay");

var btn = document.getElementById("myBtn");

var span = document.getElementById("cancel");
btn.onclick = function() {
    modal.style.display = "block";
  }

function displayModal(){
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

setTimeout(displayModal, 4000);

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});