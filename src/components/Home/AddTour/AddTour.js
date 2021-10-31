import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css';

const AddTour = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:5000/tours', data)
    .then( res => {
        console.log(res);
    })
  }
      
        
    return (
        <div className="add-tour">
            <h2>Add Your Favorite Tour</h2>
            <form onSubmit={handleSubmit(onSubmit)} placeholder="Name">
            <input {...register("name", { required: true, maxLength: 20 })} />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("img")} placeholder="Image url" />
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddTour;