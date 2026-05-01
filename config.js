// Archivo: config.js
const CONFIG = {
    // 1. Datos Generales
    nombres: "Héctor José & Nathalie del Carmen",
    fechaContador: new Date(2026, 4, 30, 19, 0, 0).getTime(), // Año, Mes(0-11), Día, Hora, Min
    // 2. Enlaces y URL
    scriptURL: "https://script.google.com/macros/s/AKfycbyhD76yckQ3hUucDy5pMWh6EDew9RNMIjBTCIaEXNibAuqcAnCSkeNeQyIK1xW9IY-xtg/exec", 
    // 3. Códigos de Acceso (Hashes SHA-256) ---RECEPCION---
    // Para generar nuevos hashes, busca en Google "Generador SHA-256 online"
    hash_novia: "ed2fec3ccbc0b170396201c73ac70f2927f8839a679ba10b55e9fc0829276986", 
    hash_novio: "d4ce956372a7ee65f3814be394216231b1c865306ad4d66c8700a9d94af871da", 
    // ... CODIGOS ACCESO IGLESIA ...
    hash_iglesia_novia: "42b62a58485e7e21996b701c292d45c848521be52d2b242726ba9f1e80ad939e", 
    hash_iglesia_novio: "c3b838803ff85a6e7af3447f35c475b8a37abd5e50f1836166376a5f21632a30",

    es: {
        titulonav: "Héctor & Nathalie - Nuestra Boda",
        titulo: "Nuestra Boda",
        mensajeinicio: "Nuestro Amor nació de la gracia y lo queremos sellar con la Bendición de Dios. <br> Damos este paso con profunda alegría y sencillez, sabiendo que el regalo más grande es prometernos cuidado y respeto todos los días de nuestras vidas. <br>Con el corazón lleno de humildad, queremos compartir con ustedes el milagro de habernos encontrado. Un amor verdadero no hace ruido, simplemente transforma y llena el alma.",
        fechaTexto: "30 . MAYO . 2026",
        hoyeselgrandedia: "¡Hoy es el gran día!",
        diacont: "Días",
        confirmar: "Confirmar Asistencia",
        iglesia: "Ceremonia Eclesiástica",
        ceremonia: {
            hora: "7:00 PM",
            lugar: "Iglesia la Preciosísima Sangre",
            direccion: "1ra Avenida con 4ta Transversal, Santa Eduvigis, Caracas, Venezuela",
            mapa_url: "https://maps.app.goo.gl/KH1eWnd3tpSD9xrr6" // Reemplazar con el link real
        },
        trajeformal: "Traje Formal",
        recepcionmsg: "Recepción (Brindis)",
        recepcion: {
            hora: "10:00 PM",
            lugar: "Edificio Castillete (salon de fiestas)",
            direccion: "Av. Andrés Bello, entre 1ra y 2da Transversal, Los Palos Grandes, Caracas, Venezuela",
            mapa_url: "https://maps.app.goo.gl/uDv5fYYAwTn17t5TA" // Reemplazar con el link real
        },
        detalleAmor: "Detalle de Amor",
        textodetalle: "El regalo más grande es que nos acompañen en este día tan especial. <br> Sin embargo, si desean tener un detalle adicional y ayudarnos a construir nuestro primer hogar juntos, pueden hacerlo a través de los siguientes medios:",
        findetalle: "*Si realizas un aporte, por favor envíanos el comprobante vía WhatsApp. ¡Gracias por tu generosidad!*",
        confirmartitulo: "Confirmación",
        confirmatexto: "Ingresa el código secreto de tu invitación digital para acceder a la confirmación.",
        confirmarerror: "Código incorrecto. Por favor, verifica tu invitación.",
        confircodeaceptada: "¡Código aceptado! Será un honor contar con tu presencia.",
        optasistencia1: "¿Asistirá?",
        optasistencia2: "Sí, asistiré con gusto",
        optasistencia3: "Lamentablemente no podré asistir",
        textacompanantes: "Acompañantes:",
        textadultos: "Adultos",
        textninos: "Niños",
        mensajepersonal: "Déjanos un mensaje, consejo o deseo para nuestro matrimonio. <br>Nos hace mucha ilusión leerlos... ❤️",
        textbotonenviar: "Enviar Confirmación",
        mensajeenviando: "Enviando tu confirmación...",
        footer: "Te esperamos,",
        msgfooter: '"Así que, como elegidos de Dios, santos y amados, revestíos de entrañas de misericordia, de bondad, humildad, mansedumbre y paciencia, soportándoos unos a otros y perdonándoos mutuamente, si alguno tiene queja contra otro. Como el Señor os perdonó, perdonaos también vosotros. Y por encima de todo esto, revestíos del amor, que es el broche de la perfección.” (Col 3, 12-14)',
        titvisitas: "Visitas",
        // ... Mensajes de la pagina web.
        mensajes: {
            iglesia: "Tu presencia en el Sacramento de nuestro Matrimonio es el mayor regalo que podemos recibir. ¡Gracias por acompañarnos en este paso de fe!",
            recepcion: "¡Nos encantará celebrar con ustedes en la recepción!"
        },
        // 4. Ubicaciones
        
        
    },

    en: {
        titulonav: "Héctor & Nathalie - Our Wedding",
        titulo: "Our Wedding",
        mensajeinicio: "Our Love was born from grace and we want to seal it with God's Blessing. <br> We take this step with deep joy and simplicity, knowing that the greatest gift is to promise care and respect every day of our lives. <br> With hearts full of humility, we want to share with you the miracle of having found each other. True love doesn't make noise, it simply transforms and fills the soul.",
        fechaTexto: "MAY . 30 . 2026",
        diacont: "Days",
        hoyeselgrandedia: "Today is the big day!",
        confirmar: "Confirm Attendance",
        iglesia: "Religious Ceremony",
        ceremonia: {
            hora: "7:00 PM",
            lugar: "Church of the Most Precious Blood",
            direccion: "1st Avenue with 4th Transversal, Santa Eduvigis, Caracas, Venezuela",
            mapa_url: "https://maps.app.goo.gl/KH1eWnd3tpSD9xrr6"
        },
        trajeformal: "Formal Attire",
        recepcionmsg: "Wedding Reception",
        recepcion: {
            hora: "10:00 PM",
            lugar: "Castillete Building (party hall)",
            direccion: "Av. Andrés Bello, entre 1ra y 2da Transversal, Los Palos Grandes, Caracas, Venezuela",
            mapa_url: "https://maps.app.goo.gl/uDv5fYYAwTn17t5TA"
        },
        detalleAmor: "Love Gift",
        textodetalle: "The greatest gift is your presence at our wedding. <br> However, if you wish to have an additional gesture and help us build our first home together, you can do so through the following means:",
        findetalle: "*If you make a contribution, please send us the receipt via WhatsApp. Thank you for your generosity!*",
        confirmartitulo: "Confirmation",
        confirmatexto: "Enter the secret code from your digital invitation to access the confirmation.",
        confirmarerror: "Incorrect code. Please verify your invitation.",
        confircodeaceptada: "Code accepted! It will be an honor to have your presence.",
        optasistencia1: "Will you attend?",
        optasistencia2: "Yes, I will attend with pleasure",
        optasistencia3: "Unfortunately, I will not be able to attend",
        textacompanantes: "Companions:",
        textadultos: "Adults",
        textninos: "Children",
        mensajepersonal: "Leave us a message, advice or wish for our wedding. <br>We are excited to read them... ❤️",
        textbotonenviar: "Send Confirmation",
        mensajeenviando: "Sending your confirmation...",
        footer: "We look forward to seeing you,",
        msgfooter: '"You are God\'s chosen race, his saints; he loves you, and you should be clothed in sincere compassion, in kindness and humility, gentleness and patience. Bear with one another; forgive each other as soon as a quarrel begins. The Lord has forgiven you; now you must do the same. Over all these clothes, to keep them together and complete them, put on love." (Colossians 3, 12-14)',
        titvisitas: "Visits",

        mensajes: {
            iglesia: "Your presence at the Sacrament of our Marriage is the greatest gift we can receive. Thank you for joining us in this step of faith!",
            recepcion: "We will love to celebrate with you at the reception!"
        },
    },

};

let currentlang = 'es'; // Idioma por defecto
    
    

