import { useState, useEffect } from 'react';
import './Carousel.css';
import beer1 from "../images/beer1.jpg";
import beer2 from "../images/beer2.jpg";
import beer3 from "../images/beer3.jpg";
import beer4 from "../images/beer4.jpg";
import beer5 from "../images/beer5.jpg";
import beer6 from "../images/beer6.jpg";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    beer1,
    beer2,
    beer3,
    beer4,
    beer5,
    beer6,
  ];

  const scrollInterval = 3000; // scroll every 3 seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, scrollInterval);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, scrollInterval]);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button
          className="left-arrow"
          onClick={handlePrevClick}
          aria-label="Press this button to see previous pics"
        >
          <i className="gg-chevron-left" />
        </button>
        <img
          className="carousel-img"
          src={images[currentIndex]}
          aria-label="Carousel Picture"
          alt={`Land Scape ${currentIndex}`}
        />
        <button
          className="right-arrow"
          onClick={handleNextClick}
          aria-label="Press this button to see post pics"
        >
          <i className="gg-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
