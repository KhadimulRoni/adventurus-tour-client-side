import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../images/404.jpg"

const NotFound = () => {
    return (
        <div style={{backgroundColor:"white"}}>
            <img style={{width:"35%"}} src={image} alt="" />
            <br />
            <Link to="/home"><button className="btn btn-danger mb-5">Back To Home</button></Link>
        </div>
    );
};

export default NotFound;