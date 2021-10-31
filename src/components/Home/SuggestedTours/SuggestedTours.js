import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const SuggestedTours = () => {
    const [suggestedTours, setSuggestedTours] = useState([]);
    // const {name,description,price,img} = suggestedTours

    useEffect( () => {
        fetch('http://localhost:5000/tours')
        .then( res => res.json())
        .then( data => setSuggestedTours(data))
    },[])
    return (
        <div>
            <h1 className="tours py-5">- SUGGESTED TOURS -</h1>
            <div className="row m-0 p-3">
            {
                suggestedTours?.map(suggestedTour => <div 
                key={suggestedTour._id}
                className="col-lg-4 col-sm-12">

                <div className="d-flex tour p-3">
                    <Card style={{ width: '25rem' }}>
                        <Card.Img style={{width:"100%", height:"250px"}} variant="top" src={suggestedTour?.img} />
                        <Card.Body>
                            <Card.Title className="tour-title p-2">{suggestedTour?.name}</Card.Title>
                            <Card.Text>
                                {suggestedTour?.description}
                            </Card.Text>
                            <div className="p-2">
                                <h5 className="text-info">Price: <span className="price text-danger">{suggestedTour?.price}</span></h5>
                            </div>
                        
                        </Card.Body>
                    </Card>
                </div>

                </div>)
            }
            </div>


        </div>
    );
};

export default SuggestedTours;