import "./Body.css";
import Carousel from "./Carousel";
import { facilitiesImageArray } from "./ImagesArrays";

export default function Body() {
  return (
    <div className="body-container">
      <div className="body-content">
        <h2 id="home">Welcome to School!</h2>
        <Carousel images={facilitiesImageArray} />
      </div>
    </div>
  );
}
