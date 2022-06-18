console.log(document.querySelectorAll('.form'));
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  console.log('DOM is ready');
}

function showPassword() {
  let x = document.getElementById('pswd');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}

function resetAll() {
  email = '';
  pswd = '';
  document.querySelector('#email').value = email;
  document.querySelector('#pswd').value = pswd;
}
