import React from "react";
import footerlogo from "../../assets/images/footer-logo.png";
import {Form} from 'react-bootstrap'
import {Navbar,Offcanvas,Nav,NavDropdown,FormControl,Container,Button} from 'react-bootstrap'

function Footer() {
    return (
      <>
     <footer>
         <div className="bg-black footer">
             <div className="container">
                 <div className="row text-center">
                     <div className="col-12">
                     <img src={footerlogo} alt='Vodiac Coin' className="mx-auto" width={198} height={29}/>
                     </div>
                     <div className="col-12">
                         <div className="d-flex alignitems-center justify-content-center email">
                         <>
                        <Form.Control
                            type="email"
                            id="inputemail"
                            aria-describedby="emailHelpBlock"
                        />
                        <button className="btn-secondary">JOIN MAILING LIST</button>
                    </>
                    </div>
                     </div>
                     <div className="col-12">
                     <Navbar key="lg" expand="lg" className="navbar">
        <Container fluid>
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
                <Nav className="justify-content-center align-items-center flex-grow-1 pe-3">
                <Nav.Link className="text-white" href="#action1">HOME</Nav.Link>
                <Nav.Link className="text-white" href="#action2">DASHBOARD</Nav.Link>
                <Nav.Link className="text-white" href="#action2">ACCOUNT</Nav.Link>
                <Nav.Link className="text-white" href="#action2">BUY</Nav.Link>
                <Nav.Link className="text-white" href="#action2">STAKE</Nav.Link>
                <Nav.Link className="text-white" href="#action2">LEARN</Nav.Link>
                <Nav.Link className="text-white" href="#action2">VOTE</Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
            </Navbar>
                     </div>
                     <div className="col-12">
                         <div className="social-icon">

                         </div>
                     </div>
                     <div className="col-12 footer-copyright">
                         <p>©2022 All rights reserved. Company and registration information to go here. Arek to supply.</p>
                     </div>
                 </div>
             </div>

         </div>
     </footer>
      </>
    );
  }
  
  export default Footer;