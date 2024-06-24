import React from 'react';
import './IntroSection.css';
import img from '../Assets/logo.png';
import Slideshow from '../Utility/SlideShow';

function IntroSection() {
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
        <div className='Top-Section-Video'>
          <Slideshow />
        </div>
      </div>
    </div>
  );
}

export default IntroSection;