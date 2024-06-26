import React from "react";
import './FishRender.css';
import GreyLine from "../../Utility/GreyLine";

import image1 from '../Fishies/image1.png';
import image2 from '../Fishies/image2.png';
import image3 from '../Fishies/image3.png';
import image4 from '../Fishies/image4.png';
import image5 from '../Fishies/image5.png';
import image6 from '../Fishies/image6.png';

function FishRender() {
  return (
    <div className="MainBody-Fish">
      <div className="MainBody-FishContent">
        <span className="SubTitle">Gin Rin Beni Matsukawabake</span>
        <img src={image1} alt='fish1' className="FishRender-Image"></img>
        <span className="SubTextp">The Gin Rin Beni Matsukawabake is a stunning variety of koi fish, distinguished by its unique coloration and shimmering scales.
           This koi features a vibrant red-orange (beni) hue combined with intricate black patterns that create a striking contrast</span>
      </div>
      <div className="MainBody-FishContent">
        <span className="SubTitle">The Emperor WOW Kin Matsuba</span>
        <img src={image2} alt='fish2' className="FishRender-Image"></img>
        <span className="SubTextp">he Emperor WOW Kin Matsuba is a regal koi variety known for its striking metallic scales that shimmer like gold. This majestic
           fish features a distinctive reticulated pattern on its back, which adds an element of depth and texture to its appearance.</span>
      </div>
      <div className="MainBody-FishContent">
        <span className="SubTitle">Asagi</span>
        <img src={image3} alt='fish3' className="FishRender-Image"></img>
        <span className="SubTextp">The Asagi is a classic koi variety cherished for its serene and refined beauty. It exhibits a light blue to indigo body covered
           with an intricate, net-like pattern of scales, contrasted by vibrant red or orange markings on the belly, fins, and gill plates.</span>
      </div>
      <div className="MainBody-FishContent">
        <span className="SubTitle">Hariwake</span>
        <img src={image4} alt='fish4' className="FishRender-Image"></img>
        <span className="SubTextp">The Hariwake is a captivating koi variety that showcases a delightful combination of white and vibrant yellow or orange colors.
           Its clean, metallic sheen and distinct patterns create a bright and cheerful appearance.</span>
      </div>
      <GreyLine />
    </div>
  );
}

export default FishRender;
////Title SubTitle SubText
//Doitsu Hariwake   Sanke Gold Female