import ubudEssential from "../assets/unsplash/ubud-essential.webp";
import northBali from "../assets/unsplash/north-bali.webp";
import eastBali from "../assets/unsplash/east-bali.webp";
import southBali from "../assets/unsplash/south-bali.webp";
import andMore from "../assets/unsplash/and-more.webp";
import Button from "./Button";

export default function PackageOverview() {
  return (
    <div className="flex h-fit flex-col items-center justify-center gap-y-12 lg:h-[100vh]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl">Our Packages</p>
        <p className="font-light">
          Choose your perfect Bali adventure. Every package includes a private
          driver and personalized service.
        </p>
      </div>
      <div className="grid w-full grid-cols-2">
        <div className="group relative flex h-full w-full flex-col items-center justify-center gap-y-2">
          <img
            src={ubudEssential}
            alt="Ubud Essential Tour"
            className="absolute h-full w-full object-cover brightness-80"
          />
          <p className="text-background relative z-10 translate-y-4 text-4xl font-semibold transition-transform duration-300 group-hover:-translate-y-2">
            Ubud Essential Tour
          </p>
          <Button className="relative z-10 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Details
          </Button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          {[
            { src: northBali, alt: "North Bali Trip" },
            { src: eastBali, alt: "East Bali Trip" },
            { src: southBali, alt: "South Bali Trip" },
            { src: andMore, alt: "And more..." },
          ].map(({ src, alt }) => (
            <div
              key={alt}
              className="group relative flex aspect-square h-full w-full flex-col items-center justify-center gap-y-2"
            >
              <img
                src={src}
                alt={alt}
                className="absolute h-full w-full object-cover brightness-80"
              />
              <p className="text-background relative z-10 translate-y-4 text-4xl font-semibold transition-transform duration-300 group-hover:-translate-y-2">
                {alt}
              </p>
              <Button className="relative z-10 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
