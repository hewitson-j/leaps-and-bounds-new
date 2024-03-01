import "./Reviews.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Review from "./Review";

export default function Reviews() {
  const starArray = ["full", "full", "full", "full", "full"];

  const reviewArray = [
    {
      id: 0,
      url: "https://www.facebook.com/share/sEUEZJpVGHxJDAkm/?mibextid=WC7FNe",
      paragraph: `If you're looking for an incredible preschool look no further!! My son
    just finished and I cannot say enough great things. Mrs. Melanie has
    such a kind gentle spirit about her. My son had many rough mornings
    but she was always super patient and kind. I loved the curriculum she
    used. So many fun and creative crafts they did. The Christmas family
    event was so fun too as well as the graduation. I wish she taught
    Kindergarten too so we could stay another year!`,
      name: "Danielle G.",
    },
    {
      id: 1,
      url: "https://www.facebook.com/share/SV6PxwTvz6J4M5hf/",
      paragraph: `This program has been such a blessing for our son. He has grown so
    much in his knowledge, social skills, attention and learning skills,
    and his confidence and curiosity. He truly seems well prepared to
    enter into kindergarten, and may even be advanced beyond his age,
    thanks to Leaps and Bounds. I even learn a thing or two on the drive
    home! Ms. Melanie has created such an engaging, fun, and intentional
    program, and she truly cares about the success of each child. The kids
    absolutely love her, and you can easily tell they’ve all created bonds
    with each other and with her. I can’t recommend it enough.`,
      name: "Alan V.",
    },
    {
      id: 2,
      url: "https://www.facebook.com/share/RzNpCUEnYEcRRWMC/",
      paragraph: `Mrs. Melanie is so special to our family! The progress our daughter
    has made is so far beyond an academic realm. Her character, her self
    confidence, her socialization, her independence. What Mrs. Melanie
    does is more than any traditional academic center could provide. We
    cannot recommend her highly enough. We’ve loved getting to know the
    classmates and their families. Having a small class makes this
    experience unique and wonderful for families starting their academic
    journey with their young children. We are confident our daughter will
    be more than prepared for kindergarten and beyond—in academics,
    socialization, independence/autonomy, and so much more. We’ve loved
    how communicative Melanie is with us as parents with her concerns or
    even accolades of our child. And she is our biggest cheerleader from a
    parent to a parent. Gratitude forever for this wonderful woman and
    what she has built.`,
      name: "Catie F.",
    },
    {
      id: 3,
      url: "https://www.facebook.com/share/1hfdqTArWBun3dfh/",
      paragraph: `With preschool being the first introduction our child would have to
    education outside our home, we were looking for a program that would
    stimulate our daughter's desire to learn in a manner she would enjoy.
    Melanie's program has exceeded all of our expectations. We have seen
    our child grow, not only academically, but most importantly in her
    character and social interactions with her peers. Hands down and
    without any reservations, we recommend Leaps & Bounds for your
    preschool needs.`,
      name: "Marcie B.",
    },
    {
      id: 4,
      url: "https://www.facebook.com/share/K3P8zHPJ7A2a5jaL/",
      paragraph: `If you’re thinking of sending your child here, don’t hesitate and DO
    IT! Melanie is so amazing, I honestly don’t have enough words to
    describe the impact she’s had on my son. This is his second year with
    her and he’s learned so much, intellectually, emotionally, physically,
    musically, etc. Every time my son talks about his “family”, Melanie is
    always included in that grouping. He truly sees her as his family and
    we do too! She’s kind and patient and loving and makes all of her
    students feel cared for while at school. I would absolutely recommend
    her as a preschool teacher, so much so that I will definitely be
    sending my daughter in a couple years!`,
      name: "Jessa R.",
    },
    {
      id: 5,
      url: "https://www.facebook.com/17802835/posts/10107192637214339/?mibextid=WC7FNe",
      paragraph: `Ms. Melanie is the best and most nurturing teacher a kid could have. I
    felt 100% comfortable sending my children to her every day. They loved
    everything about Leaps and Bounds and so did I! We will miss Ms.
    Melanie very much, but my kids are very ready for the next step of
    Kindergarten thanks to her!`,
      name: "Tiffany C.",
    },
    {
      id: 6,
      url: "https://www.facebook.com/618720275/posts/10164933455785276/?mibextid=WC7FNe",
      paragraph: `Melanie is truly amazing. Her hard work and passion for teaching shows
    in everything she does. Tonight was my little girls graduation and it
    makes me so sad that we won’t get to send her everyday. I knew my
    daughter was in the best preschool as not one day went by that she
    didn’t come out with a smile on her face. The curriculum Melanie uses
    is incredible. We are going to miss Leaps and Bounds so much next year
    but I know she has had an incredible start to her learning because of
    you, Melanie. Thank you for everything you have done this year with
    Lucy.`,
      name: "Carolyne M.",
    },
    {
      id: 7,
      url: "https://www.facebook.com/505403452/posts/10158513043108453/?mibextid=WC7FNe",
      paragraph: `My Daughter has thrived here and loves going to school. She has made
    huge progress both academically and socially. I love that Ms. Melanie
    does play based learning and you can tell that she cares about and
    loves her students. The class size is small so that you child gets the
    attention they need. She is wonderful at communicating with parents, I
    never feel like I don't know whats going on. She always has such fun
    and creative stations and projects for the students. I will be sending
    my son here when he is old enough and would recommend leaps and bounds
    to everybody.`,
      name: "Heather B.",
    },
    {
      id: 8,
      url: "https://www.facebook.com/1381950070/posts/10214402795968689/?mibextid=WC7FNe",
      paragraph: `It’s been a pleasure watching my little girl flourish under Miss
      Melanie’s care. She is an incredible and patient teacher, who knows
      just how to cater to each individual child’s needs! A+++++++++`,
      name: "Alexandra B.",
    },
  ];

  return (
    <div className="reviews" id="reviews">
      <h2>Reviews</h2>
      <div
        className="reviews-star-link"
        onClick={() => {
          window.open(
            "https://www.facebook.com/MsMelanieTrujillo/reviews",
            "_blank"
          );
        }}
      >
        <FacebookIcon fontSize="large" />
        <br />
        5.0 Stars on Facebook!
        <br />
        <span>
          {starArray.map((arrElement, index) => {
            if (arrElement === "full") {
              return <StarIcon key={index} />;
            } else if (arrElement === "half") {
              return <StarHalfIcon key={index} />;
            } else {
              return <StarBorderIcon key={index} />;
            }
          })}
        </span>
      </div>
      <div className="reviews-content">
        {reviewArray.map((review) => {
          return (
            <Review
              key={review.id}
              url={review.url}
              paragraph={review.paragraph}
              name={review.name}
            />
          );
        })}
      </div>
    </div>
  );
}
