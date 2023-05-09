import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";

export const ItemDetailContainer = () => {

    // Trabajamos con el estado
    const [item, setItem] = useState([]);

    // Trabajamos con el parametro recibido en la ruta
    const {id} = useParams();

    useEffect(() => {
        getProduct(id).then(prod => setItem(prod));
    }, []);

   return (
     <>
        <ItemDetail item={item}/>
     </>
   )
}