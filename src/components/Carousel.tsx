import { useEffect, useState } from "react";
import "./Carousel.css";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(images.length - 1);
  const [nextImage, setNextImage] = useState(1);

  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const calculateImageDimensions = (src: string) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const aspectRatio = img.width / img.height;
      let maxWidth = 400;
      let maxHeight = 400;

      if (window.innerWidth <= 450) {
        maxHeight = 250;
        maxWidth = 250;
      }

      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        width = maxWidth;
        height = width / aspectRatio;
      }
      if (height > maxHeight) {
        height = maxHeight;
        width = height * aspectRatio;
      }

      setImageDimensions({ width, height });
    };
  };

  useEffect(() => {
    calculateImageDimensions(images[currentImage]);
  }, [images, currentImage]);

  const handleNext = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }

    if (prevImage === images.length - 1) {
      setPrevImage(0);
    } else {
      setPrevImage(prevImage + 1);
    }

    if (nextImage === images.length - 1) {
      setNextImage(0);
    } else {
      setNextImage(nextImage + 1);
    }
  };

  useEffect(() => {
    const autoAdvanceCarousel = () => {
      if (currentImage === images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }

      if (prevImage === images.length - 1) {
        setPrevImage(0);
      } else {
        setPrevImage(prevImage + 1);
      }

      if (nextImage === images.length - 1) {
        setNextImage(0);
      } else {
        setNextImage(nextImage + 1);
      }
    };

    const intervalId = setInterval(autoAdvanceCarousel, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImage, images, nextImage, prevImage]);

  const handlePrev = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }

    if (prevImage === 0) {
      setPrevImage(images.length - 1);
    } else {
      setPrevImage(prevImage - 1);
    }

    if (nextImage === 0) {
      setNextImage(images.length - 1);
    } else {
      setNextImage(nextImage - 1);
    }
  };

  return (
    <>
      <div className="carousel-body">
        <div className="carousel-button-div">
          <button
            className="buttons"
            onClick={handlePrev}
            title="Back"
            id="carousel-back-button"
            aria-label={'Carousel Back'}
          >
            <ArrowBackIosNewIcon/>
          </button>
        </div>
        <div id="carousel-image-container">
          <img
            alt="Leaps and Bounds Images"
            src={images[currentImage]}
            style={{
              width: imageDimensions.width,
              height: imageDimensions.height,
            }}
            id="carousel-image"
          />
        </div>
        <div className="carousel-button-div">
          <button
            className="buttons"
            onClick={handleNext}
            title="Next"
            id="carousel-next-button"
            aria-label={'Carousel Next'}
          >
            <ArrowForwardIosIcon/>
          </button>
        </div>
      </div>
      <div className="carousel-mobile-buttons">
        <button
          className="buttons"
          onClick={handlePrev}
          title="Back"
          id="carousel-mobile-back-button"
        >
          ←
        </button>
        <button
          className="buttons"
          onClick={handleNext}
          title="Next"
          id="carousel-mobile-next-button"
        >
          →
        </button>
      </div>
    </>
  );
}
