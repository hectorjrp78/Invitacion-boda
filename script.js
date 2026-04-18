// ==========================================
// 1. CARGA DE DATOS DESDE CONFIG.JS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ui-nombres').innerText = CONFIG.nombres;
    document.getElementById('ui-fecha').innerText = CONFIG.fechaTexto;
    
    document.getElementById('ui-ceremonia-hora').innerText = CONFIG.ceremonia.hora;
    document.getElementById('ui-ceremonia-lugar').innerText = CONFIG.ceremonia.lugar;
    document.getElementById('ui-ceremonia-dir').innerText = CONFIG.ceremonia.direccion;
    document.getElementById('ui-ceremonia-mapa').href = CONFIG.ceremonia.mapa_url;

    document.getElementById('ui-recepcion-hora').innerText = CONFIG.recepcion.hora;
    document.getElementById('ui-recepcion-lugar').innerText = CONFIG.recepcion.lugar;
    document.getElementById('ui-recepcion-dir').innerText = CONFIG.recepcion.direccion;
    document.getElementById('ui-recepcion-mapa').href = CONFIG.recepcion.mapa_url;
});

// ==========================================
// 2. CONTADOR DINÁMICO
// ==========================================
const countdownElement = document.getElementById('countdown');
function updateCountdown() {
    const distance = CONFIG.fechaContador - new Date().getTime();
    if (distance < 0) {
        countdownElement.innerHTML = "<p class='time-number'>¡Hoy es el gran día!</p>";
        return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <div class="time-block"><p class="time-number">${days}</p><p class="time-label">Días</p></div>
        <div class="time-block"><p class="time-number">${hours}</p><p class="time-label">Hrs</p></div>
        <div class="time-block"><p class="time-number">${minutes}</p><p class="time-label">Min</p></div>
        <div class="time-block"><p class="time-number">${seconds}</p><p class="time-label">Seg</p></div>
    `;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ==========================================
// 3. SEGURIDAD CIPTOGRÁFICA (HASH SHA-256)
// ==========================================
// Función que convierte texto plano en un Hash encriptado
async function encriptarSHA256(mensaje) {
    const encoder = new TextEncoder();
    const data = encoder.encode(mensaje);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const codigoSection = document.getElementById('codigo-section');
const inputCodigo = document.getElementById('codigo-acceso');
const btnVerificar = document.getElementById('btn-verificar');
const errorCodigo = document.getElementById('error-codigo');
const form = document.getElementById('rsvp-form');
const hiddenLado = document.getElementById('invitado_de');

btnVerificar.addEventListener('click', async () => {
    // 1. Limpiamos lo que escribió el usuario
    let codigoIngresado = inputCodigo.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    
    // 2. Encriptamos la palabra que escribió
    let hashIngresado = await encriptarSHA256(codigoIngresado);

    // 3. Comparamos los Hashes
    if (hashIngresado === CONFIG.hash_novia) {
        codigoSection.classList.add('hidden');
        form.classList.remove('hidden');
        hiddenLado.value = "Novia";
    } else if (hashIngresado === CONFIG.hash_novio) {
        codigoSection.classList.add('hidden');
        form.classList.remove('hidden');
        hiddenLado.value = "Novio";
    } else {
        errorCodigo.classList.remove('hidden');
        inputCodigo.value = ""; 
    }
});

// ==========================================
// 4. ENVÍO SEGURO DEL FORMULARIO
// ==========================================
const mensaje = document.getElementById('form-message');
const btnSubmit = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
    e.preventDefault(); 
    btnSubmit.disabled = true;
    mensaje.classList.remove('hidden');
    mensaje.innerText = "Verificando información...";

    fetch(CONFIG.scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => response.text())
        .then(result => {
            if (result === "Exito") {
                form.style.display = 'none';
                mensaje.innerHTML = "<h3>¡Registro Exitoso!</h3><p>Gracias por confirmar.</p>";
            } else if (result === "Error: Duplicado") {
                mensaje.innerHTML = "<h3>Atención</h3><p>Este correo ya se encuentra registrado.</p>";
                btnSubmit.disabled = false;
            } else {
                throw new Error();
            }
        })
        .catch(error => {
            mensaje.innerText = "Algo salió mal. Por favor, intenta de nuevo.";
            btnSubmit.disabled = false;
        });
});