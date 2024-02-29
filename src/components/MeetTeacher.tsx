import profilePic from "../assets/ProfilePic.jpg";
import "./MeetTeacher.css";

export default function MeetTeacher() {
  const currentDate = new Date();

  return (
    <div className="meet-teacher" id="meet-teacher">
      <h2>Meet the Teacher!</h2>
      <img
        src={profilePic}
        alt="Ms. Melanie"
        title="Ms. Melanie"
        id="melanie-image"
      />
      <p>
        My name is Melanie Trujillo. I am passionate about teaching preschool! I
        have been working in the field of early childhood education for almost
        20 years beginning in high school. I am a member of NAEYC, CAEYC and am
        licensed with the state of Colorado. After 10 years of working in the
        public school system in Nevada I moved to Colorado Springs and began
        working at a childcare center and did so for over two years. At that
        time, I decided to open my own preschool classroom.
        <br />
        <br />I have been teaching preschool-age students in my home as a
        licensed family child care provider for since 2017. My husband and I
        have been married {currentDate.getFullYear() - 2014} years. We have a
        beautifully blended family with six children whose ages range from{" "}
        {currentDate.getFullYear() - 2006} - {currentDate.getFullYear() - 1998}.
        <br />
        <br />
        We have one dog named Rosie and a cat named Ophelia. I enjoy being able
        to teach children from my home. I love working with them and seeing
        their faces light up when they learn something new! I’m excited to have
        your child join our class and look forward to teaching, as well as
        learning from them. I truly believe each child has amazing potential and
        gifts already inside of them. Thank you for considering becoming a part
        of the Leaps & Bounds Preschool family!
      </p>
    </div>
  );
}
