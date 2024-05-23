
/* -----------------------------------ENVIO FORMULARIO---------- */

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Verificar el loggin
    if (username === "andres" && password === "123") {
        alert("¡Login exitoso!");
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});
/* --------------------BOTON Y CHECKBOX (ook in formulario html)---------------------- */

document.addEventListener('DOMContentLoaded', function () {

    const checkbox = document.getElementById('scales');
    const submitButton = document.getElementById('submitBtn');

    function toggleSubmitButton() {
        submitButton.disabled = !checkbox.checked;
    }
    // para verificar el estado inicial del boton de envio (cuando cargo la pagina)
    toggleSubmitButton();

    // paracambiar el estado del botón de envío cuando el checkbox cambie
    checkbox.addEventListener('change', toggleSubmitButton);
});

/*--------------------------CAMBIAR IMAGEN ON HOVER (ook in html PRODUCTOS)--------------*/

document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product img');

    products.forEach(product => {
        const originalSrc = product.src;
        const hoverSrc = product.getAttribute('data-hover-src');

        product.addEventListener('mouseover', function () {
            product.src = hoverSrc;
        });

        product.addEventListener('mouseout', function () {
            product.src = originalSrc;
        });
    });
});

/*----------------------------FECHA Y HORA (ook in INDEX)--------------------------*/

function updateTimeAndDate() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const formattedDate = `${dayName}, ${monthName} ${day}, ${year}`;

    document.getElementById('current-time').textContent = formattedTime;
    document.getElementById('current-date').textContent = formattedDate;
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();

/*-------------------------------------TITULO LOGO EFECTO----------*/

document.addEventListener("DOMContentLoaded", function() {
    const brandLogo = document.getElementById('brandLogo');

    // al pasar el ratón sobre el logotipo (escalar)
    brandLogo.addEventListener('mouseover', function() {
        brandLogo.style.transform = 'scale(1.2)';
    });

    // Restablecer la dimencion del logotipo cuando el ratón sale 
    brandLogo.addEventListener('mouseout', function() {
        brandLogo.style.transform = 'scale(1)';
    });
});





