// JavaScript Document - Xenia DeNoyer, Winter 2026
// Modern Portfolio Version - Preserved Functionality

// JavaScript for the index.html to create typing effect
var i = 0;
var txt = 'Welcome to my webpage, here you can find my contact information, my portfolio, and a little bit about me.'; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);

// This the JavaScript for the slideshow on the about.html page
// Loads on start
window.onload = initLinks;

// Array to hold photos of the dogs
var thePic = 0;
var arrMyPix = new Array("./img/oliver2.png", "./img/alfred.jpg", "./img/winston.png", "./img/myfamily.jpg", "./img/xeniaandchris.jpg", "./img/flowersone.jpg", "./img/flowerstwo.jpg", "./img/hikeone.jpg", "./img/hike two.jpg", "./img/aurora.jpg", "./img/christmascard.jpg")

// Function to initialize the links
function initLinks() {
    const prevLink = document.getElementById("prevLink");
    const nextLink = document.getElementById("nextLink");
    if (prevLink) prevLink.onclick = processPrevious;
    if (nextLink) nextLink.onclick = processNext;
}

// Function to process the previous link
function processPrevious(event) {
    event.preventDefault();
    if (thePic == 0) {
        thePic = arrMyPix.length;
    }

    thePic--;
    document.getElementById("puppy").src = arrMyPix[thePic];
    return false;
}

// Function to process the next link
function processNext(event) {
    event.preventDefault();
    thePic++;
    if (thePic == arrMyPix.length) {
        thePic = 0;
    }

    document.getElementById("puppy").src = arrMyPix[thePic];
    return false;
}
