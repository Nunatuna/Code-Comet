//Script for Full page nav
//Burger menu button to open nav
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

//X button to close nav
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}


//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion-active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}