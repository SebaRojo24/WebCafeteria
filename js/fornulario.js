document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario-contacto form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita el envío real

    // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Expresiones regulares de validación
    const soloTexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const soloNumero = /^[0-9+ ]+$/;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!soloTexto.test(nombre)) {
      alert("El nombre solo debe contener letras.");
      return;
    }
    if (!soloTexto.test(apellido)) {
      alert("El apellido solo debe contener letras.");
      return;
    }
    if (!correoValido.test(correo)) {
      alert("Ingrese un correo válido.");
      return;
    }
    if (!soloNumero.test(telefono)) {
      alert("El teléfono solo debe contener números.");
      return;
    }
    if (mensaje.length < 5) {
      alert("El mensaje debe tener al menos 5 caracteres.");
      return;
    }

    // Si pasa todas las validaciones
    alert("✅ ¡Formulario enviado correctamente!");
    form.reset(); // limpia el formulario
  });
});
