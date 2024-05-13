//Script for Full page nav
//Burger menu button to open nav
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

//X button to close nav
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}


//Photoshop demo toggle button
let imageToggle = false;

function toggleImage() {
    const image = document.getElementById("toggleImage");
    
    if (imageToggle) {
        image.src = "img/event/photoshop_for.jpg";
    } else {
        image.src = "img/event/photoshop_efter.jpg";
    }

    imageToggle = !imageToggle;
}