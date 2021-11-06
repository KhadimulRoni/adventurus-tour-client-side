import React from 'react';
import Banner from '../Banner/Banner';
import Tours from '../Tours/Tours';
import map from "../../../images/h1-img-1.png";
import SuggestedTours from '../SuggestedTours/SuggestedTours';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tours></Tours>
           <SuggestedTours></SuggestedTours>
           <div>
                 <h2 className="tours p-3">- Explore The World -</h2>
               <img style={{width:"100%", padding:"25px 0px"}} src={map} alt="" />
            </div> 
            <div className="bg-warning w-75 m-auto p-5 rounded">
                <h2 className="tours p-3 ">- Subscribe Now -</h2>
                <input className="w-50 py-2 rounded" type="email" name="" id="" placeholder="Your Email" />
                <br />
                <button className="btn btn-danger m-2">Subscribe</button>
            </div>
            
        </div>
        
    );
};

export default Home;