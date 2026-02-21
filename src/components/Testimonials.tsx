import { Star } from "lucide-react";
import elliottl from "../assets/testimonials/elliottl.webp";
import frankc from "../assets/testimonials/frankc.webp";
import wendyy from "../assets/testimonials/wendyy.webp";

const testimonials = [
  {
    name: "Elliot L.",
    image: elliottl,
    rating: 5,
    review:
      '"Overall, Dewa is an incredibly knowledgeable, kind, safe, and flexible driver who I would recommend to any and all."',
  },
  {
    name: "Frank C.",
    image: frankc,
    rating: 5,
    review:
      "“Dewa was exceptional and I highly recommend him to everyone visiting Bali. He is an expert of the island, very quick to communicate and flexible depending on your timing and desires for the day.”",
  },
  {
    name: "Wendy Y.",
    image: wendyy,
    rating: 5,
    review:
      "“The guide did an excellent job, taking us to many beautiful places with all the necessary extras. A wonderful person, very knowledgeable about Bali’s history, 100% recommended. ✨”",
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-12 py-2 sm:h-screen lg:h-[60vh] lg:py-0">
      <div className="flex flex-col items-center justify-center">
        <p className="sm:text-3xl lg:text-4xl">What Our Guests Say</p>
        <p className="font-light sm:text-sm lg:text-base">
          Our guests come from around the world, and many return or recommend
          us.
        </p>
      </div>
      <div>
        <div className="flex justify-center gap-8 sm:flex-col lg:flex-row">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative mt-12 flex justify-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="border-yellow absolute -top-12 left-1/2 z-10 h-24 w-24 -translate-x-1/2 rounded-full border-2 object-cover"
              />
              <div className="border-yellow relative flex w-fit flex-col items-center justify-center rounded-sm border px-8 pt-14 pb-8">
                <p className="max-w-96 text-center font-light sm:text-sm lg:text-base">
                  {testimonial.review}
                </p>
                <div className="mt-2 flex flex-col items-center justify-center">
                  <p className="font-light sm:text-sm lg:text-base">
                    {testimonial.name}
                  </p>
                  <div className="flex flex-row">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} color="yellow" fill="#ffd21e" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
