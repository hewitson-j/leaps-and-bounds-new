import Carousel from "./Carousel";
import "./Home.css";
import { studentsImageArray } from "./ImagesArrays";

export default function Home() {
  return (
    <div id="home" className="home" role="article">
      <h2>Welcome to Preschool!</h2>
      <Carousel images={studentsImageArray} />
    </div>
  );
}
