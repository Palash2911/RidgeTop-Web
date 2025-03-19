import { cn } from "../../lib/utils";
import { Marquee } from "./Marquee";

const reviews = [
  {
    name: "Renae Logan",
    body: "Michael has been servicing all our heating and cooling needs for the past few years, and I can confidently say he is the most reliable and hardworking tradesman I have ever dealt with. He is always punctual, dependable, and incredibly helpful, especially when we’ve had major issues with our hydronic heating.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Rem Alis",
    body: "Michael is an 'Old School' tradesman who is an absolute professional and takes meticulous pride in his work. Something you don't find too often these days. Michael has installed a number of aircon units for us, and serviced our central heating unit.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Alan Olney",
    body: "I recently had Michael install a new unit as well as repair an existing one. I found him to be very attentive and ‘old school’ service which is rarely seen these days. He had a mind for thinking outside the box with any problems that arose. ",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Julie Shotter",
    body: "Michael serviced our evaporative cooling system. He arrived when he said he would and did a great job. He went above and beyond what actually was needed. His price was very reasonable. I highly recommend Ridgetop Heating & Cooling.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "j1234see",
    body: "I met Michael 2 years ago when he turned up to service a ducted heating for 1 property. And then later I engaged him to install a custom made ducted heating filter for my own property. I have since used him for various work including evap cooling services & repairs.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Dean Abley",
    body: "Highly recommend this business. Great work at a great price. Michael is very honest and the pricing is far better than all those ripp-off merchants that are now flooding the industry. Don't waste your time - call Ridgetop for satisfaction guaranteed!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "James Perry",
    body: "Michael was professional, polite and answered every question I had. He was able to fix my Air Conditioner and make recommendations. I would happily hire him again. ",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Robert Dare",
    body: "Michael installed our split system on time and as quoted. He was very efficient and a pleasure to deal with. I would highly recommend and will use his services in the future. ",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Robyn Stewart",
    body: "I have had Ridgetop sort out heating issues in a few different properties. Great price and superior service.. Will definitely be using them again.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Anza Hashmi",
    body: "Michaels the best in the business by a mile. Extremely professional, knows his trade in and out and always goes above and beyond to make sure our heating and coolings in order. Couldn’t recommend him enough even if i tried",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-[2px]",
      )}
    >
      <div className="flex flex-row items-center gap-2 mb-[12px]">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Reviews() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
