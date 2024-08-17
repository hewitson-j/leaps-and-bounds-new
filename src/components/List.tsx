interface ListProps {
  className: string;
  listPoints: string[];
}

export default function List({ className, listPoints }: ListProps) {
  return (
    <ul className={className}>
      {listPoints.map((point, index) => {
        return <li key={index}>{point}</li>;
      })}
    </ul>
  );
}
