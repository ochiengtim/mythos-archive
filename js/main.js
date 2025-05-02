//  AUTO IMAGE SLIDER ON index.html
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000);
}

//  FORM VALIDATION ON invoke.html
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic checks
    if (!name || !email || !message) {
      displayMsg(' All fields are required for a successful invocation.', 'red');
      return;
    }

    // Email format check
    const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
    if (!emailPattern.test(email)) {
      displayMsg(' Invalid sigil format. Use a real email address.', 'orange');
      return;
    }

    // Success
    displayMsg(' Your message has been sent to the Arcane Council.', '#00ffd5');
    form.reset();
  });
}

function displayMsg(text, color) {
  formMsg.textContent = text;
  formMsg.style.color = color;
}
