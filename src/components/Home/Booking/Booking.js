import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {id} = useParams();
    const [specialTour, setSpecialTour] = useState({});

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
      }

    useEffect( () => {
        fetch(`http://localhost:5000/specialTours/${id}`)
        .then( res => res.json())
        .then( data => setSpecialTour(data));
    },[])

    return (
        <div className="p-5 row m-0">

            <div className="col-lg-8 col-sm-12">
                    <img style={{width:"70%"}} src={specialTour?.img} alt="" />
                    <h2 className="p-3 tour-title">{specialTour?.name}</h2>
                    <h6 className="p-2">{specialTour?.description}</h6>
                    <h2>Discount: <span className="discount">{specialTour?.discount}</span> </h2>
                    <h3>OFFER PRICE : <span className="discount">{specialTour?.price}</span></h3>
            </div>
            <div className="col-lg-4 col-sm-12 add-tour">
                <h2 className="tours p-3">- Booking Info -</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("first name", { required: true, maxLength: 20 })} placeholder="First Name" required/>
                    <input {...register("last name", { required: true, maxLength: 20 })} placeholder="Last Name" required/>
                    <input {...register("address", { required: true, maxLength: 20 })} placeholder="Address" required/>
                    <input {...register("zip code", { required: true, maxLength: 20 })} placeholder="Zip Code" required/>
                    <input type="date" {...register("date")}  required/>
                    <button className="submit btn-warning px-5 py-1 my-3">Place Order</button>
                    </form>
                </div>
        </div>
    );
};

export default Booking;