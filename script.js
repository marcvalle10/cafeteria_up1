/* ============================================================
   ACT 15 - INTERACCIONES JS PARA LA CAFETERÍA
   - Mensaje de bienvenida
   - Botón de saludo
   - Cambio de color en el título
   - Cambio de color de fondo
   - Fecha actual
   - Temporizador de promoción (30 seg)
   - Banner promocional con botón de cerrar
   ============================================================ */

/* ------------------------------------------------------------
   1) MENSAJE DE BIENVENIDA AL CARGAR LA PÁGINA
   ------------------------------------------------------------ */
// Al cargar el sitio, mostramos una alerta para dar la bienvenida.
alert("¡Bienvenido a la Cafetería en Línea!");


/* ------------------------------------------------------------
   2) BOTÓN DE SALUDO QUE ACTUALIZA UN MENSAJE EN PANTALLA
   ------------------------------------------------------------ */
/*
   Requisitos en el HTML:
   - Un botón con id="btnSaludo"
   - Un párrafo o elemento de texto con id="mensaje"
   Si no existen, este bloque no hará nada visible.
*/

// Seleccionamos el botón y el párrafo por su id
const botonSaludo = document.getElementById("btnSaludo");
const mensajeSaludo = document.getElementById("mensaje");

// Verificamos que existan antes de usar (para evitar errores)
if (botonSaludo && mensajeSaludo) {
    // Agregamos un evento de clic al botón
    botonSaludo.addEventListener("click", function() {
        // Cambiamos el contenido del párrafo para mostrar el mensaje de bienvenida
        mensajeSaludo.textContent =
            "¡Gracias por visitar nuestra cafetería en línea! Esperamos que disfrutes tu experiencia.";
    });
}


/* ------------------------------------------------------------
   3) CAMBIO DE COLOR EN EL TÍTULO PRINCIPAL AL PASAR EL CURSOR
   ------------------------------------------------------------ */
/*
   Tomamos el primer <h1> del documento (el del hero).
   Al pasar el mouse encima, se pinta de dorado.
   Cuando el mouse sale, regresa a su color original.
*/

const tituloPrincipal = document.querySelector("h1");

if (tituloPrincipal) {
    const colorOriginal = getComputedStyle(tituloPrincipal).color;

    // Cuando el usuario pasa el cursor sobre el h1
    tituloPrincipal.addEventListener("mouseover", function() {
        tituloPrincipal.style.color = "#d4af37"; // Dorado
    });

    // Cuando el usuario quita el cursor del h1
    tituloPrincipal.addEventListener("mouseout", function() {
        tituloPrincipal.style.color = colorOriginal;
    });
}


/* ------------------------------------------------------------
   4) BOTÓN QUE CAMBIA EL COLOR DE FONDO DE LA PÁGINA
   ------------------------------------------------------------ */
/*
   Requisito en el HTML:
   - Un botón con id="btFondo"
*/

document.body.style.backgroundColor = "#f5f5dc"; // Color de fondo suave por defecto

// Selecciona el botón del fondo
const btnFondo = document.getElementById("btFondo");

// Agrega un evento de clic al botón si existe
if (btnFondo) {
    btnFondo.addEventListener("click", function() {
        // Cambia el color de fondo de la página
        document.body.style.backgroundColor = "#ffe4c4"; // Color de fondo cálido
    });
}


/* ------------------------------------------------------------
   5) MOSTRAR LA FECHA ACTUAL EN UN ELEMENTO DEL DOM
   ------------------------------------------------------------ */
/*
   Requisito en el HTML:
   - Un elemento (por ej. <span>) con id="fechaActual"
*/

const fechaElemento = document.getElementById("fechaActual");

if (fechaElemento) {
    const fechaActual = new Date();
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    // Ejemplo de salida: "20 de noviembre de 2025"
    fechaElemento.textContent = fechaActual.toLocaleDateString("es-MX", opciones);
}


/* ------------------------------------------------------------
   6) TEMPORIZADOR DE PROMOCIÓN (30 SEG)
   ------------------------------------------------------------ */
/*
   Requisito en el HTML:
   - Un <span id="promoSegundos"> dentro de la sección .promo
*/

// "let" se usa para variables que SÍ van a cambiar su valor
let tiempoRestante = 30;

// "const" se usa para constantes o elementos que NO van a cambiar de referencia
const spanSegundos = document.getElementById("promoSegundos");

// Función que se ejecuta cada segundo
function actualizarTemporizador() {
    if (!spanSegundos) return; // Si no existe el span, salimos

    // Restamos 1 segundo
    tiempoRestante--;

    // Actualizamos el texto en el <span>
    spanSegundos.textContent = tiempoRestante;

    // Cuando llega a 0, cambiamos el mensaje y reiniciamos
    if (tiempoRestante === 0) {
        // Mensaje de que se terminó
        spanSegundos.textContent = "0";

        // Opcional: mostramos un alert UNA vez
        alert("La promoción ha terminado... pero viene una nueva ronda");

        // Reiniciamos el contador a 30
        tiempoRestante = 30;
        spanSegundos.textContent = tiempoRestante;
    }
}

// "setInterval" ejecuta una función cada cierto tiempo
// Primer parámetro: la función a ejecutar
// Segundo parámetro: cada cuántos milisegundos (1000 ms = 1 segundo)
setInterval(actualizarTemporizador, 1000);


/* ------------------------------------------------------------
   7) BANNER PROMOCIONAL CON BOTÓN CERRAR
   ------------------------------------------------------------ */
/*
   Requisitos en el HTML:
   - Un contenedor con id="bannerPromo" y clase="banner-promo"
   - Un botón con id="cerrarBanner" dentro de ese contenedor
*/

// "const" para guardar referencias a elementos del DOM que no cambian
const bannerPromo = document.getElementById("bannerPromo");
const cerrarBanner = document.getElementById("cerrarBanner");

// Si existen, agregamos el comportamiento
if (bannerPromo && cerrarBanner) {
    // "addEventListener" escucha un evento (en este caso, un clic en el botón)
    cerrarBanner.addEventListener("click", function() {
        // Con "style.display = 'none'" escondemos el banner completo
        bannerPromo.style.display = "none";
    });
}