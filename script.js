// script.js

function handleLogin(evt) {
  evt.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Display on page
  const result = document.getElementById('loginResult');
  result.innerText = "Login Submitted! Email: " + email;

  // Log to console
  console.log("Login attempted:", { email, password });

  // Small UI feedback
  result.style.opacity = 1;
  setTimeout(()=> result.style.opacity = 0.9, 20);

  // Optionally clear password field for UX
  document.getElementById('password').value = '';

  return false;
}

function clearLogin(){
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('loginResult').innerText = '';
}
