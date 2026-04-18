// Archivo: config.js
const CONFIG = {
    // 1. Datos Generales
    nombres: "Nathalie & Hector",
    fechaTexto: "30 . MAYO . 2026",
    fechaContador: new Date(2026, 4, 30, 19, 30, 0).getTime(), // Año, Mes(0-11), Día, Hora, Min
    
    // 2. Enlaces y URL
    scriptURL: "https://script.google.com/macros/s/AKfycbyhD76yckQ3hUucDy5pMWh6EDew9RNMIjBTCIaEXNibAuqcAnCSkeNeQyIK1xW9IY-xtg/exec", 
    
    // 3. Códigos de Acceso (Hashes SHA-256)
    // Para generar nuevos hashes, busca en Google "Generador SHA-256 online"
    hash_novia: "3b4b8a211eb9b46e885d5622a578a1bc1b49f9df35eab4e4142f1cf1c42f0672", // Equivale a "MARIA2026"
    hash_novio: "4d1bd8ab2ea4dcd91ecba42e5d590ab8bfab69d443bdc67ed3a2b75a6fde9079", // Equivale a "JUAN2026"

    // 4. Ubicaciones
    ceremonia: {
        hora: "7:30 PM",
        lugar: "Iglesia la Preciosisima Sangre",
        direccion: "Santa Eduvigis",
        mapa_url: "https://maps.google.com/..." // Reemplazar con el link real
    },
    recepcion: {
        hora: "10:30 PM",
        lugar: "Salón Dorado - Por definir",
        direccion: "Restaurant, Av. Central #100",
        mapa_url: "https://maps.google.com/..." // Reemplazar con el link real
    }
};