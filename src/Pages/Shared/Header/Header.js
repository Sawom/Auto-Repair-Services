import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase';
import Logo from '../../../images/carLogo.png';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} style={{color:'yellow'}} to='/'> <img height={110} src={Logo} alt="" /> Auto Repair Services </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="home">Services</Nav.Link>
            <Nav.Link as={Link} to="experts" >Experts</Nav.Link>
            <Nav.Link as={Link} to="about" >About Us</Nav.Link>
          </Nav>
          {/* 2 */}
          <Nav>
            {
              user ?
              <Button onClick={ handleSignOut} >Sign Out</Button>
              :
              <Nav.Link as={Link} to="Login" >Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;