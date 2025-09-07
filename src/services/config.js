// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hecteon.firebaseapp.com",
  projectId: "hecteon",
  storageBucket: "hecteon.firebasestorage.app",
  messagingSenderId: "534547073703",
  appId: "1:534547073703:web:51ddc211ccc355c3ca6982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


// Subirlo automaticamente
const misProductos = [
    {id: "1", nombre: "Abierto.", precio: 40000, img: "/imgs/cartel-neon.png", idCat: "Carteles", desc: "Cartel de neón con el texto 'ABIERTO' en un diseño atractivo y luminoso.", stock: 10},
    {id: "2", nombre: "Let's Party.", precio: 60000, img: "/imgs/cartel-neon-2.png", idCat: "Carteles", desc: "Cartel de neón con el texto 'LET'S PARTY' ideal para eventos y celebraciones.", stock: 15},
    {id: "3", nombre: "Jostick.", precio: 80000, img: "/imgs/cartel-neon-3.png", idCat: "Carteles", desc: "Cartel de neón con un diseño de joystick, perfecto para gamers.", stock: 8},
    {id: "4", nombre: "Cafe.", precio: 55000, img: "/imgs/cartel-neon-4.png", idCat: "Carteles", desc: "Cartel de neón con el texto 'CAFE', ideal para cafeterías y amantes del café.", stock: 20},
    {id: "5", nombre: "Mis 15 años.", precio: 180000, img: "/imgs/cartel-neon-5.png", idCat: "Carteles", desc: "Cartel de neón personalizado para celebrar los 15 años, con un diseño elegante y festivo.", stock: 5},
    {id: "6", nombre: "Mickey.", precio: 45000, img: "/imgs/cuadro-resina.png", idCat: "Cuadros", desc: "Cuadro de resina con un diseño de Mickey Mouse, ideal para los fanáticos de Disney.", stock: 12},
    {id: "7", nombre: "Tom & Jerry.", precio: 60000, img: "/imgs/cuadro-resina-2.png", idCat: "Cuadros", desc: "Cuadro de resina con un diseño clásico de Tom & Jerry, perfecto para los amantes de los dibujos animados.", stock: 7},
    {id: "8", nombre: "León.", precio: 77000, img: "/imgs/cuadro-resina-3.png", idCat: "Cuadros", desc: "Cuadro de resina con un majestuoso diseño de león, ideal para decorar espacios modernos.", stock: 9},
    {id: "9", nombre: "Messi.", precio: 120000, img: "/imgs/cuadro-resina-4.png", idCat: "Cuadros", desc: "Cuadro de resina con un homenaje a Messi, perfecto para los fanáticos del fútbol.", stock: 4},
    {id: "10", nombre: "Rick & Morty.", precio: 72000, img: "/imgs/cuadro-resina-5.png", idCat: "Cuadros", desc: "Cuadro de resina con un diseño de Rick & Morty, ideal para los seguidores de la serie.", stock: 6},
    {id: "11", nombre: "Llavero de letras.", precio: 5000, img: "/imgs/letras-resina.avif", idCat: "Artesanias", desc: "Llavero personalizado con letras de resina, ideal para regalar o uso personal.", stock: 50},
    {id: "12", nombre: "Reloj de resina", precio: 8000, img: "/imgs/reloj-resina.jpg", idCat: "Artesanias", desc: "Reloj de pared hecho de resina, con un diseño moderno y elegante.", stock: 30},
    {id: "13", nombre: "Porta velas de resina", precio: 7200, img: "/imgs/portavela-resina.webp", idCat: "Artesanias", desc: "Porta velas decorativo de resina, ideal para ambientar cualquier espacio.", stock: 25},
    {id: "14", nombre: "Mesa ratona de resina", precio: 50000, img: "/imgs/mesita.webp", idCat: "Muebles", desc: "Mesa ratona de resina con un diseño único y moderno, perfecta para cualquier sala de estar.", stock: 10},
    {id: "15", nombre: "Banquetas", precio: 27000, img: "/imgs/banquetas.webp", idCat: "Muebles", desc: "Juego de banquetas de resina, ideales para complementar tu decoración y ofrecer asientos adicionales.", stock: 18},
    {id: "16", nombre: "Mesa", precio: 150000, img: "/imgs/mesa.webp", idCat: "Muebles", desc: "Mesa de comedor de resina, con un diseño elegante y resistente, perfecta para cualquier hogar.", stock: 5},
    ]

    import { collection, doc, writeBatch } from "firebase/firestore";

    const subirProductos = async () => {
      const batch = writeBatch(db); //Crear un batch
      const productosRef = collection(db, "productos"); //Referencia a la coleccion

      //Recorrer el array de productos
      misProductos.forEach((producto) => {
        const nuevoDoc = doc(productosRef, producto.id); //Crear un nuevo documento con ID automatico
        batch.set(nuevoDoc, producto); //Agregar la operacion al batch
      });

      //Ejecutar el batch
      try {
        await batch.commit();
        console.log("Productos subidos correctamente");
      } catch (error) {
        console.error("Error al subir los productos: ", error);
      }
    };

    // Llamar a la funcion para subir los productos
    //subirProductos();