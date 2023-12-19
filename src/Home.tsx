import Carousel from "./Carousel";
import { studentsImageArray } from "./ImagesArrays";

export default function Home() {
  return (
    <div id="home" className="home">
      <h2>Welcome to School!</h2>
      <Carousel images={studentsImageArray} />
    </div>
  );
}
