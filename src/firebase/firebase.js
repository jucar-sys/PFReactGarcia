// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrM0kPqsDwSC-8bD2bqcIw7R6q4RTDqcA",
  authDomain: "tiendacoriumreact.firebaseapp.com",
  projectId: "tiendacoriumreact",
  storageBucket: "tiendacoriumreact.appspot.com",
  messagingSenderId: "28940659155",
  appId: "1:28940659155:web:f2eb4ea0b0d9b79bf02726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Cosultar BD
const bdd = getFirestore();

/*
 - - - CRUD - - -
    CREATE --> post
    READ -->  get
    UDATE --> put
    DELETE --> delete
*/

// Funciones para trabajar con firebase
// CRUD PRODUCTOS
export const createProducts = async () => {
    const promise = await fetch('./json/productos.json');
    const productos = await promise.json();

    productos.forEach( async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        });
    });
};

// Obtener productos
export const getProducts = async() => {
    const prods = await getDocs(collection(bdd, 'productos'));
    const items = prods.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    });
    return items;
};

// Obtener un solo producto
export const getProduct = async(id) => {
    const prod = await getDoc(doc(bdd, 'productos', id));
    const item = {...prod.data(), id: prod.id}
    return item;
};

// Actualizar un producto
export const updateProduct = async(id, info) => {
    await updateDoc(doc(bdd, 'productos', id), info);
};

// Eliminar un producto
export const deleteProduct = async(id) => {
    await deleteDoc(doc(bdd, "productos", id));
};


// CREATE Y READ Orden de compra
// Crear orden de compra
export const createOrdenCompra = async(cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    });
    return ordenCompra;
};

// Obtener orden de compra
export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id));
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item;
};

// Eliminar una orden de compra
export const deleteOrdenCompra = async(id) => {
    await deleteDoc(doc(bdd, "ordenCompra", id));
};