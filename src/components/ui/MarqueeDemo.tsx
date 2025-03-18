import { cn } from "../../lib/utils";
import { Marquee } from "./Marquee";
 
const reviews = [
  {
    id:1,
    img: "https://avatar.vercel.sh/jack",
  },
  {
    id:2,
    img: "https://avatar.vercel.sh/jill",
  },
  {
    id:3,
    img: "https://avatar.vercel.sh/john",
  },
  {
    id:4,
    img: "https://avatar.vercel.sh/jane",
  },
  {
    id:5,
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    id:6,
    img: "https://avatar.vercel.sh/james",
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  img,
  id
}: {
  img: string,
  id:number
}) => {
  return (
    <figure
      className={cn(
        "relative h-[200px] w-[350px] md:h-[300px] md:w-[500px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
        <img className="h-full w-full object-cover rounded-[12px] "alt="" src={img} />
    </figure>
  );
};
 
export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}