import { useState, createContext, useContext } from "react";

// Creo mi contexto
const CarritoContext = createContext();
export const useCarritoContext = () => useContext(CarritoContext);

// Forma de proveer el contexto de mi app
export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    // Agregar producto - Quitar carrito - Vaciar carrito
    // Obtener cantidad - Obtener precio total - Buscar producto

    // Funcion para Ver si el producto exste en el carrito
    const isInCart = (id) => {
        // Some => Booleano - Find => Obj
        return carrito.some(prod => prod.id === id);
    };

    // Función para agregar productos
    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            // Busco y seteo la cantidad del producto
            const indice = carrito.findIndex(prod => prod.id === item.id);
            const aux = [...carrito];
            aux[indice].quantity = quantity;
            setCarrito(aux);
        }else{
            // Crear un nuevo objeto con los datos ingresados
            const newItem = {
                ...item,
                quantity: quantity
            }

            // Agregar al carrito
            setCarrito([...carrito, newItem]); // Genera una copia de lo elementos del carrito mas el nuevo item
        }
    };

    // Funcion para quitar un producto del carrito
    const removeItem = (id) => {
        // const aux = [...carrito];
        // const indice = aux.findIndex(prod => prod.id === id);
        // setCarrito(aux.splice(indice,1));

        // Traer todos los productos que no tengan el di ingresado
        setCarrito(carrito.filter(prod => prod.id !== id))
    };

    // Vaciar carrito
    const emptyCart = () => {
        setCarrito([]);
    };

    // Función para obtener la cantidad de productos de mi carrito
    const getItemQuantity = () => {
        return carrito.reduce((acc, item) => acc += item.quantity, 0);
    };

    // Función para obtener el total de mi carrito
    const totalPrice = () => {
        return carrito.reduce((acc, item) => acc += (item.quantity * item.precio), 0)
    };

    // Agrego las funciones que van a ser exportados
    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
        {props.children}
    </CarritoContext.Provider>
    )
};