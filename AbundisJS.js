document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-elotero input[type="text"], .form-elotero select');

    // Animación de entrada para los campos
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            console.log("Usuario escribiendo...");
        });

        // Alerta sutil si dejan el campo vacío al salir
        input.addEventListener('blur', (e) => {
            if (e.target.value === "") {
                e.target.style.borderColor = "#ee4242"; // Rojo si está vacío
            } else {
                e.target.style.borderColor = "#2e7d32"; // Verde si tiene texto
            }
        });
    });

    // Efecto visual al enviar el formulario
    const forms = document.querySelectorAll('.form-elotero');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Animación de desvanecimiento rápida
            form.style.opacity = '0.5';
            setTimeout(() => {
                alert("🌽 ¡El Señor de los Elotes recibió tu mensaje!");
                form.style.opacity = '1';
                form.reset();
            }, 500);
        });
    });
});
//Tercer prompt
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo-principal');

    if (logo) {
        // Al entrar el ratón
        logo.addEventListener('mouseenter', () => {
            console.log("¡El logo está resaltado!");
            // Podríamos añadir una clase extra si quisiéramos animaciones más locas
        });

        // Al salir el ratón
        logo.addEventListener('mouseleave', () => {
            // El CSS devolverá todo a la normalidad automáticamente gracias al transition
        });

        // Efecto de "click" para que parezca un botón real
        logo.addEventListener('mousedown', () => {
            logo.style.transform = "scale(0.95)"; // Se encoge un poco al presionar
        });

        logo.addEventListener('mouseup', () => {
            logo.style.transform = "scale(1.1)"; // Vuelve al tamaño del hover
        });
    }
});