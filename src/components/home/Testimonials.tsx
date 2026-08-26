import { Star } from "lucide-react";
import elliottl from "../../assets/testimonials/elliottl.webp";
import frankc from "../../assets/testimonials/frankc.webp";
import wendyy from "../../assets/testimonials/wendyy.webp";
import { useTranslation } from "react-i18next";

const testimonials = [
  { id: "elliott", image: elliottl, rating: 5 },
  { id: "frank", image: frankc, rating: 5 },
  { id: "wendy", image: wendyy, rating: 5 },
] as const;

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <div className="flex h-fit flex-col items-center justify-center gap-y-12 py-2 sm:h-screen lg:py-0 2xl:h-[60vh]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl sm:text-3xl xl:text-4xl">
          {t("home.testimonials.title")}
        </p>
        <p className="w-[90%] text-center text-sm font-light sm:w-full lg:text-base">
          {t("home.testimonials.subtitle")}
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-center gap-8 lg:flex-row">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative mt-12 flex justify-center"
            >
              <img
                src={testimonial.image}
                alt={t(`home.testimonials.items.${testimonial.id}.name`)}
                className="border-yellow absolute -top-12 left-1/2 z-10 h-24 w-24 -translate-x-1/2 rounded-full border-2 object-cover"
              />
              <div className="border-yellow relative flex w-fit flex-col items-center justify-center rounded-sm border px-8 pt-14 pb-8">
                <p className="max-w-96 text-center font-light sm:text-sm lg:text-base">
                  {t(`home.testimonials.items.${testimonial.id}.review`)}
                </p>
                <div className="mt-2 flex flex-col items-center justify-center">
                  <p className="font-light sm:text-sm lg:text-base">
                    {t(`home.testimonials.items.${testimonial.id}.name`)}
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
