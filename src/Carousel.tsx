interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  return <>{images}</>;
}
