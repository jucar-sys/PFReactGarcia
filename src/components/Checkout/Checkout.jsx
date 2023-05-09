import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// Contextos
import { useCarritoContext } from "../../context/CartContext";
import { createOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase";

// React Toastify
import { toast } from "react-toastify";

export const Checkout = () => {

    // Crear una referencia para consultar los datos del formulario
    const dataForm = useRef();
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    // Devuelve la localización actual
    let navigate = useNavigate();

    // Funcion para consultar datos del formulario
    const consultarForm = (e) => {
        e.preventDefault();
        const datosFormulario = new FormData(dataForm.current); // Convierte los datos de formulario en un objeto iterable

        // Valida email repetido
        if(datosFormulario.get('email') !== datosFormulario.get('emailRepetido')) {
            toast.warning(`Los correos son distintos`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else {
            const cliente = Object.fromEntries(datosFormulario); // Covierte de un objeto iterable a un objeto simple

            const aux = [...carrito];
            // Recorrer carrito y actualizar stock
            aux.forEach(prodCarrito => {
                getProduct(prodCarrito.id).then(prodBBD => {
                    if(prodBBD.stock >= prodCarrito.quantity){
                        prodBBD.stock -= prodCarrito.quantity;
                        updateProduct(prodBBD.id, prodBBD)
                    } else {
                        console.log("Stock insucficiente");
                    }
                });
            });

            // Creamos array de objetos con los datos importantes para la compra
            const aux2 = aux.map(prod => ({id: prod.id, quatity: prod.quantity, precio: prod.precio}));
            // Consultamos la fecha y le damos formato
            const fecha = new Date().toLocaleString('es-MX', {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone});

            // Creamos la orden de compra
            createOrdenCompra(cliente, totalPrice(), aux2, fecha)
            .then(ordenCompra => {
                toast.success(`Gracias por tu compra. Tú numero de compra es ${ordenCompra.id}, por un total de $${totalPrice()}.00. Pronto te contactaremos para el envío`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                // Vaciar carrito
                emptyCart();
                // Resetaear formulario
                e.target.reset();
                // Eliminamos orden de compra
                // deleteOrdenCompra(ordenCompra.id);
                // Regreso al inicio
                navigate("/");
            }).catch(err => {
                console.error(err);
            });
        }
    }

   return (
    <>
        {
            carrito.length === 0 ?
                <>
                    <div className="container py-5 text-center">
                        <h2>Debes de tener productos en tu carrito para finalizar la compra</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                    </div>
                </>
            :
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="titleDarkMode">Llena el formualrio para finalizar la compra</h2>
                        <div className="container divForm">
                            <form onSubmit={consultarForm} ref={dataForm}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label titleDarkMode">Nombre y Apellido</label>
                                    <input type="text" className="form-control" name="nombre" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label titleDarkMode">Email</label>
                                    <input type="email" className="form-control" name="email" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailRepetido" className="form-label titleDarkMode">Repetir email</label>
                                    <input type="email" className="form-control" name="emailRepetido" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dni" className="form-label titleDarkMode">DNI</label>
                                    <input type="number" className="form-control" name="dni" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="celular" className="form-label titleDarkMode">Teléfono</label>
                                    <input type="number" className="form-control" name="celular" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccion" className="form-label titleDarkMode">Dirección</label>
                                    <input type="text" className="form-control" name="direccion" required/>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
   )
}