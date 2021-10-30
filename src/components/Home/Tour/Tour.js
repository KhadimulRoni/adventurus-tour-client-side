import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Tour = () => {
    return (
        <div>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text
                    </Card.Text>
                    <Button variant="warning">Book Now</Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Tour;