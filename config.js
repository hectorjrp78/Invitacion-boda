// Archivo: config.js
const CONFIG = {
    // 1. Datos Generales
    nombres: "Héctor José & Nathalie del Carmen",
    fechaTexto: "30 . MAYO . 2026",
    fechaContador: new Date(2026, 4, 30, 19, 0, 0).getTime(), // Año, Mes(0-11), Día, Hora, Min
    
    // 2. Enlaces y URL
    scriptURL: "https://script.google.com/macros/s/AKfycbyhD76yckQ3hUucDy5pMWh6EDew9RNMIjBTCIaEXNibAuqcAnCSkeNeQyIK1xW9IY-xtg/exec", 
    
    // 3. Códigos de Acceso (Hashes SHA-256) ---RECEPCION---
    // Para generar nuevos hashes, busca en Google "Generador SHA-256 online"
    hash_novia: "ed2fec3ccbc0b170396201c73ac70f2927f8839a679ba10b55e9fc0829276986", // Equivale a "MARIA2026"
    hash_novio: "d4ce956372a7ee65f3814be394216231b1c865306ad4d66c8700a9d94af871da", // Equivale a "JUAN2026"
    // ... CODIGOS ACCESO IGLESIA ...
    hash_iglesia_novia: "42b62a58485e7e21996b701c292d45c848521be52d2b242726ba9f1e80ad939e", 
    hash_iglesia_novio: "c3b838803ff85a6e7af3447f35c475b8a37abd5e50f1836166376a5f21632a30",
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