import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { getProducts } from '../../firebase/firebase';

// Consulta a mis productos de la base de datos y se envían a ItemList

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { category } = useParams();
    const {darkMode} = useDarkModeContext();
    console.log(darkMode);

    useEffect(() => {
        if (category){
            getProducts()
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category);
                setProductos(productosFiltrados);
            });
        } else {
            getProducts()
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0);
                setProductos(productosFiltrados);
            });
        }

    }, [category]);

   return (
    <>
        <div className='container py-4'>
            <Row>
                {<ItemList productos={productos} plantilla={"Item"} />}
            </Row>
        </div>
    </>
   )
}