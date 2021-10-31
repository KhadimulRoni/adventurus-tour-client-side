import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Tour.css"

const Tour = (props) => {
    const {tour} = props;
    const {_id,name,description,img,discount,price} = tour ;
    return (
        <div>
            
            <div className="d-flex tour p-3">
                <Card style={{ width: '25rem' }}>
                    <Card.Img style={{width:"100%", height:"250px"}} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="tour-title p-2">{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <div className="price-container d-flex p-2">
                            <h5 className="text-primary offer"> <span className="discount">{discount}</span> Off</h5>
                            <h5 className="text-info">Price: <span className="price text-danger">{price}</span></h5>
                        </div>
                        <Link to ={`/booking/${_id}`}>
                            <Button variant="warning" className="px-5 my-3">Book Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    );
};

export default Tour;