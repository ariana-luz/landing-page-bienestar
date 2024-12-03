// Validación básica de formulario
// document.querySelector('form').addEventListener('submit', function(e) {
//     // Mostrar el mensaje de agradecimiento
//     alert("Gracias por contactarnos. Pronto estaremos en comunicación.");
//     // Detener el comportamiento predeterminado
//     e.preventDefault();
//     // Limpiar los campos del formulario
//     form.reset();
// });


// Asegurarnos de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) { // Verificar que el formulario exista
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Detener el comportamiento predeterminado

            // Mostrar el mensaje de agradecimiento
            alert('Gracias por contactarnos. Pronto estaremos en comunicación.');

            // Limpiar los campos del formulario
            form.reset();
        });
    } else {
        console.error('El formulario no se encontró en el DOM.');
    }
});

