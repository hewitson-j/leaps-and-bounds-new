import "./Body.css";
import Carousel from "./Carousel";
import Contact from "./Contact";
import { facilitiesImageArray, studentsImageArray } from "./ImagesArrays";
import MeetTeacher from "./MeetTeacher";

export default function Body() {
  return (
    <div className="body-container">
      <div className="body-content">
        <h2 id="home">Welcome to School!</h2>
        <Carousel images={studentsImageArray} />
        <h2 id="about">About our Program</h2>
        <p>
          To provide each child with a healthy and happy Pre-K experience in a
          warm and loving Christian home environment and to ignite his/her
          excitement for future learning; to build self esteem, self confidence
          and self reliance. My approach to teaching is hands-on and play-based.
          Learning styles vary. I believe the best approach to learning is
          through all of the senses. I promote problem solving, positive social
          skills and communication every day. My curriculum includes studies of
          interest to the Pre-K child and I work hard to present these studies
          as well as necessary kindergarten and life skills in a meaningful way.
        </p>
        <h2>What we Offer</h2>
        <p>
          I want to provide your child with an exceptional Preschool experience.
          Leaps & Bounds Preschool highlights include:
        </p>
        <ul>
          <li>A Play-Based curriculum that meets Colorado State Standards</li>
          <li>Family involvement activities several times per year</li>
          <li>
            Nutritious morning snack consisiting of fruits, vegetables, whole
            grains and/or lean proteins.
          </li>
          <li>Fun and inviting indoor and outdoor learning spaces.</li>
          <li>A daily short Bible devotional.</li>
          <li>Cooking and science exploration</li>
          <li>Community involvement through special guest presenters.</li>
          <li>Small class size with a ratio of six students to one teacher.</li>
        </ul>
        <p>
          I am a licensed family childcare provider with the State of Colorado
          (license #1711173) providing care and education exclusively to
          preschool-age children.
        </p>
        <h2>Our Facilities</h2>
        <Carousel images={facilitiesImageArray} />
        <MeetTeacher />
        <h2 id="reviews">Reviews</h2>
        <p>
          {"\t"}Ms. Melanie is the best and most nurturing teacher a kid could
          have. I felt 100% comfortable sending my children to her every day.
          They loved everything about Leaps and Bounds and so did I! We will
          miss Ms. Melanie very much, but my kids are very ready for the next
          step of Kindergarten thanks to her! - Tiffany C.
          <br />
          <br />
          {"\t"}Melanie is truly amazing. Her hard work and passion for teaching
          shows in everything she does. Tonight was my little girls graduation
          and it makes me so sad that we won’t get to send her everyday. I knew
          my daughter was in the best preschool as not one day went by that she
          didn’t come out with a smile on her face. The curriculum Melanie uses
          is incredible. We are going to miss Leaps and Bounds so much next year
          but I know she has had an incredible start to her learning because of
          you, Melanie. Thank you for everything you have done this year with
          Lucy. - Carolyne M.
          <br />
          <br />
          {"\t"}My Daughter has thrived here and loves going to school. She has
          made huge progress both academically and socially. I love that Ms.
          Melanie does play based learning and you can tell that she cares about
          and loves her students. The class size is small so that you child gets
          the attention they need. She is wonderful at communicating with
          parents, I never feel like I don't know whats going on. She always has
          such fun and creative stations and projects for the students. I will
          be sending my son here when he is old enough and would recommend leaps
          and bounds to everybody. - Heather B.
          <br />
          <br />
          It’s been a pleasure watching my little girl flourish under Miss
          Melanie’s care. She is an incredible and patient teacher, who knows
          just how to cater to each individual child’s needs! A+++++++++ -
          Alexandra B.
        </p>
        <Contact />
      </div>
    </div>
  );
}
