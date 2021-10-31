import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './Tours.css'

const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect( ()=>{
        fetch('https://grim-witch-66597.herokuapp.com/specialTours')
        .then(res => res.json())
        .then( data => setTours(data))
    },[])
    return (
        <div>
            <h1 className="tours py-5">- SPECIAL OFFERINGS -</h1>
            <div className="row m-0">
            {
                tours?.map( tour => <div 
                    key={tour._id}
                className="col-lg-4 col-sm-12">
                        <Tour
                    tour = {tour}
                    ></Tour>
                </div>)
            }
            </div>
            
        </div>
    );
};

export default Tours;