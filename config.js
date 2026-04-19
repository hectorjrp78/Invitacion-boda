// Archivo: config.js
const CONFIG = {
    // 1. Datos Generales
    nombres: "Héctor José & Nathalie del Carmen",
    fechaTexto: "30 . MAYO . 2026",
    fechaContador: new Date(2026, 4, 30, 19, 30, 0).getTime(), // Año, Mes(0-11), Día, Hora, Min
    
    // 2. Enlaces y URL
    scriptURL: "https://script.google.com/macros/s/AKfycbyhD76yckQ3hUucDy5pMWh6EDew9RNMIjBTCIaEXNibAuqcAnCSkeNeQyIK1xW9IY-xtg/exec", 
    
    // 3. Códigos de Acceso (Hashes SHA-256)
    // Para generar nuevos hashes, busca en Google "Generador SHA-256 online"
    hash_novia: "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f", // Equivale a "MARIA2026"
    hash_novio: "481f6cc0511143ccdd7e2d1b1b94faf0a700a8b49cd13922a70b5ae28acaa8c5", // Equivale a "JUAN2026"

    // 4. Ubicaciones
    ceremonia: {
        hora: "7:30 PM",
        lugar: "Iglesia la Preciosísima Sangre",
        direccion: "Santa Eduvigis",
        mapa_url: "https://maps.app.goo.gl/KH1eWnd3tpSD9xrr6" // Reemplazar con el link real
    },
    recepcion: {
        hora: "10:30 PM",
        lugar: "Salón Dorado - Por definir",
        direccion: "Restaurant, Av. Central #100",
        mapa_url: "https://maps.google.com/..." // Reemplazar con el link real
    }
};