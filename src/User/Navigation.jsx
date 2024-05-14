import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carouselpage from './Carouselpage';
import Card from './Card';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <>
    <Navbar expand="lg "  className="bg-body-tertiary">
        {/* <Navbar bg="primary" data-bs-theme="dark"> */}
      <Container>
        <Navbar.Brand href="#home">TICKET FLEX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Movie">Movie</Nav.Link>
            <Nav.Link href="#event">Event</Nav.Link>
            <Nav.Link href="#sports">Sports</Nav.Link>
            <Button href='http://localhost:3000/Login' variant="outline-success">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carouselpage/>
    <Card/>
    </>
  );
}

export default Navigation;