// JavaScript Document - Xenia DeNoyer, Spring 2023

// JavaScript for the index.html to create typing effect
var i = 0;
var txt = 'Welcome to my webpage, here you can find my contact information, my portfolio, and a little bit about me.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

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
var arrMyPix = new Array("./img/oliver2.png", "./img/alfred.png", "./img/winston.png", "./img/xeniaimg4.jpg", "./img/sisters.jpg", "./img/family.jpg", "./img/gradphoto.jpg")

// Function to initialize the links
function initLinks() {
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

// Function to process the previous link
function processPrevious() {
    if (thePic == 0) {
        thePic = arrMyPix.length;
    }

    thePic--;
    document.getElementById("puppy").src = arrMyPix[thePic];
    return false;
}

// Function to process the next link
function processNext() {
    thePic++;
    if (thePic == arrMyPix.length) {
        thePic = 0;
    }

    document.getElementById("puppy").src = arrMyPix[thePic];
}

// Displays about me text in table
function displayAboutMe() {
    document.getElementById("aboutMe").innerHTML = "I am from a small town in Missouri called Lone Jack, I graduated from the high school there. Currently I am attending the University of Advancing Technology as a Honors student pursuing a degree in Advancing Computer Science. <br>When I am not working on any assignments or projects, I can be found playing video games or watching anime. Whatever I am doing, I am very likely listening to music as I am always listening to music. I am a big dog lover and have three little puppies of my own named Alfred, Oliver, and Winston."
}

// Display text functions for the portfolio.html page to help clear space in the html document
// Displays text for the first objective
function displayObjOne() {
    document.getElementById("myText").innerHTML = "Follow a software development process to analyze a problem and to design, build and test software solutions."
}

// Displays text for the second objective
function displayObjTwo() {
    document.getElementById("myTextTwo").innerHTML = "Demonstrate software development skills using more than one programming language and development environment."
}

// Display text for the third objective
function displayObjThree() {
    document.getElementById("myTextThree").innerHTML = "Implement data-driven solutions."
}

// Displays text for the fourth objective
function displayObjFour() {
    document.getElementById("myTextFour").innerHTML = "Design and implement software solutions for mobile devices, embedded systems and/or multiple platforms."
}

// Displays text for the fifth objective
function displayObjFive() {
    document.getElementById("myTextFive").innerHTML = "Document the planning and development of software applications using industry standard tools, techniques and processes."
}

// Displays text for the sixth objective.
function displayObjSix() {
    document.getElementById("myTextSix").innerHTML = "Within software solutions describe, implement and analyze data structure techniques such as lists, trees, hash tables and graphs, along with sorting and searching algorithms."
}

