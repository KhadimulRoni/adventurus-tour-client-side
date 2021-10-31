import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {id} = useParams();
    const [specialTour, setSpecialTour] = useState({});


    useEffect( () => {
        fetch(`http://localhost:5000/specialTours/${id}`)
        .then( res => res.json())
        .then( data => setSpecialTour(data));
    },[])

    return (
        <div className="pt-3 row m-0">
            <div className="col-lg-6 col-sm-12">
                <img src={specialTour?.img} alt="" />
                <h2 className="p-3 tour-title">{specialTour?.name}</h2>
                <h6 className="p-2">{specialTour?.description}</h6>
                <h2>Discount: <span className="discount">{specialTour?.discount}</span> </h2>
                <h3>OFFER PRICE : <span className="discount">{specialTour?.price}</span></h3>

            </div>
        </div>
    );
};

export default Booking;