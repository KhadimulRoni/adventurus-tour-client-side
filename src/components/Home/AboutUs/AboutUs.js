import React from 'react';
import logo from "../../../../src/logo-light.png";
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="text-white p-3 about">
            <h2 className="tours p-3 text-warning">- About Us -</h2>
                 <img className="p-3" src={logo} alt="" />
                    <p className="py-3 px-5">Go trekking, camping, river rafting, hiking, scubdivining, snorkeling, surfing, paragliding, bungee jumping, adventure escapades obike tours, jeep safari tours, elephant safari and other thrilling activities.Waking up in the morning -- you are here, you are alive, you have this day.The face of someone you love -- there is nothing better.Having something to do -- having purpose every day makes life meaningful.Nature -- sunshine, moonshine, flowers, a gentle breeze, trees, animals. </p>
        </div>
    );
};

export default AboutUs;