const form = document.querySelector('form');
const errorMsg = document.querySelector('#error-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#jose').value.trim();
  const password = document.querySelector('#123').value.trim();
  
  if (username === '' || password === '') {
    errorMsg.textContent = 'Por favor, ingrese un nombre de usuario y contraseña';
  } else {
    // Aquí se puede agregar la lógica de inicio de sesión
    alert('¡Inicio de sesión exitoso!');
  }
});
