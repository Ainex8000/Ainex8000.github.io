// These are the possible colors
const colors = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66764D', '#991AFF', '#E667FF', '#4DB3FF', '#1AB399',
    '#E667B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6676FF'
];

// Sets what we're targetting
const gradient = document.body.style.backgroundImage;
let currentGradient = '';

// Function to generate random gradient color
function generateRandomGradient() {
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    // Rotates the gradients' angle
    const angle = Math.floor(Math.random() * 361);

    // Displaying the current colors to the user
    document.getElementById("color1").innerHTML = color1;
    document.getElementById("color1").style.color = color1;
    document.getElementById("color2").innerHTML = color2;
    document.getElementById("color2").style.color = color2;

    // Returns values
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

// Function to handle scroll wheel event
function handleScrollWheel(event) {
    //event.preventDefault();
    const delta = Math.sign(event.deltaY); // Get scroll direction (1 for up, -1 for down)
    let opacity = parseFloat(currentGradient.slice(-4)); // Get current opacity value
    opacity += delta * 0.1; // Update opacity based on scroll direction
    opacity = Math.max(0, Math.min(1, opacity)); // Limit opacity between 0 and 1
    currentGradient = currentGradient.slice(0, -4) + opacity + ')'; // Update opacity in gradient value
    document.body.style.backgroundImage = currentGradient; // Apply updated gradient to background
}

// Function to handle spacebar key press event
function handleSpacebarPress(event) {
    if (event.code === 'Space') {
        currentGradient = generateRandomGradient();
        document.body.style.backgroundImage = currentGradient;
    }
}

// Function to handle 'c' key press event
function handleKeyPress(event) {
    if (event.key === 'c') {
        currentGradient = generateRandomGradient();
        document.body.style.backgroundImage = currentGradient;
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('changeGradientBtn').addEventListener('click', function () {
        currentGradient = generateRandomGradient();
        document.body.style.backgroundImage = currentGradient;
    });
});

// Add scroll wheel event listener
window.addEventListener('wheel', handleScrollWheel);
// Add key press listener for c
window.addEventListener('keydown', handleKeyPress);
// Add key press listener for spacebar
window.addEventListener('keydown', handleSpacebarPress);

// Initial setup on page load
window.addEventListener('load', function () {
    currentGradient = generateRandomGradient();
    document.body.style.backgroundImage = currentGradient;
});

// JavaScript to create typing effect
var i = 0;
var txt = 'Gradient Background Changer'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("gradient").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);