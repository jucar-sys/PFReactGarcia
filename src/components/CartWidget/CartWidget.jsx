import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = ({cantCarrito}) => {
    const carrito = <FontAwesomeIcon icon={faShoppingCart} />;
   return (
     <div className='carritoNavbar'>
          <p>{carrito} <span>{cantCarrito}</span></p>
     </div>
   )
}