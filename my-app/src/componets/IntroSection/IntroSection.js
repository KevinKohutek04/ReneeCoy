import React from "react";
import './IntroSection.css';
import img from '../Assets/logo.png';

function IntroSection () {
    return (
        <div className="IntroMain">
                <div className="Top-Section">
                    <div className="Top-Section-Nav">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <img className="Top-Section-Photo" src={img} alt="Logo" />
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                     </div>
                </div>
        </div>
    );
}

export default IntroSection;