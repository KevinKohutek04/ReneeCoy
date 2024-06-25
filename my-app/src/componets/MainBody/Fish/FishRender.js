import React from "react";
import './FishRender.css';

import image1 from '../Fishies/image1.png';
import image2 from '../Fishies/image2.png';
import image3 from '../Fishies/image3.png';
import image4 from '../Fishies/image4.png';
import image5 from '../Fishies/image5.png';
import image6 from '../Fishies/image6.png';

function FishRender() {
  return (
    <div className="MainBody-Fish">
      <div className="FishItem">
        <img src={image1} alt="Fish 1" />
        <img src={image2} alt="Fish 2" />
      </div>

      <div className="FishItem">
        <img src={image3} alt="Fish 3" />
        <img src={image4} alt="Fish 4" />
      </div>

      <div className="FishItem">
        <img src={image5} alt="Fish 5" />
        <img src={image6} alt="Fish 6" />
      </div>
    </div>
  );
}

export default FishRender;
