import { ItemCount } from "../ItemCount/ItemCount";
import { useCarritoContext } from "../../context/CartContext";

export const ItemDetail = ({item}) => {
    const { addItem } = useCarritoContext();

    // Agregar al carrito
    const onAdd = (contador) => {
        addItem(item, contador);
    };

   return (
    <>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-9 card p-4">
                    <div className="row text-center">
                        <div className="col-6">
                            <img className="img-fluid" src={item.img} alt={item.nombre} />
                        </div>
                        <div className="col-6">
                            <h2>{item.nombre}</h2>
                            <p>{item.modelo}</p>
                            <h4>${item.precio}.00</h4>
                            <p>Cantidad:</p>
                            <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>{/* .row */}
        </div>
    </>
   )
}