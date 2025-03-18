// ARRAY DE PRODUCTOS (OBJETOS)
const products = [
	// PORTATILES
	{
		id: 1,
		name: "HP EliteBook 840 G3 INTEL CORE i5-6200U 6ªGEN 2.3 GHz WEBCAM 16GB RAM 256GB SSD Window 10 Po 64 bit. (Reacondicionado)",
		brand: "hp",
		category: "laptops",
		price: 202,
	},
	{
		id: 2,
		name: "Acer Aspire 3 A315-59-595G, Ordenador Portátil 15,6” (Intel Core i5-1235U, 16 GB RAM, 1 TB SSD, Iris Xe Graphics, Windows 11 Home) Color Plata, Teclado QWERTY Español",
		brand: "acer",
		category: "laptops",
		price: 499,
	},
	{
		id: 3,
		name: 'HP 15-fd0186ns - Ordenador portátil de 15.6" FHD (Intel N100, 4GB RAM, 128GB UFS, Intel UHD, Windows 11) Plata - Teclado QWERTY Español',
		brand: "hp",
		category: "laptops",
		price: 299,
	},
	{
		id: 4,
		name: 'TECHBITE Portátil ZIN 3 14.1 HD 128 GB, Intel Celeron N4020, 4 GB de RAM LPDDR / 128 GB de Memoria, Windows 10 Pro, 5000 mAh, Pantalla 14.1", Wi-Fi, Bluetooth, portátil Oficina, Teclado ES, Negro',
		brand: "techbite",
		category: "laptops",
		price: 136,
	},
	{
		id: 5,
		name: 'Lenovo IdeaPad 1 Gen 7 - Ordenador Portátil 15.6" FHD (AMD Ryzen 7 5700U, 16GB RAM, 512GB SSD, AMD Radeon Graphics, Wi-Fi 6, Sin Sistema Operativo), Teclado QWERTY Español, Color Gris Nube',
		brand: "lenovo",
		category: "laptops",
		price: 599,
	},
	{
		id: 6,
		name: "Acer Aspire 1 A115-32-C4Y0 - Ordenador Portátil 15,6” HD LCD (Intel Celeron N4500, 4GB RAM, 128 GB eMMc, Intel UHD Graphics, Windows 11 Home en Modo S), Color Plata, Teclado QWERTY Español",
		brand: "acer",
		category: "laptops",
		price: 249,
	},
	{
		id: 7,
		name: 'ASUS Vivobook 15 F1504ZA-NJ691W - Ordenador Portátil 15.6" Full HD (Intel Core i5-1235U, 16GB RAM, 512GB SSD, Iris Xe Graphics, Windows 11 Home) Plata Fría - Teclado QWERTY español',
		brand: "asus",
		category: "laptops",
		price: 549,
	},
	{
		id: 8,
		name: "Ordenador Portátil 15,6 Pulgadas Celeron N5095 2,9 GHz Win11 Pro 8GB 256GB SSD Expansión 1TB DDR4 5G WiFi 1920x1080 FHD HDMl USB 3.0 Portatil con Ratón Inalámbrico y Teclado Español Membrana - Plata",
		brand: "",
		category: "laptops",
		price: 279,
	},
	{
		id: 9,
		name: 'AOC Ordenador Portatil con I-ntel N97 (hasta 3,6 GHz), Portátil Computadora 16GB DDR4 512GB SSD Expansión 2TB （Mejor que Celeron） Laptop,WiFi,BT5,Tipo C,USB3.2, HDMI, 15,6" Notebook 1080P Versión 2025',
		brand: "aoc",
		category: "laptops",
		price: 359,
	},
	// TABLETS
	{
		id: 10,
		name: "Xiaomi Redmi Pad SE Tablet 11 Pulgadas 8GB+256GB Resolution 1200 x 2000, 90hz Display, Battery 8000mAh, 10W Fast Charging WiFi Grey",
		brand: "xiaomi",
		category: "tablets",
		price: 167,
	},
	{
		id: 11,
		name: "FECLYDET Tablet 10 Pulgadas, Android 14 Octa-Core con 10GB RAM+128GB ROM(1TB TF), Widevine L1,Bluetooth 5.0, Cámara Dual, 5000mAh, WiFi6（Negro）",
		brand: "feclydet",
		category: "tablets",
		price: 79,
	},
	{
		id: 12,
		name: "Lenovo Tablet Tab M11, Pantalla táctil de 11 Pulgadas, MediaTek G88, 4 GB de RAM, 128 GB eMMC 5.1, Android 13, Gris, Incluye Pen",
		brand: "lenovo",
		category: "tablets",
		price: 169,
	},
	{
		id: 13,
		name: "Xiaomi Redmi Pad SE 4Go/128Go Wi-FI Gris (Graphite Gray)",
		brand: "xiaomi",
		category: "tablets",
		price: 132,
	},
	{
		id: 14,
		name: 'Xiaomi Redmi Pad SE 8,7" – Tablet de 8,7” LCD (MediaTek Helio G85, 4GB de RAM, 64GB de ROM, WiFi + Bluetooth 5.3, batería de 6650 mAh, Cargador no Incluido), Azul (Versión ES)',
		brand: "xiaomi",
		category: "laptops",
		price: 94,
	},
	{
		id: 15,
		name: "Apple iPad de 11 Pulgadas: Chip A16, Modelo de 11 Pulgadas, Pantalla Liquid Retina, 128 GB, Wi Fi 6, cámaras Frontal y Trasera de 12 Mpx, Touch ID, autonomía para un día Entero – Plata",
		brand: "apple",
		category: "laptops",
		price: 399,
	},
	{
		id: 16,
		name: "HONOR Pad X8A 4GB 128GB, Ampliable hasta 1TB, WiFi Tablet, Pantalla de 11 Pulgadas 90Hz, Snapdragon 680, 4 Altavoces, Batería 8300mAh, Cuerpo Metálico, Android 14, Google Service, Gris",
		brand: "honor",
		category: "laptops",
		price: 169,
	},
	{
		id: 17,
        name: 'Samsung Galaxy Tab A9+ Tablet Android, 128 GB Almacenamiento, WiFi, Pantalla 11”, Sonido 3D, Gris (Versión Española)',
        brand: "samsung",
        category: "laptops",
        price: 199
	},
    {
        id: 18,
        name: 'DOOGEE U11 Android 15 Tablet 11 Pulgadas, Tablet Octa-Core, 16GB RAM+128GB ROM/1TB TF, HD IPS Pantalla/90Hz, 8580mAh Batería,WiFi 2.4/5GHz / Widevine L1 /5MP+13MP / Facial ID/GMS/BT5.0/3.5mm Jack',
        brand: "doogee",
        category: "laptops",
        price: 129,
    },
    // MONITORES
    {
        id: 19,
        name: 
    }
];
