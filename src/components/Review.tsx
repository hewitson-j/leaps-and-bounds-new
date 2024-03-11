import "./Review.css";

interface ReviewProps {
  url: string;
  paragraph: string;
  name: string;
}

export default function Review({ url, paragraph, name }: ReviewProps) {
  return (
    <div className="review" role="comment">
      <a
        href={`${url}`}
        target="_blank"
        className="review-link"
        role="link"
        aria-label={`Review from ${name}`}
      >
        {paragraph}
        <br />
        <i>- {name}</i>
      </a>
      <br />
      <br />
    </div>
  );
}
