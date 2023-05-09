import { Link } from "react-router-dom";
// Contextos
import { useCarritoContext } from "../../context/CartContext";
// Componentes
import { ItemList } from "../ItemList/ItemList";

export const Cart = () => {
    const {carrito, totalPrice, emptyCart} = useCarritoContext();
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <div className="container text-center py-5">
                            <h2 className="display-4 mb-5">Carrito Vacio</h2>
                            <button className="btn btn-dark"><Link to={"/"} className="nav-link">Continuar comprando</Link></button>
                        </div>
                    </>
                :
                    <>
                        <div className="container py-4 mb-4">
                            {<ItemList productos={carrito} plantilla={"ItemCart"} />}
                            <div className="text-center">
                                <h2 className="titleDarkMode">Total de la compra: ${totalPrice()}.00</h2>
                                <hr />
                                <Link className="nav-link my-2" to={"/checkout"}><button className="btn btn-success">Finalizar compra</button></Link>
                                <Link className="nav-link my-2" to={"/"}><button className="btn btn-light">Continuar comprando</button></Link>
                                <button className="btn btn-danger my-2" onClick={() => emptyCart()}>Vaciar carrito</button>
                            </div>
                        </div>
                    </>
            }
        </>
   )
}