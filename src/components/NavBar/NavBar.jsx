// Imports Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Imports Componentes
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { BotonDarkMode } from '../BotonDarkMode/BotonDarkMode';

export const NavBar = () => {
   return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to={`/`}>Corium.Mx</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className='nav-link' to={'/'}><button className='btnNav'>Home</button></Link>
            <Link className='nav-link' to={'/'}><button className='btnNav'>Tienda</button></Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={`/category/carteras`}>Carteras</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/category/monederos'}>Monederos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/category/tarjeteros'}>Tarjeteros</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/category/carteras-largas'}>Carteras largas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={'/category/5'}>
                    Tirantes
                </NavDropdown.Item>
            </NavDropdown>
            <Link className='nav-link' to={'/'}><button className='btnNav'>Blog</button></Link>
        </Nav>
      </Navbar.Collapse>
      <div className="mx-4">
        <CartWidget cantCarrito={2} />
      </div>
      <div className="mb-3">
        <BotonDarkMode />
      </div>
    </Container>
  </Navbar>
   )
}