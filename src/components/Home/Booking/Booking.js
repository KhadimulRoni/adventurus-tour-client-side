import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
   const { user } = useAuth();
   const { id } = useParams();
   const [specialTour, setSpecialTour] = useState({});

   const { register, handleSubmit, reset } = useForm();
   //    const email = sessionStorage.getItem('email');
   const onSubmit = data => {
      data.email = user.email;

      axios.post('http://localhost:5000/orders', data).then(res => {
         if (res.data.insertedId) {
            alert('Order proceeded successfully');
            reset();
         }
      });
   };

   useEffect(() => {
      fetch(`https://grim-witch-66597.herokuapp.com/specialTours/${id}`)
         .then(res => res.json())
         .then(data => setSpecialTour(data));
   }, []);

   return (
      <div className="p-5 row m-0">
         <div className="col-lg-8 col-sm-12">
            <img style={{ width: '70%' }} src={specialTour?.img} alt="" />
            <h2 className="p-3 tour-title">{specialTour?.name}</h2>
            <h6 className="p-2">{specialTour?.description}</h6>
            <h2>
               Discount:{' '}
               <span className="discount">{specialTour?.discount}</span>{' '}
            </h2>
            <h3>
               OFFER PRICE :{' '}
               <span className="discount">{specialTour?.price}</span>
            </h3>
         </div>
         <div className="col-lg-4 col-sm-12 add-tour">
            <h2 className="tours p-3">- Booking Info -</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input
                  {...register('name')}
                  defaultValue={specialTour?.name}
                  required
               />
               <input
                  {...register('price')}
                  defaultValue={specialTour?.price}
                  required
               />

               <input {...register('comments')} placeholder="Comments" />
               <input
                  type="number"
                  {...register('number')}
                  placeholder="Number"
                  required
               />
               <input
                  type="img"
                  {...register('image')}
                  defaultValue={specialTour?.img}
                  required
               />
               <input type="date" {...register('date')} required />
               <button className="submit btn-warning px-5 py-1 my-3">
                  Place Order
               </button>
            </form>
         </div>
      </div>
   );
};

export default Booking;
