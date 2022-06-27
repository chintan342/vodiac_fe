import React from "react";
import {Navbar,Offcanvas,Nav,NavDropdown,Form,FormControl,Container,Button} from 'react-bootstrap'
import logo from "../../assets/images/logo.png";

function Header() {
    return (
      <>
      <header>
        <div className='container'>
            <Navbar key="lg" expand="lg" className="navbar">
        <Container fluid>
            <Navbar.Brand href="#"><h1 className="m-0"><img src={logo} alt='Vodiac Coin' /></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                <Nav.Link className="text-white" href="#action1">HOME</Nav.Link>
                <Nav.Link className="text-white" href="#action2">DASHBOARD</Nav.Link>
                <Nav.Link className="text-white" href="#action2">ACCOUNT</Nav.Link>
                <Nav.Link className="text-white" href="#action2">BUY</Nav.Link>
                <Nav.Link className="text-white" href="#action2">STAKE</Nav.Link>
                <Nav.Link className="text-white" href="#action2">LEARN</Nav.Link>
                <Nav.Link className="text-white" href="#action2">VOTE</Nav.Link>
                </Nav>
                <Button variant="outline-light rounded-pill">CONNECT</Button>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
            </Navbar>
            </div>
      </header>
      </>
    );
  }
  
  export default Header;