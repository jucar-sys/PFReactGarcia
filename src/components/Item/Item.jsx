import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// Recibe un objeto y lo devuelve en forma de componente (plantilla)
export const Item = ({item}) => {
   return (
    <div className='mt-4 col-md-3'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} alt={`Imagen de ${item.nombre}`} />
            <Card.Body className='text-center'>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text className='text-muted txtModelo'>
                {item.modelo}
                </Card.Text>
                <Card.Text className='txtDatosProd'>
                Marca: <span>{item.marca}</span>
                </Card.Text>
                <Card.Text className='txtDatosProd'>
                Precio: <span>${item.precio}</span>
                </Card.Text>
                <Card.Text className='txtDatosProd'>
                Stock: <span>{item.stock}</span>
                </Card.Text>
                <Link className='nav-link' to={`/product/${item.id}`}><Button variant="dark">Ver producto</Button></Link>
            </Card.Body>
        </Card>
     </div>
   )
}