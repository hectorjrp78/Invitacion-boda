// Archivo: config.js
const CONFIG = {
    // 1. Datos Generales
    nombres: "Héctor José & Nathalie del Carmen",
    fechaTexto: "30 . MAYO . 2026",
    fechaContador: new Date(2026, 4, 30, 19, 0, 0).getTime(), // Año, Mes(0-11), Día, Hora, Min
    
    // 2. Enlaces y URL
    scriptURL: "https://script.google.com/macros/s/AKfycbyhD76yckQ3hUucDy5pMWh6EDew9RNMIjBTCIaEXNibAuqcAnCSkeNeQyIK1xW9IY-xtg/exec", 
    
    // 3. Códigos de Acceso (Hashes SHA-256)
    // Para generar nuevos hashes, busca en Google "Generador SHA-256 online"
    hash_novia: "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", // Equivale a "MARIA2026"
    hash_novio: "481f6cc0511143ccdd7e2d1b1b94faf0a700a8b49cd13922a70b5ae28acaa8c5", // Equivale a "JUAN2026"
    // ... datos anteriores ...
    hash_iglesia_novia: "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4", 
    hash_iglesia_novio: "fe2592b42a727e977f055947385b709cc82b16b9a87f88c6abf3900d65d0cdc3",
    mensajes: {
        iglesia: "Tu presencia en el Sacramento de nuestro Matrimonio es el mayor regalo que podemos recibir. ¡Gracias por acompañarnos en este paso de fe!",
        recepcion: "¡Nos encantará celebrar con ustedes en la recepción!"
    },

    // 4. Ubicaciones
    ceremonia: {
        hora: "7:00 PM",
        lugar: "Iglesia la Preciosísima Sangre",
        direccion: "1ra Avenida con 4ta Transversal, Santa Eduvigis, Caracas, Venezuela",
        mapa_url: "https://maps.app.goo.gl/KH1eWnd3tpSD9xrr6" // Reemplazar con el link real
    },
    recepcion: {
        hora: "10:00 PM",
        lugar: "Edificio Castillete (salon de fiestas)",
        direccion: "Av. Andrés Bello, entre 1ra y 2da Transversal, Los Palos Grandes, Caracas, Venezuela",
        mapa_url: "https://maps.app.goo.gl/uDv5fYYAwTn17t5TA" // Reemplazar con el link real
    }
};