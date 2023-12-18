import { useEffect, useState } from "react";
import "./Carousel.css";

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
      const maxWidth = 400;
      const maxHeight = 400;

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
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage - 1);
    }

    if (prevImage === images.length - 1) {
      setPrevImage(0);
    } else {
      setPrevImage(prevImage - 1);
    }

    if (nextImage === images.length - 1) {
      setNextImage(0);
    } else {
      setNextImage(nextImage - 1);
    }
  };

  return (
    <>
      <div className="carousel-body">
        <div className="carousel-button-div">
          <button onClick={handlePrev} title="Back" id="carousel-back-button">
            ← Back
          </button>
        </div>
        <div id="carousel-image-container">
          <img
            src={images[currentImage]}
            style={{
              width: imageDimensions.width,
              height: imageDimensions.height,
            }}
            id="carousel-image"
          />
        </div>
        <div className="carousel-button-div">
          <button onClick={handleNext} title="Next" id="carousel-next-button">
            Next →
          </button>
        </div>
      </div>
    </>
  );
}
