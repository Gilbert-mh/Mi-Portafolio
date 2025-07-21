function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

function mostrarBienvenida() {
  setTimeout(() => {
    alert("¡Bienvenido/a a mi portafolio!");
  }, 400);
}

function validarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  alert(`Gracias por tu mensaje, ${nombre}!`);
  return true;
}
