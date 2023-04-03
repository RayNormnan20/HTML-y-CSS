const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
});
