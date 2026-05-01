// ==========================================
// 1. CARGA DE DATOS DESDE CONFIG.JS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ui-nombres').innerText = CONFIG.nombres;
    document.getElementById('ui-fecha').innerText = CONFIG[currentlang].fechaTexto;
    document.getElementById('ui-titulo').innerText = CONFIG[currentlang].titulo;
    // document.getElementById('ui-iglesia').innerText = CONFIG[currentlang].iglesia;
    // document.getElementById('ui-recepcion').innerText = CONFIG[currentlang].recepcion;
    // document.getElementById('ui-detalle-amor').innerText = CONFIG[currentlang].detalleAmor;
    // document.getElementById('ui-confirmar').innerText = CONFIG[currentlang].confirmar;
    
    document.getElementById('ui-ceremonia-hora').innerText = CONFIG[currentlang].ceremonia.hora;
    document.getElementById('ui-ceremonia-lugar').innerText = CONFIG[currentlang].ceremonia.lugar;
    document.getElementById('ui-ceremonia-dir').innerText = CONFIG[currentlang].ceremonia.direccion;
    document.getElementById('ui-ceremonia-mapa').href = CONFIG[currentlang].ceremonia.mapa_url;

    document.getElementById('ui-recepcion-hora').innerText = CONFIG[currentlang].recepcion.hora;
    document.getElementById('ui-recepcion-lugar').innerText = CONFIG[currentlang].recepcion.lugar;
    document.getElementById('ui-recepcion-dir').innerText = CONFIG[currentlang].recepcion.direccion;
    document.getElementById('ui-recepcion-mapa').href = CONFIG[currentlang].recepcion.mapa_url;
});
function changeLanguage(lang) {
    currentlang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');

        // Navegar por objetos anidados (ej: ceremonia.direccion)
        // Esto divide "ceremonia.direccion" en ["ceremonia", "direccion"] y busca nivel por nivel
        const text = key.split('.').reduce((obj, i) => obj ? obj[i] : null, CONFIG[lang]);
        //  console.log(`Texto traducido: ${CONFIG[lang][key]} para idioma: ${lang} y clave: ${key}`);
        //el.innerHTML = CONFIG[lang][key];
        if (text) {
            // Usar innerHTML en lugar de innerText para que los <br> hagan el salto de línea
            el.innerHTML = text;
        }
    });
    // Opcional: Cambiar placeholder de inputs (le agregué una validación por si el input no existe en esa vista)
    const inputNombre = document.getElementById('nombre');
    if (inputNombre) {
        inputNombre.placeholder = (lang === 'es') ? 'Nombre' : 'Full Name';
    }
}
// ==========================================
// 2. CONTADOR DINÁMICO
// ==========================================
const countdownElement = document.getElementById('countdown');
function updateCountdown() {
    const distance = CONFIG.fechaContador - new Date().getTime();
    if (distance < 0) {
        countdownElement.innerHTML = "<p class='time-number' data-i18n='hoyeselgrandedia'>¡Hoy es el gran día!</p>";
        return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <div class="time-block"><p class="time-number">${days}</p><p class="time-label" data-i18n="diacont">Días</p></div>
        <div class="time-block"><p class="time-number">${hours}</p><p class="time-label" >Hrs</p></div>
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
    let codigo = inputCodigo.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    let hash = await encriptarSHA256(codigo);
    
    const tipoInput = document.getElementById('tipo_registro');
    const msgContexto = document.getElementById('mensaje-contexto');
    const divAcompanantes = document.querySelector('.acompanantes-flex');
    const seccionRecepcion = document.getElementById('recepcion');
    //hiddenLado.value = (hash === CONFIG.hash_novia || hash === CONFIG.hash_iglesia_novia) ? "Novia" : "Novio";
    if (hash === CONFIG.hash_novia || hash === CONFIG.hash_novio) {
        // --- ESCENARIO: RECEPCIÓN ---
        if(tipoInput) tipoInput.value = 'recepcion';
        if(msgContexto) msgContexto.innerText = CONFIG.mensajes.recepcion;
        hiddenLado.value = (hash === CONFIG.hash_novia) ? "Novia" : "Novio";
        mostrarSecciones(['detalles-celebracion', 'rsvp-form', 'recepcion', 'detalle-amor']);
        if(divAcompanantes) divAcompanantes.style.display = 'flex';
        
    } else if (hash === CONFIG.hash_iglesia_novia || hash === CONFIG.hash_iglesia_novio) {
        // --- ESCENARIO: SOLO IGLESIA ---
        if(tipoInput) tipoInput.value = 'iglesia';
        if(msgContexto) msgContexto.innerText = CONFIG.mensajes.iglesia;
        hiddenLado.value = (hash === CONFIG.hash_iglesia_novia) ? "Novia" : "Novio";
        mostrarSecciones(['detalles-celebracion', 'rsvp-form', 'detalle-amor']);
        
        // Ocultamos con seguridad
        if(seccionRecepcion) seccionRecepcion.style.display = 'none';
        if(divAcompanantes) divAcompanantes.style.display = 'none';
    } else {
        if(errorCodigo) errorCodigo.classList.remove('hidden');
        return; 
    }

    if(codigoSection) codigoSection.classList.add('hidden');
});

// Función para mostrar múltiples elementos por su ID
function mostrarSecciones(listaIDs) {
    listaIDs.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.classList.remove('hidden');
            elemento.style.display = 'block'; 
        } else {
            console.warn(`Ojo: El elemento con ID "${id}" no existe en el HTML.`);
        }
    });
}

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