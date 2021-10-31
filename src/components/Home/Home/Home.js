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
               <img style={{width:"100%", padding:"25px 0px"}} src={map} alt="" />
            </div> 
            
        </div>
        
    );
};

export default Home;