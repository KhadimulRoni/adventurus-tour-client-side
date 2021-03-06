import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../../src/logo-light.png"
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand href="#home"><img style={{width:"70%"}} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/home" className="text-light">Home</Nav.Link>
                <Nav.Link as={Link} to="/tours" className="text-light">Tours</Nav.Link>
                {user.email && <Nav.Link as={Link} to="/addTour" className="text-light">AddTour</Nav.Link>}
                {user.email && <Nav.Link as={Link} to="/orders" className="text-light">Orders</Nav.Link>}
                {user.email && <Nav.Link as={Link} to="/manageAllOrders" className="text-light">ManageAllOrders</Nav.Link>}
                <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
                
                {user?.email ?
                    <Button onClick={logOut} className="m-2" variant="light" >Logout</Button> :
                    <Nav.Link as={Link} to="/login" className="text-warning">Login</Nav.Link>
                }

                <Navbar.Text>
                    Signed in as: <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;