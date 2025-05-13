// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const message = document.getElementById('form-message');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const emailValue = emailInput.value.trim();
  
      if (validateEmail(emailValue)) {
        message.textContent = "Thanks for subscribing!";
        message.style.color = "green";
        message.style.display = "block";
        emailInput.value = "";
      } else {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
        message.style.display = "block";
      }
    });
  });
  
  // Simple email validation function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  