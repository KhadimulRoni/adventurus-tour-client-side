import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import logo from "../../../../src/logo-light.png";
import "./Footer.css"
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const {user, logOut} = useAuth();
    return (
        
            <div className="footer m-0 ">

                <div className="py-3 mt-5">
                    <div className="row m-0">
                        <div className="col-md-4 text-white p-3">
                            <img src={logo} alt="" />
                            <p className="py-3 px-5">Go trekking, camping, river rafting, hiking, scuba divining, snorkeling, surfing, paragliding, bungee jumping, adventure escapades of bike tours, jeep safari tours, elephant safari and other thrilling activities. </p>
                        </div>

                        <div className="col-md-4 links text-warning p-3 py-5">

                            <Nav.Link as={Link} to="/home" className="text-light">Home</Nav.Link>
                            <Nav.Link as={Link} to="/tours" className="text-light">Tours</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
                            
                            {user?.email ?
                                <Button onClick={logOut} className="m-2" variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>
                            }

                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>

                        </div>

                        <div className="col-md-4 text-white p-3">
                            <h2>Contacts</h2>
                            <h5>Call Now</h5>
                            <h6>0 (800) 716 95 25</h6>
                            <h5>Send Mail</h5>
                            <h6>wanderersTours@email.com</h6>
                            <h5>Visit MedLife</h5>
                            <h6 className="text-warning">8500, E Street, Alabama, NY, 75030</h6>

                         </div>
                    </div>    
                </div>

            </div>
    );
};

export default Footer;