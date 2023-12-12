const input = document.getElementById('email');
const submitbtn = document.getElementById('submit');
const form = document.getElementById('form');
const errorMessage = document.getElementById('valid-email');
const sucess = document.getElementById('sucess');
const whiteContainer = document.getElementById('white-container');
const dimiss = document.getElementById('dimiss');

form.addEventListener('submit', hadleClick);

function hadleClick(event) {
  event.preventDefault();
  let email = input.value;
  validateEmail(email);
}

function validateEmail(email) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) {
    input.classList.remove('error');
    errorMessage.style.display = 'none';
    form.reset();
    whiteContainer.style.display = 'none';
    sucess.style.display = 'block';
  } else {
    input.classList.add('error');
    errorMessage.style.display = 'block';
  }
}

dimiss.addEventListener('click', showAgain);

function showAgain(email) {
  whiteContainer.style.display = 'block';
  whiteContainer.style.display = 'flex';
  sucess.style.display = 'none';
}
