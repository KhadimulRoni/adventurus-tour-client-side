import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css';

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    // console.log(data);

    axios.post('http://localhost:5000/tours', data)
    .then( res => {
        if(res.data.insertedId){
          alert('Tour added successfully');
          reset();
        }
    })
  }
      
        
    return (
        <div className="add-tour">
            <h2 className="tours p-3">- Add Your Favorite Tour -</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required/>
            <textarea {...register("description")} placeholder="Description" required/>
            <input type="number" {...register("price")} placeholder="Price" required/>
            <input {...register("img")} placeholder="Image url" required/>
            <input className="btn-warning py-1 submit" type="submit" />
            </form>
        </div>
    );
};

export default AddTour;