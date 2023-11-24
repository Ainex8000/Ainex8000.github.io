//document.addEventListener("DOMContentLoaded", function() {
  //  forms.name = document.getElementById('name');
    //forms.email = document.getElementById('email');
//})

// Display information to the contact.html page
function addInfo() {
    document.getElementById("linkedin").innerHTML = "xenia-denoyer";
    document.getElementById("github").innerHTML = "Ainex8000";
    document.getElementById("email").innerHTML = "xendenoy@uat.edu";
}

// JavaScript for the index.html to create typing effect
var i = 0;
var txt = 'Get in Contact with Me'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("contact").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);