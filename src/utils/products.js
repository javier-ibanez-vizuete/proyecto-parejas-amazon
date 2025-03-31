const products = [
	// PORTATILES
	{
		id: 1,
		name: "HP EliteBook 840 G3 INTEL CORE i5-6200U 6ªGEN 2.3 GHz WEBCAM 16GB RAM 256GB SSD Window 10 Po 64 bit. (Reacondicionado)",
		modelName: "HP EliteBook 840",
		brand: "HP",
		category: "laptops",
		image: [
			"/media/productos/portatiles/hp-fd0186ns/hp-15-fd0186ns-front.jpg",
			"/media/productos/portatiles/hp-fd0186ns/hp-15-fd0186ns-side.jpg",
			"/media/productos/portatiles/hp-fd0186ns/hp-15-fd0186ns-top.jpg",
		],
		color: "Gris",
		price: 202,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 2,
		name: "Acer Aspire 3 A315-59-595G, Ordenador Portátil 15,6” (Intel Core i5-1235U, 16 GB RAM, 1 TB SSD, Iris Xe Graphics, Windows 11 Home) Color Plata, Teclado QWERTY Español",
		modelName: "Acer Aspire 3",
		brand: "Acer",
		category: "laptops",
		image: [
			"/media/productos/portatiles/acer-aspire-3/acer-aspire-3-front.jpg",
			"/media/productos/portatiles/acer-aspire-3/acer-aspire-3-back.jpg",
			"/media/productos/portatiles/acer-aspire-3/acer-aspire-3-top.jpg",
		],
		color: "Gris",
		price: 499,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 3,
		name: 'HP 15-fd0186ns - Ordenador portátil de 15.6" FHD (Intel N100, 4GB RAM, 128GB UFS, Intel UHD, Windows 11) Plata - Teclado QWERTY Español',
		modelName: "HP 15 FHD",
		brand: "HP",
		category: "laptops",
		image: [
			"/media/productos/portatiles/hp-elitebook/51F3kMehV4L._AC_SL1200_.jpg",
			"/media/productos/portatiles/hp-elitebook/5162FcUCsEL._AC_.jpg",
			"/media/productos/portatiles/hp-elitebook/31vqBIw-RuL._AC_SL1200_.jpg",
		],
		color: "Platino",
		price: 299,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 4,
		name: 'TECHBITE Portátil ZIN 3 14.1 HD 128 GB, Intel Celeron N4020, 4 GB de RAM LPDDR / 128 GB de Memoria, Windows 10 Pro, 5000 mAh, Pantalla 14.1", Wi-Fi, Bluetooth, portátil Oficina, Teclado ES, Negro',
		modelName: "TECHBITE ZIN 3",
		brand: "TECHBITE",
		category: "laptops",
		image: [
			"/media/productos/portatiles/techbite-portatil/techbite-portatil-front.jpg",
			"/media/productos/portatiles/techbite-portatil/techbite-portatil-side.jpg",
			"/media/productos/portatiles/techbite-portatil/techbite-portatil-top.jpg",
		],
		color: "Gris Oscuro",
		price: 136,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 5,
		name: 'Lenovo IdeaPad 1 Gen 7 - Ordenador Portátil 15.6" FHD (AMD Ryzen 7 5700U, 16GB RAM, 512GB SSD, AMD Radeon Graphics, Wi-Fi 6, Sin Sistema Operativo), Teclado QWERTY Español, Color Gris Nube',
		modelName: "Lenovo IdeaPad 1",
		brand: "Lenovo",
		category: "laptops",
		image: [
			"/media/productos/portatiles/lenovo-ideapad-1/lenovo-ideapad-1-front.jpg",
			"/media/productos/portatiles/lenovo-ideapad-1/lenovo-ideapad-1-back.jpg",
			"/media/productos/portatiles/lenovo-ideapad-1/lenovo-ideapad-1-top.jpg",
		],
		color: "Gris Mate",
		price: 599,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 6,
		name: "Acer Aspire 1 A115-32-C4Y0 - Ordenador Portátil 15,6” HD LCD (Intel Celeron N4500, 4GB RAM, 128 GB eMMc, Intel UHD Graphics, Windows 11 Home en Modo S), Color Plata, Teclado QWERTY Español",
		modelName: "Acer Aspire 1",
		brand: "Acer",
		category: "laptops",
		image: [
			"/media/productos/portatiles/acer-aspire-1/acer-aspire-1-front.jpg",
			"/media/productos/portatiles/acer-aspire-1/acer-aspire-1-side.jpg",
			"/media/productos/portatiles/acer-aspire-1/acer-aspire-1-top.jpg",
		],
		color: "Gris",
		price: 249,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 7,
		name: 'ASUS Vivobook 15 F1504ZA-NJ691W - Ordenador Portátil 15.6" Full HD (Intel Core i5-1235U, 16GB RAM, 512GB SSD, Iris Xe Graphics, Windows 11 Home) Plata Fría - Teclado QWERTY español',
		modelName: "ASUS Vivobook 15",
		brand: "ASUS",
		category: "laptops",
		image: [
			"/media/productos/portatiles/asus-vivobook-15/asus-vivobook-15-front.jpg",
			"/media/productos/portatiles/asus-vivobook-15/asus-vivobook-15-back.jpg",
			"/media/productos/portatiles/asus-vivobook-15/asus-vivobook-15-top.jpg",
		],
		color: "Gris Claro",
		price: 549,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 8,
		name: "Ordenador Portátil 15,6 Pulgadas Celeron N5095 2,9 GHz Win11 Pro 8GB 256GB SSD Expansión 1TB DDR4 5G WiFi 1920x1080 FHD HDMl USB 3.0 Portatil con Ratón Inalámbrico y Teclado Español Membrana - Plata",
		modelName: "Ordenador Portatil 15º",
		brand: "Sin Marca",
		category: "laptops",
		image: [
			"/media/productos/portatiles/ordenador-portatil/ordenador-portatil-front.jpg",
			"/media/productos/portatiles/ordenador-portatil/ordenador-portatil-side.jpg",
			"/media/productos/portatiles/ordenador-portatil/ordenador-portatil-top.jpg",
		],
		color: "Gris",
		price: 279,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 9,
		name: 'AOC Ordenador Portatil con I-ntel N97 (hasta 3,6 GHz), Portátil Computadora 16GB DDR4 512GB SSD Expansión 2TB （Mejor que Celeron） Laptop,WiFi,BT5,Tipo C,USB3.2, HDMI, 15,6" Notebook 1080P Versión 2025',
		modelName: "AOC N97",
		brand: "AOC",
		category: "laptops",
		image: [
			"/media/productos/portatiles/aoc-ordenador-portatil/aoc-ordenador-portatil-front.jpg",
			"/media/productos/portatiles/aoc-ordenador-portatil/aoc-ordenador-portatil-side.jpg",
			"/media/productos/portatiles/aoc-ordenador-portatil/aoc-ordenador-portatil-top.jpg",
		],
		color: "Gris Oscuro",
		price: 359,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	// TABLETS
	{
		id: 10,
		name: "Xiaomi Redmi Pad SE Tablet 11 Pulgadas 8GB+256GB Resolution 1200 x 2000, 90hz Display, Battery 8000mAh, 10W Fast Charging WiFi Grey",
		modelName: "Xiaomi Redmi Pad SE 11",
		brand: "Xiaomi",
		category: "tablets",
		image: [
			"/media/productos/tablets/xiaomi-redmi-pad-se/xiaomi-redmi-pad-se-front.jpg",
			"/media/productos/tablets/xiaomi-redmi-pad-se/xiaomi-redmi-pad-se-side.jpg",
			"/media/productos/tablets/xiaomi-redmi-pad-se/xiaomi-redmi-pad-se-back.jpg",
		],
		color: "Gris Claro",
		price: 167,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 11,
		name: "FECLYDET Tablet 10 Pulgadas, Android 14 Octa-Core con 10GB RAM+128GB ROM(1TB TF), Widevine L1,Bluetooth 5.0, Cámara Dual, 5000mAh, WiFi6（Negro）",
		modelName: "FECLYDET Tab 10",
		brand: "FECLYDET",
		category: "tablets",
		image: [
			"/media/productos/tablets/feclydet-tablet/feclydet-tablet-front.jpg",
			"/media/productos/tablets/feclydet-tablet/feclydet-tablet-side.jpg",
			"/media/productos/tablets/feclydet-tablet/feclydet-tablet-back.jpg",
		],
		color: "Negro",
		price: 79,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 12,
		name: "Lenovo Tablet Tab M11, Pantalla táctil de 11 Pulgadas, MediaTek G88, 4 GB de RAM, 128 GB eMMC 5.1, Android 13, Gris, Incluye Pen",
		modelName: "Lenovo Tab M11",
		brand: "Lenovo",
		category: "tablets",
		image: [
			"/media/productos/tablets/lenovo-tablet-tab-m11/lenovo-tablet-tab-m11-front.jpg",
			"/media/productos/tablets/lenovo-tablet-tab-m11/lenovo-tablet-tab-m11-side.jpg",
			"/media/productos/tablets/lenovo-tablet-tab-m11/lenovo-tablet-tab-m11-back.jpg",
		],
		color: "Gris Oscuro",
		price: 169,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 13,
		name: "Xiaomi Redmi Pad SE 4Go/128Go Wi-FI Gris (Graphite Gray)",
		modelName: "Xiaomi Redmi Pad SE 4Go",
		brand: "Xiaomi",
		category: "tablets",
		image: ["/media/productos/tablets/xiami-redmi-pad-se-4go/xiaomi-redmi-se-4go-front.jpg"],
		color: "Gris Claro",
		price: 132,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 14,
		name: 'Xiaomi Redmi Pad SE 8,7" – Tablet de 8,7” LCD (MediaTek Helio G85, 4GB de RAM, 64GB de ROM, WiFi + Bluetooth 5.3, batería de 6650 mAh, Cargador no Incluido), Azul (Versión ES)',
		modelName: "Xiaomi Redmi Pad SE 87",
		brand: "Xiaomi",
		category: "tablets",
		image: [
			"/media/productos/tablets/xiaomi-redmi-pad-se-8.7/xiaomi-redmi-pad-se-8.7-front.jpg",
			"/media/productos/tablets/xiaomi-redmi-pad-se-8.7/xiaomi-redmi-pad-se-8.7-side.jpg",
			"/media/productos/tablets/xiaomi-redmi-pad-se-8.7/xiaomi-redmi-pad-se-8.7-back.jpg",
		],
		color: "Negro/Azul/Verde",
		price: 94,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 15,
		name: "Apple iPad de 11 Pulgadas: Chip A16, Modelo de 11 Pulgadas, Pantalla Liquid Retina, 128 GB, Wi Fi 6, cámaras Frontal y Trasera de 12 Mpx, Touch ID, autonomía para un día Entero – Plata",
		modelName: "Apple iPad 11",
		brand: "Apple",
		category: "tablets",
		image: [
			"/media/productos/tablets/apple-ipad/apple-ipad-front.jpg",
			"/media/productos/tablets/apple-ipad/apple-ipad-back.jpg",
		],
		color: "Azul/Rojo/Verde/Gris/Blanco",
		price: 399,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 16,
		name: "HONOR Pad X8A 4GB 128GB, Ampliable hasta 1TB, WiFi Tablet, Pantalla de 11 Pulgadas 90Hz, Snapdragon 680, 4 Altavoces, Batería 8300mAh, Cuerpo Metálico, Android 14, Google Service, Gris",
		modelName: "HONOR Pad X8A",
		brand: "HONOR",
		category: "tablets",
		image: [
			"/media/productos/tablets/honor-pad-x8a/honor-pad-x8a-front.jpg",
			"/media/productos/tablets/honor-pad-x8a/honor-pad-x8a-side.jpg",
			"/media/productos/tablets/honor-pad-x8a/honor-pad-x8a-back.jpg",
		],
		color: "Gris Oscuro",
		price: 169,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 17,
		name: "Samsung Galaxy Tab A9+ Tablet Android, 128 GB Almacenamiento, WiFi, Pantalla 11”, Sonido 3D, Gris (Versión Española)",
		modelName: "Samsung Galaxy Tab A9+",
		brand: "Samsung",
		category: "tablets",
		image: [
			"/media/productos/tablets/samsung-galaxy-tab-a9plus/samsung-galaxy-tab-a9plus-front.jpg",
			"/media/productos/tablets/samsung-galaxy-tab-a9plus/samsung-galaxy-tab-a9plus-back.jpg",
		],
		color: "Gris Oscuro",
		price: 199,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 18,
		name: "DOOGEE U11 Android 15 Tablet 11 Pulgadas, Tablet Octa-Core, 16GB RAM+128GB ROM/1TB TF, HD IPS Pantalla/90Hz, 8580mAh Batería,WiFi 2.4/5GHz / Widevine L1 /5MP+13MP / Facial ID/GMS/BT5.0/3.5mm Jack",
		modelName: "DOOGEE U11",
		brand: "DOOGEE",
		category: "tablets",
		image: [
			"/media/productos/tablets/doogee-u11/doogee-u11-front.jpg",
			"/media/productos/tablets/doogee-u11/doogee-u11-side.jpg",
			"/media/productos/tablets/doogee-u11/doogee-u11-back.jpg",
		],
		color: "Gris Oscuro/Azul",
		price: 129,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	// MONITORES
	{
		id: 19,
		name: "Philips 24E1N1100A - Monitor Full HD de 24 Pulgadas, Integrado Altavoz, Tiempo de Respuesta de 1 ms (1920x1080, 100 Hz, VGA, HDMI 1.4) Negro",
		modelName: "Philips 24E1",
		brand: "Philips",
		category: "monitor",
		image: [
			"/media/productos/monitores/philips-24e1n1100a/philips-24e1n1100a-front.jpg",
			"/media/productos/monitores/philips-24e1n1100a/philips-24e1n1100a-side.jpg",
			"/media/productos/monitores/philips-24e1n1100a/philips-24e1n1100a-back.jpg",
		],
		color: "Negro",
		price: 236,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 20,
		name: "MSI Pro MP275 – Monitor rofessional 27”,100 Hz, FHD, IPS, HDR Ready, Pantalla TÜV, Altavoces Integrados, antiflicker Eye-Q Check",
		modelName: "MSI Pro MP275",
		brand: "MSI",
		category: "monitor",
		image: [
			"/media/productos/monitores/msi-pro-mp275/msi-pro-mp275-front.jpg",
			"/media/productos/monitores/msi-pro-mp275/msi-pro-mp275-side.jpg",
			"/media/productos/monitores/msi-pro-mp275/msi-pro-mp275-back.jpg",
		],
		color: "Negro",
		price: 124,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 21,
		name: 'MSI Pro MP161 E2U Monitor portátil Full HD de 15,6", Panel IPS 1920 x 1080, 60 Hz, Pantalla Agradable a la Vista (PC, portátil, móvil), Altavoces, chasis y Soporte, Mini-HDMI 2.0b, 2 x USB Type-C',
		modelName: "MSI Pro MP161",
		brand: "MSI",
		category: "monitor",
		image: [
			"/media/productos/monitores/msi-pro-mp161-e2u/msi-pro-mp161-e2u-front.jpg",
			"/media/productos/monitores/msi-pro-mp161-e2u/msi-pro-mp161-e2u-side.jpg",
			"/media/productos/monitores/msi-pro-mp161-e2u/msi-pro-mp161-e2u-back.jpg",
		],
		color: "Gris Oscuro",
		price: 99,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 22,
		name: 'MSI Pro MP252 Monitor Profesional Full HD de 24,5"- Panel IPS 1920 x 1080, 100 Hz, Pantalla Eye-Friendly, Altavoces Integrados, inclinación Ajustable, HDM 2.0b, DisplayPort 1.4a',
		modelName: "MSI Pro MP 252",
		brand: "MSI",
		category: "monitor",
		image: [
			"/media/productos/monitores/msi-pro-mp252/msi-pro-mp252-front.jpg",
			"/media/productos/monitores/msi-pro-mp252/msi-pro-mp252-back.jpg",
		],
		color: "Negro",
		price: 129,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 23,
		name: "LG 27US500-W - Monitor 4K UltraHD, 27 Pulgadas, IPS, 3840 x 2160, HDMIx2 2.0, SuperResolution+, clasificación F, 60 Hz, 5 ms, Blanco",
		modelName: "LG 27U",
		brand: "LG",
		category: "monitor",
		image: [
			"/media/productos/monitores/lg-27us500-w/lg-27us500-w-front.jpg",
			"/media/productos/monitores/lg-27us500-w/lg-27us500-w-back.jpg",
			"/media/productos/monitores/lg-27us500-w/lg-27us500-w-top.jpg",
		],
		color: "Blanco",
		price: 199,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 24,
		name: 'SAMSUNG LS24C310EAUXEN - Monitor Profesional Esencial S3 S31C de 24" Full HD (1920 x 1080, 16:9, 75Hz, 5ms, Panel IPS, AMD FreeSync, Modo Eye Saver, Flicker Free), Negro, Versión 2024',
		modelName: "SAMSUNG LS24",
		brand: "Samsung",
		category: "monitor",
		image: [
			"/media/productos/monitores/samsung-ls24c310eauxen/samsung-ls24c310eauxen-front.jpg",
			"/media/productos/monitores/samsung-ls24c310eauxen/samsung-ls24c310eauxen-side.jpg",
		],
		color: "Gris Oscuro",
		price: 85,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 25,
		name: 'ASUS Monitor VA27EHF Eye Care Gaming 27" (IPS, Full HD, sin marcos, 100 Hz, sincronización adaptativa, MPRT de 1 ms, HDMI, luz azul baja, sin parpadeos, montaje en pared)',
		modelName: "ASUS VA27",
		brand: "ASUS",
		category: "monitor",
		image: [
			"/media/productos/monitores/asus-va27ehf/asus-va27ehf-front.jpg",
			"/media/productos/monitores/asus-va27ehf/asus-va27ehf-back.jpg",
		],
		color: "Gris Oscuro",
		price: 104,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 26,
		name: 'HP V27ie G5- Monitor de 27" Full HD (1920 x 1080, 75Hz, 5ms, IPS, 16:9, AMD FreeSync, Low Blue Light, HDMI, VGA, DisplayPort, Joypad OSD, Antirreflejo, VESA, Inclinación Ajustable) Negro',
		modelName: "HP V27 G5",
		brand: "HP",
		category: "monitor",
		image: [
			"/media/productos/monitores/hp-v27ie-g5/hp-v27ie-g5-front.jpg",
			"/media/productos/monitores/hp-v27ie-g5/hp-v27ie-g5-side.jpg",
			"/media/productos/monitores/hp-v27ie-g5/hp-v27ie-g5-back.jpg",
		],
		color: "Gris Oscuro",
		price: 119,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 27,
		name: 'MSI mag 27C6F Monitor Curvo Gaming FHD de 27", 1500R 1920 x 1080 Panel VA rápido, 180 Hz / 0,5 ms (GtG, mín.), Sincronización adaptativa, DP 1.2a, HDMI CEC',
		modelName: "MSI Mag 27C6F",
		brand: "MSI",
		category: "monitor",
		image: [
			"/media/productos/monitores/msi-mag-27c6f/msi-mag-27c6f-front.jpg",
			"/media/productos/monitores/msi-mag-27c6f/msi-mag-27c6f-side.jpg",
			"/media/productos/monitores/msi-mag-27c6f/msi-mag-27c6f-back.jpg",
		],
		color: "Negro",
		price: 192,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	// ALMACENAMIENTO EXTERNO
	{
		id: 28,
		name: "Kingston Canvas Select Plus Tarjeta microSD, SDCS2/128GB Class 10 con Adaptador SD, garantía de por vida con el fabricante.",
		modelName: "Kingston Canvas Select Plus",
		brand: "Kingston",
		category: "almacenamiento",
		image: [
			"/media/productos/almacenamiento-externo/kingston-canvas-select-plus/kingston-canvas-select-plus-front.jpg",
			"/media/productos/almacenamiento-externo/kingston-canvas-select-plus/kingston-canvas-select-plus-side.jpg",
		],
		color: "Negro",
		price: 8,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 29,
		name: "SanDisk Ultra Tarjeta Micro SDXC 256 GB + adaptador SD (Compatibles con tabletas y móviles Android, UHS-I, hasta 150 MB/s, Video Full HDD, Clase A1 de rendimiento, Class 10, U1)",
		modelName: "SanDisk Micro Ultra 256",
		brand: "Sandisk",
		category: "almacenamiento",
		image: [
			"/media/productos/almacenamiento-externo/sandisk-micro-sdxc/sandisk-ultra-micro-sdxc-front.jpg",
			"/media/productos/almacenamiento-externo/sandisk-micro-sdxc/sandisk-ultra-micro-sdxc-side.jpg",
		],
		color: "Rojo/Gris",
		price: 18,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 30,
		name: "SanDisk 128GB Ultra, Tarjeta de memoria microSDXC, hasta 140 MB/s + adaptador SD, con Clase A1 de rendimiento de las aplicaciones, UHS-I Class 10 U1",
		modelName: "SanDisk Micro Ultra 128",
		brand: "Sandisk",
		category: "almacenamiento",
		image: [
			"/media/productos/almacenamiento-externo/sandisk-128gb-ultra/sandisk-128gb-ultra-front.jpg",
			"/media/productos/almacenamiento-externo/sandisk-128gb-ultra/sandisk-128gb-ultra-side.jpg",
		],
		color: "Gris/Rojo",
		price: 12,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 31,
		name: "SanDisk Ultra Flair 256GB Pendrive, Memoria USB 3.0, velocidad de lectura hasta 150 MB/s, Protección con Contraseña, Carcasa de metal elegante y duradera, Plata y negro",
		modelName: "SanDisk Ultra Flair 256",
		brand: "Sandisk",
		category: "almacenamiento",
		image: [
			"/media/productos/almacenamiento-externo/sandisk-ultra-flair/sandisk-ultra-flair-front.jpg",
			"/media/productos/almacenamiento-externo/sandisk-ultra-flair/sandisk-ultra-flair-side.jpg",
		],
		color: "Negro/Gris",
		price: 22,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 32,
		name: "Amazon Basics - MicroSDXC, 128 GB, con Adaptador SD, A2, U3, velocidad de lectura hasta 100 MB/s, Negro",
		modelName: "Amazon Basics Micro SD 128",
		brand: "Amazon basics",
		category: "almacenamiento",
		image: [
			"/media/productos/almacenamiento-externo/amazon-basics-microsdxc-128gb/amazon-basics-micro-sdxc-128gb-front.jpg",
			"/media/productos/almacenamiento-externo/amazon-basics-microsdxc-128gb/amazon-basics-micro-sdxc-128gb-top.jpg",
		],
		color: "Negro",
		price: 11,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 33,
		name: "Kingston DataTraveler Exodia DTX/128GB Flash Drive USB 3.2 Gen 1 - with Protective Cap and Keyring in Multiple Colours",
		modelName: "Kingston Data Traveler Exodia 128",
		brand: "Kingston",
		category: "almacenamiento",
		image: [
			"/media/productos/almacenamiento-externo/kingston-datatraveler-exodia-dtx/kingston-datatraveler-exodia-dtx-front.jpg",
			"/media/productos/almacenamiento-externo/kingston-datatraveler-exodia-dtx/kingston-datatraveler-exodia-dtx-side.jpg",
		],
		color: "Negro/Amarillo",
		price: 8,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 34,
		name: "Amazon Basics - MicroSDXC, 256 GB, con Adaptador SD, A2, U3, velocidad de lectura hasta 100 MB/s, Negro",
		modelName: "Amazon Basics Micro SD 256",
		brand: "Amazon basics",
		category: "almacenamiento",
		image: [
			"/media/productos/almacenamiento-externo/amazon-basics-microsdxc-256gb/amazon-basics-microsdxc-256gb-front.jpg",
		],
		color: "Negro",
		price: 17,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 35,
		name: "SanDisk 128 GB Extreme PRO Tarjeta de memoria SDXC, con hasta 280 MB/s, UHS-II, C10, U3, V60",
		modelName: "SanDisk Extreme Pro 128",
		brand: "Sandisk",
		category: "almacenamiento",
		image: [
			"/media/productos/almacenamiento-externo/sandisk-128gb-extreme-pro/sandisk-128gb-extreme-pro-front.jpg",
			"/media/productos/almacenamiento-externo/sandisk-128gb-extreme-pro/sandisk-128gb-extreme-pro-side.jpg",
		],
		color: "Negro/Gris Oscuro",
		price: 63,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 36,
		name: "Lexar Micro SD 32 GB, tarjeta Micro SD hasta 100 MB/seg(R), tarjeta de memoria microSDHC con adaptador SD, A1, U3, C10, V10, Full HD, tarjeta micro SD para teléfono, videocámara, Switch, GoPro, Tablet",
		modelName: "Lexar Micro 32",
		brand: "Lexar",
		category: "almacenamiento",
		image: ["/media/productos/almacenamiento-externo/lexar-32gb-microsd/lexar-32gb-microsd-front.jpg"],
		color: "Gris Claro/Rojo",
		price: 8,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	// ---------GAMING----------
	{
		id: 37,
		name: "Assassin's Creed Shadows Limited Edition (Exclusivo para Amazon.es) (PS5)",
		modelName: "Assassin's Creed Shadows",
		brand: "PS5",
		category: "gaming",
		image: ["/media/productos/gaming/assassins-creed-shadows/assassins-creed-shadows-front.jpg"],
		color: "Blanco/Rojo",
		price: 69,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 38,
		name: "Playstation 5 - Mando Inalámbrico DualSense Wireless Controller - Silver/Plata",
		modelName: "Playstation 5 DualSense",
		brand: "PS5",
		category: "gaming",
		image: [
			"/media/productos/gaming/playstation-5-mando-inalambrico/playstation-5-mando-inalambrico-front.jpg",
			"/media/productos/gaming/playstation-5-mando-inalambrico/playstation-5-mando-inalambrico-top.jpg",
		],
		color: "Blanco/Negro",
		price: 64,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 39,
		name: "Star Wars Jedi: Survivor | PS5 | Videojuegos | Castellano",
		modelName: "Star Wars Jedi: Survivor",
		brand: "PS5",
		category: "gaming",
		image: ["/media/productos/gaming/star-wars-jedi-survivor/star-wars-jedi-survivor-front.jpg"],
		color: "Blanco/Naranja",
		price: 51,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 40,
		name: "EA SPORTS FC 25 Standard Edition PS5 | Videojuegos | Castellano",
		modelName: "EA SPORTS FC 25",
		brand: "PS5",
		category: "gaming",
		image: ["/media/productos/gaming/ea-sports-fc-25/ea-sports-fc-25-front.jpg"],
		color: "Blanco/Verde",
		price: 36,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 41,
		name: "PowerA Cargador Rápido Dual para 2 x Mandos Inalámbricos DualSense, Estación Doble de Carga para Mandos de Sony PlayStation 5 (Gris/Negro)",
		modelName: "PowerA Dual",
		brand: "Power A",
		category: "gaming",
		image: [
			"/media/productos/gaming/powera-cargador-rapido-dual/powera-cargador-rapido-dual-front.jpg",
			"/media/productos/gaming/powera-cargador-rapido-dual/powera-cargador-rapido-dual-top.jpg",
		],
		color: "Blanco/Negro",
		price: 24,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 42,
		name: "OIVO Cargador Mando PS5, 2H Rápido Base de Carga para Playstation 5 DualSense, Estación de Carga con 2 Tipos de Cable",
		modelName: "OIVO Cargador 2H",
		brand: "OIVO",
		category: "gaming",
		image: [
			"/media/productos/gaming/oivo-cargador-mando-ps5/oivo-cargador-mando-ps5-front.jpg",
			"/media/productos/gaming/oivo-cargador-mando-ps5/oivo-cargador-mando-ps5-side.jpg",
		],
		color: "Blanco/Negro/Azul",
		price: 23,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 43,
		name: "Alan Wake 2 Deluxe Edition - PS5",
		modelName: "Alan Wake 2",
		brand: "PS5",
		category: "gaming",
		image: ["/media/productos/gaming/alan-wake-2/alan-wake-2-front.jpg"],
		color: "Blanco/Negro/Rojo",
		price: 53,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 44,
		name: "Black Myth: Wukong - PS5",
		modelName: "Black Myth Wukong",
		brand: "PS5",
		category: "gaming",
		image: ["/media/productos/gaming/black-myth-wukong/black-myth-wukong-front.jpg"],
		color: "Blanco/Marron/Dorado",
		price: 59,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 45,
		name: "Playstation 5 Portal Remote Player|Reproductor a distancia",
		modelName: "Playstation 5 Portal Remote Player",
		brand: "PS5",
		category: "gaming",
		image: [
			"/media/productos/gaming/playstation-5-portal-remote-player/playstation-5-portal-remote-player-front.jpg",
			"/media/productos/gaming/playstation-5-portal-remote-player/playstation-5-portal-remote-player-top.jpg",
		],
		color: "Blanco/Negro",
		price: 209,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	//  ------AURICULARES-------
	{
		id: 46,
		name: "Corsair VOID RGB ELITE Auriculares Inalámbricos para Juegos - Sonido Envolvente 7.1 - Micrófono Omnidireccional - Almohadillas de Malla de Microfibra - Compatible iCUE - PC, Mac, PS5, PS4 - Blanco",
		modelName: "Corsair VOID RGB Elite",
		brand: "Corsair",
		category: "auriculares",
		image: [
			"/media/productos/auriculares/corsair-void-rgb-elite/corsair-void-rgb-elite-front.jpg",
			"/media/productos/auriculares/corsair-void-rgb-elite/corsair-void-rgb-elite-side.jpg",
		],
		color: "Negro",
		price: 89,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 47,
		name: "HyperX Cloud III wired Auriculares para Juegos con Cable, PC, PS5, Xbox Series X S, Controladores de 53 mm en ángulo, DTS, micrófono nítido de 10 mm, USB-C USB-A, Negro",
		modelName: "HyperX Cloud 3",
		brand: "HyperX",
		category: "auriculares",
		image: [
			"/media/productos/auriculares/hyperx-cloud-2/hyperx-cloud-2-front.jpg",
			"/media/productos/auriculares/hyperx-cloud-2/hyperx-cloud-2-side.jpg",
		],
		color: "Negro/Rojo",
		price: 69,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 48,
		name: "Corsair VIRTUOSO RGB WIRELESS Auriculares Inalámbricos para Juegos Alta Fidelidad - Sonido Envolvente 7.1 - Micrófono Omnidireccional Desmontable - PC, Mac, PS5, PS4, Nintendo Switch, Móvil - Blanco",
		modelName: "Corsair VIRTUOSO RGB",
		brand: "Corsair",
		category: "auriculares",
		image: [
			"/media/productos/auriculares/corsair-virtuoso-rgb/corsair-virutoso-rgb-front.jpg",
			"/media/productos/auriculares/corsair-virtuoso-rgb/corsair-virutoso-rgb-side.jpg",
		],
		color: "Blanco/Celeste",
		price: 202,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 49,
		name: "HyperX Auriculares inalámbricos para juegos Cloud Flight",
		modelName: "HyperX Cloud Flight",
		brand: "HyperX",
		category: "auriculares",
		image: [
			"/media/productos/auriculares/hyperx-cloud-flight/hyperx-cloud-flight-front.jpg",
			"/media/productos/auriculares/hyperx-cloud-flight/hyperx-cloud-flight-side.jpg",
		],
		color: "Negro/Rojo",
		price: 105,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 50,
		name: "Logitech G533 Auriculares Inalámbricos para Gaming, 7.1 Surround DTS Headphone:X, Transductores 40mm Pro-G, Micrófono, 2,4 GHz Inalámbrico, Batería de 15 Horas, PC/Mac",
		modelName: "Logitech G533",
		brand: "Logitech",
		category: "auriculares",
		image: [
			"/media/productos/auriculares/logitech-g533/logitech-g533-front.jpg",
			"/media/productos/auriculares/logitech-g533/logitech-g533-side.jpg",
		],
		color: "Negro",
		price: 99,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 51,
		name: "SteelSeries Arctis 1 Wireless - Auriculares inalámbricos para juegos – USB-C Inalámbrico – PC / PS5 / PS4 / Nintendo Switch / Android – Negro",
		modelName: "SteelSeries Arctis 1",
		brand: "SteelSeries",
		category: "auriculaes",
		image: [
			"/media/productos/auriculares/steelseries-arctis-1/steelseries-arctis-1-front.jpg",
			"/media/productos/auriculares/steelseries-arctis-1/steelseries-arctis-1-side.jpg",
		],
		color: "Negro",
		price: 158,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 52,
		name: "SteelSeries Arctis 3 - Auriculares de Juego Multiplataforma - Para PC, Playstation 5, PS4, Xbox One, Nintendo Switch, RV, Android y iOS - Blanco",
		modelName: "SteelSeries Arctis 3",
		brand: "SteelSeries",
		category: "auriculares",
		image: [
			"/media/productos/auriculares/steelseries-arctis-3/steelseries-arctis-3-front.jpg",
			"/media/productos/auriculares/steelseries-arctis-3/steelseries-arctis-3-side.jpg",
		],
		color: "Blanco/Negro",
		price: 109,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 53,
		name: "SteelSeries Arctis 5 - Auriculares De Juego - Iluminados Por RGB - Dts Headphone:X V2.0 Surround - Para PC, Playstation 5 Y PlayStation 4 - Blanco",
		modelName: "SteelSeries Arctis 5",
		brand: "SteelSeries",
		category: "auriculares",
		image: [
			"/media/productos/auriculares/steelseries-arctis-5/steelseries-arctis-5-front.jpg",
			"/media/productos/auriculares/steelseries-arctis-5/steelseries-arctis-5-side.jpg",
		],
		color: "Blanco/Negro/Dorado",
		price: 127,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
	{
		id: 54,
		name: "Kraken Ultimate - Auriculares USB con sonido envolvente y micrófono ANC (micrófono con supresión activa de ruido, altavoces de 50 mm ajustados a medida, audio espacial THX) Negro",
		modelName: "Razer Kraken Ultimate",
		brand: "Razer",
		category: "auriculares",
		image: [
			"/media/productos/auriculares/razer-kraken-ultimate/razer-kraken-ultimate-front.jpg",
			"/media/productos/auriculares/razer-kraken-ultimate/razer-kraken-ultimate-side.jpg",
		],
		color: "Negro/Verde",
		price: 204,
		deliveryDate: "",
		isPrime: false,
		wishlist: false,
		addcart: false,
	},
];
