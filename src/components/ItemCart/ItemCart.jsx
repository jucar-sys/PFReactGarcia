import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCarritoContext } from "../../context/CartContext";

export const ItemCart = ({item}) => {
    const { removeItem } = useCarritoContext();
    const trash = <FontAwesomeIcon icon={faTrashCan} />

   return (
     <div className="container py-4">
        <div className="row justify-content-center">
            <div className="col-md-9 card p-4">
                <div className="row">
                    <div className="col-6">
                        <img src={item.img} className="img-fluid" alt={item.nombre} />
                    </div>
                    <div className="col-6 py-3">
                        <h3>{item.nombre}</h3>
                        <p>{item.modelo}</p>
                        <h5>Precio Unitario: ${item.precio}.00</h5>
                        <h6>Cantidad: {item.quantity}</h6>
                        <h5>Subtotal: ${item.precio * item.quantity}.00</h5>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>{trash}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}