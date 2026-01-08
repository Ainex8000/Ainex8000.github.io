// Contact Page JavaScript - Xenia DeNoyer
// Modern Portfolio Version - Preserved Functionality

// JavaScript for the contact.html to create typing effect
var i = 0;
var txt = 'Get in Contact with Me'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

window.addEventListener("load", typeWriter);

// Form submission handler (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // You can add form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
});
