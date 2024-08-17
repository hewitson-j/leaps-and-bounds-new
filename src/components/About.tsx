import Carousel from "./Carousel";
import { facilitiesImageArray } from "./ImagesArrays";
import "./About.css";
import List from "./List";

const listPointsArr = [
  "A Play-Based curriculum that meets Colorado State Standards",
  "Family involvement activities several times per year",
  "Nutritious morning snack consisiting of fruits, vegetables, whole grains and/or lean proteins.",
  "Fun and inviting indoor and outdoor learning spaces.",
  "A daily short Bible devotional.",
  "Cooking and science exploration",
  "Community involvement through special guest presenters.",
  "Small class size with a ratio of six students to one teacher.",
];

export default function About() {
  return (
    <div id="about" className="about" role="article">
      <h2>About our Program</h2>
      <p>
        To provide each child with a healthy and happy Pre-K experience in a
        warm and loving Christian home environment and to ignite his/her
        excitement for future learning; to build self esteem, self confidence
        and self reliance. My approach to teaching is hands-on and play-based.
        Learning styles vary.
        <br />
        <br />I believe the best approach to learning is through all of the
        senses. I promote problem solving, positive social skills and
        communication every day. My curriculum includes studies of interest to
        the Pre-K child and I work hard to present these studies as well as
        necessary kindergarten and life skills in a meaningful way.
      </p>
      <h2>What we Offer</h2>
      <p>
        I want to provide your child with an exceptional Preschool experience.
        Leaps & Bounds Preschool highlights include:
      </p>
      <List className="about-list" listPoints={listPointsArr} />
      <p>
        I am a licensed family childcare provider with the State of Colorado
        (license #1711173) providing care and education exclusively to
        preschool-age children.
      </p>
      <h2>Our Facilities</h2>
      <Carousel images={facilitiesImageArray} />
    </div>
  );
}
