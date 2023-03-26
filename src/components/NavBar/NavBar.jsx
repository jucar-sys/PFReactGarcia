// Imports Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Imports Componentes
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
   return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">Corium.Mx</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Tienda</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Carteras</NavDropdown.Item>
                <NavDropdown.Item href="#">Monederos</NavDropdown.Item>
                <NavDropdown.Item href="#">Tarjeteros</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                    Tirantes
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget cantCarrito={2} />
    </Container>
  </Navbar>
   )
}