import ubudEssential from "../assets/unsplash/ubud-essential.webp";
import northBali from "../assets/unsplash/north-bali.webp";
import eastBali from "../assets/unsplash/east-bali.webp";
import southBali from "../assets/unsplash/south-bali.webp";
import andMore from "../assets/unsplash/and-more.webp";
import Button from "./Button";

export default function PackageOverview() {
  const packages = [
    { src: ubudEssential, alt: "Ubud Essential Tour" },
    { src: northBali, alt: "North Bali Trip" },
    { src: eastBali, alt: "East Bali Trip" },
    { src: southBali, alt: "South Bali Trip" },
    { src: andMore, alt: "And more..." },
  ];

  return (
    <div className="flex h-fit flex-col items-center justify-center gap-y-12 sm:h-[120vh] xl:h-screen">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl xl:text-4xl">Our Packages</p>
        <p className="text-center text-sm font-light lg:text-base">
          Choose your perfect Bali adventure. Every package includes a private
          driver and personalized service.
        </p>
      </div>

      {/* Mobile: simple flex-col list */}
      <div className="flex w-full flex-col lg:hidden">
        {packages.map(({ src, alt }) => (
          <div
            key={alt}
            className="relative flex h-48 w-full cursor-pointer flex-col items-center justify-center"
          >
            <img
              src={src}
              alt={alt}
              className="absolute h-full w-full object-cover brightness-75"
            />
            <p className="text-background relative z-10 text-center text-xl font-semibold">
              {alt}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: original grid layout */}
      <div className="hidden w-full grid-cols-2 lg:grid">
        <div className="group relative flex h-full w-full flex-col items-center justify-center gap-y-2">
          <img
            src={ubudEssential}
            alt="Ubud Essential Tour"
            className="absolute h-full w-full object-cover brightness-80"
          />
          <p className="text-background relative z-10 translate-y-4 font-semibold transition-transform duration-300 group-hover:-translate-y-2 lg:text-start lg:text-3xl xl:text-4xl">
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
              <p className="text-background relative z-10 translate-y-4 font-semibold transition-transform duration-300 group-hover:-translate-y-2 lg:text-start lg:text-3xl xl:text-4xl">
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
