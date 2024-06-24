import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import './Slideshow.css';

import image1 from './SlideShow/q.png';
import image2 from './SlideShow/ewq.png';
import image3 from './SlideShow/qw.png';
import image4 from './SlideShow/qwe.png';
import image5 from './SlideShow/weq.png';

const images = [image1, image2, image3, image4, image5];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 16000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <Parallax bgImage={image} strength={500}>
            <div style={{ height: '600px' }}></div>
          </Parallax>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
