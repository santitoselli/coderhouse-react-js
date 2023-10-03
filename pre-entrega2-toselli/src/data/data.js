const products = [
    {
        "id": 1,
        "name": "Pedalera Boss RC300",
        "category": "efectos",
        "description": "Pedal Boss Rc-300 Loop Station. Como nuevo! Incluye estuche rígido Artec. Sin transformador",
        "specs": "Especificaciones: 3 entradas (micrófono, instrumento y aux). Conexiones USB, MIDI, salida para auriculares, pedales de conbtrol y expresión externos, salidas SUB. Cantidad de efectos: 16 (Transpose, Flanger, Phaser, Pan, Tremolo, Slicer, Bend, Chorus, Robot, Female, Male, Gt->Bass, Filter, Delay, Lo-Fi, Distortion). Tiempo máximo de grabación: Aprox. 3 horas (estéreo). 83 tipos de ritmos. Máxima memoria de frases: 99. Numero de pistas: 3 (estéreo). Formato de datos: WAV (44.1 kHz, 16-bit, estéreo). Voltaje de funcionamiento: 9V / 320mA. Ancho x Profundidad x Altura: 536 mm x 231 mm x 76 mm.Peso: 3.9 kg",
        "price": 700,
        "stock": 2,
        "img": "/img/thumbnails/01_th01.jpg",
        "imglarge": "/img/hi/01_hi01.jpg"
    },
    {
        "id": 2,
        "name": "Fractal Axe-Fx2",
        "category": "efectos",
        "description": "Procesador Fractal Audio Axe-FX2. En muy buen estado",
        "specs": "Especificaciones: ENTRADA DEL PANEL FRONTAL: Conector: Jack de teléfono de 1/4”, no balanceado. Impedancia: 1 megaohmio (menos si la impedancia de entrada está activa) máx. Nivel de entrada: +16 dBu (acondicionado para uso de guitarra). ENTRADAS TRASERAS: Conector: Jack de teléfono de 1/4”, balanceado. Impedancia: 1 megaohmio máx. Nivel de entrada: +20 dBu. CONVERSIÓN A/D: Profundidad de bits: 24 bits. Frecuencia de muestreo: 48 kHz. Rango dinámico: > 110 dB. Respuesta de frecuencia: 20 – 20 kHz, +0 / -1 dB. Diafonía: <-60 dB en todo el ancho de banda. SALIDAS ANALÓGICAS: Conectores: jack de teléfono de 1. Rango dinámico: > 110 dB. Respuesta de frecuencia: 20 – 20 kHz, +0 / -1 dB. Diafonía: <-60 dB en todo el ancho de banda. E/S DIGITALES: Conectores: Tipo coaxial RCA para E/S S/PDIF, XLR para E/S AES. Formato: S/PDIF – 24 bits. Frecuencia de muestreo: 48 kHz fijo. Reloj de audio USB 48 kHz fijo. INTERFAZ MIDI: Conector de entrada: DIN de 7 pines (pines 6 y 7 conectados al conector de entrada de alimentación fantasma). Conector de salida/a través: DIN de 5 pines. INTERFAZ DE PEDALES: Conector: conector telefónico TRS de 1/4”. Formato: Interruptor: Momentáneo o Enganche; Pedal: 10–100 kΩ máx., tipo de expresión cónica lineal. INTERFAZ MFC: Conector: RJ-45 Ethernet/EtherCON. PHANTOM: Conector: conector hembra de 2,5 mm. GENERAL: Acabado: Chasis de acero con recubrimiento en polvo con placa frontal de aluminio anodizado. Pantalla: LCD gráfica de matriz de puntos de 160 × 80. Dimensiones: 19” × 3,5” × 14,25” (483 × 88 × 362 mm). Peso: 6,7 kg. Voltaje de entrada: 100–240 VAC, 47 – 63 Hz (entrada universal). Consumo de energía: <40 W. Duración de la batería de respaldo: >10 años. Tipo de batería de respaldo: litio CR2450",
        "price": 1400,
        "stock": 1,
        "img": "/img/thumbnails/02_th01.jpg",
        "imglarge": "/img/hi/02_hi01.jpg"
    },
    {
        "id": 3,
        "name": "Gibson Les Paul",
        "category": "guitarras",
        "description": "Guitarra Gibson Les Paul 120th Anniversary. Incluye estuche rígido Epiphone. Origen: Nashville (USA). Año 2014.",
        "specs": "Especificaciones: Color Tobacco Sunburst. Diapasón de Rosewood. Cuerpo solido de Mahogany. Puente Tune-O-Matic. Mástil  perfil medium de Mahogany con  inlays de madreperla trapezoidales. Logo 120th Anniversary en traste 12. Escala 24 3/4in. Clavijero robot Etune. Micrófonos Gibson Dual ’57 Classic humbuckers. Llave selectora de 3 posiciones. Controles: Speed knobs, 2 tonos y 2 volumenes.",
        "price": 1800,
        "stock": 1,
        "img": "/img/thumbnails/03_th01.jpg",
        "imglarge": "/img/hi/03_hi01.jpg"
    },
    {
        "id": 4,
        "name": "Godin Multiac",
        "category": "guitarras",
        "description": "Guitarra Godin Multiac ACS SA. En muy buen estado. Incluye funda y folletos orignales. Origen: Canada. Año 2011",
        "specs": "Especificaciones: Tapa de Cedro. Cuerpo Chambered de Caoba. Color Cedar Natural. Trastera de Richlite. Mástil de Caoba. Radio 16in (406.4 mm). Puente de Rosewood. Electrónica: Custom RMC. Controles: Volumen, agudos ,medios y graves, volumen de Sinte, programa, selector de Midi. Piezo LR Baggs Custom de 13 pins, para sintetizadores Roland GR y otros artefactos similares. Clavijero Godin Deluxe. Cuerdas de Nylon. Funda Original Godin. 22 trastes",
        "price": 1800,
        "stock": 1,
        "img": "/img/thumbnails/04_th01.jpg",
        "imglarge": "/img/hi/04_hi01.jpg"
    },
    {
        "id": 5,
        "name": "Korg Kronos 2 88LS",
        "category": "teclados",
        "description": "Workstation Korg Kronos 2 88LS. Igual a nuevo! Incluye embalaje y manuales originales. Origen: Japón. Año 2018.",
        "specs": "Especificaciones: Teclado LS (Semi-contrapesado sensible a la Velocidad) con 88 teclas. 9 motores de sonido: SGX-2, EP-1, HD-1, AL-1, CX-3, STR-1, MOD-7, thomann MS-20EX y PolysixEX. Combis de 16 partes. Transición de sonido suave. Efectos incorporados. Modo 'Set List'. Pantalla TFT TouchViewTM de 8in. El secuenciador incorporado ofrece 16 pistas MIDI + 16 pistas de audio (calidad de grabación de 24 bits / 48kHz). Sistema de sampling abierto. Tecnología KARMA incorporada. Salidas L/MONO, R principal TRS de 1/4in balanceada. 4 salidas thomann individuales TRS de 6,3mm balanceadas. Entrada/Salida S/PDIF óptica. Entradas de audio: 1 y 2 TRS de 1/4in balanceadas, 2 USB A (para dispositivos USB externos) y 1 USB B (Interface de Audio/MIDI). MIDI In/Out/Thru. Conexiones: Pedal 'Damper' (soporta función de semiapagador), controlador de pie y conmutador de pedal. Unidad SSD de 62 GB thomann (2,5in) incorporada. Paneles laterales de madera. Dimensiones: 1,426 mm x 364 mm x 134 mm/56.14” x 14.33” x 5.28” (ancho x profundo x alto). Peso: 17.8 kg.",
        "price": 4000,
        "stock": 1,
        "img": "/img/thumbnails/05_th01.jpg",
        "imglarge": "/img/hi/05_hi01.jpg"
    },
    {
        "id": 6,
        "name": "Korg Pa4x",
        "category": "teclados",
        "description": "Arranger Korg Pa4x Oriental. Igual a nuevo!",
        "specs": "Especificaciones: Motor de sonido EDS-X (Enhanced Definition Synthesis–eXpanded). Función DNC (Control de Matiz Definido), exclusiva de KORG, proporciona instrumentos solistas con sofisticadas articulaciones.  Teclado de 61 Teclas (C2 – C7) semi–contrapesadas con velocidad y aftertouch. Filtros con Resonancia, Ecualizador de tres bandas por cada Pista. Polifonía de 128 Voces. 128 Osciladores. 4 efectos de inserción; 3 efectos master (148 Tipos). Tecnología de Procesador Vocal por TC Helicon®: Armonizador de cuatro partes, Double, μMod, Reverb, Delay, Filter, HardTune, Pitch Correction; más Compressor, EQ, Gate (Adaptive Mic Setting en entrada Mic). Más de 2,000 Sonidos incluyendo  dos Piano Estéreo multicapa con resonancia damper y caja, GM/XG sets de sonido y más de 90 Kits de Batería incluyendo Ambient Drums.  Presets de usuario: 768 Sonidos, 384 Kits de Batería.  9 registros, percusión, key on/off, leakage, efecto de altavoz rotatorio. Tecnología Control de Matiz Definido (DNC) Carga formatos KORG, WAV, AIFF y SoundFont. Guarda formatos KORG, WAV y AIFF Entradas: Mic/Línea-Mic: Combo XLR balanceada con control de Ganancia y alimentación Phantom. Line 1: Left/Right (1/4” jack) entradas de línea, balanceada. Line 2: Estéreo (1/8” mini-jack) entrada de línea, no balanceada. Salidas de Audio: Left/Right, Out 1, Out 2 (1/4” TRS) balanceada. Salida de Auriculares x 1 (Panel frontal). Salida de Vídeo x 1, tipo RCAMIDIIN, OUT, THRU. Conectores MIDI estándar. USB a MIDI mediante puerto USB Device.",
        "price": 4600,
        "stock": 1,
        "img": "/img/thumbnails/06_th01.jpg",
        "imglarge": "/img/hi/06_hi01.jpg"
    },
    {
        "id": 7,
        "name": "Marshall Lead 100",
        "category": "amplificadores",
        "description": "Cabezal Marshall Lead 100 Mosfet. Origen:Inglaterra. Año: mediados de los 80).",
        "specs": "Especificaciones: Potencia de estado solido. Pre amp con válvula 12AX7. Potencia : 100 watts a 4 ohms. Reverb a resortes. 2 canales. Controles de EQ para canal limpio. Control de tono general para canla drive + boost. Loop de FX. Line out.",
        "price": 500,
        "stock": 2,
        "img": "/img/thumbnails/07_th01.jpg",
        "imglarge": "/img/hi/07_hi01.jpg"
    },
    {
        "id": 8,
        "name": "Mesa Boogie Triple Rectifier",
        "category": "amplificadores",
        "description": "Cabezal Mesa Boogie Triple Rectifier 150W. Incluye funda y footswitch originales. Origen: USA.",
        "specs": "Especificaciones: Potencia: 50/150 watts. Válvulas de preamp: 5 x 12AX7. Válvulas de potencia: 6 x 6L6. Válvula de rectificación: 3 x 5U4. 3 canales, 8 modos de estilo. Modos de Estilo: Canal 1 - Clean y Pushed; Canales 2 y 3 - Vintage, Modern y Raw. Controles: Cada canal cuenta con switch de Modo de Estilo independiente, switch 50/150 Multi-Watt, Ganancia, Agudos, Medios, Graves, Presencia, Master y Rectificación Dual asignable con Recto Tracking. Controles generales de Salida y Solo. Loop de efectos en serie true bypass con búfer completo con control de nivel de envío. Salida de afinador en el panel trasero con Mute vía footswitch. Dimensiones: 25,4 x 64,8 x 25,1 cm. (Al. x An. x Pr.). Peso: 21,8 kg.g",
        "price": 3000,
        "stock": 1,
        "img": "/img/thumbnails/08_th01.jpg",
        "imglarge": "/img/hi/08_hi01.jpg"
    },
    {
        "id": 9,
        "name": "Mooer Pitch Box",
        "category": "efectos",
        "description": "Pedal Mooer Pitch Box. Igual a nuevo! Incluye caja.",
        "specs": "Especificaciones: 3 modos de efectos: armonía, cambio de tono, desafinación. Armonía: cambia el tono y lo vuelve a mezclar con la señal original para crear un sonido rico en armónicos. Cambio de tono: emite una voz de cambio de tono polifónica precisa. Desafinacion: cambia ligeramente el tono y lo mezcla con la señal original para crear un efecto similar al de un coro, suena mucho con una agradable sensación de espacio. Cambio de tono polifónico preciso. Rango de tono de ±2 oct (16 parámetros opcionales). Carcaza de metal. True Bypass",
        "price": 110,
        "stock": 3,
        "img": "/img/thumbnails/09_th01.jpg",
        "imglarge": "/img/hi/09_hi01.jpg"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=> prod.id === productId))
        }, 500);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=> prod.category === categoryId))
        }, 500);
    })
}