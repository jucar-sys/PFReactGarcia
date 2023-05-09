import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCarritoContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const {getItemQuantity} = useCarritoContext();

  const carrito = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
     <div className='carritoNavbar'>
      <Link to="/cart" className='nav-link'>
          <p>{carrito}
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
          </p>
      </Link>
     </div>
   )
}