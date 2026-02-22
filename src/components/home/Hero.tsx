import heroImage from "../assets/hero-home.webp";
import Button from "../Button";

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-72px)] lg:h-[calc(100vh-104px)]">
      <img
        src={heroImage}
        alt="Hero Image"
        className="absolute h-full w-full object-cover brightness-80"
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-y-2">
        <p className="text-background text-center font-semibold sm:text-5xl xl:text-6xl">
          Private Bali Tours & Certified Drivers.
        </p>
        <p className="text-background text-center font-semibold sm:text-5xl xl:text-6xl">
          Explore Bali with Comfort.
        </p>
        <p className="text-background text-center font-normal sm:text-3xl xl:text-4xl">
          Exploring Destinations, Creating Memories.
        </p>
        <p className="text-background text-center font-light sm:text-sm lg:text-base">
          Your trusted Bali tour and transport provider, where every journey is
          crafted with heart, passion, and true Balinese hospitality.
        </p>
        <div className="flex flex-row items-center justify-center gap-x-4 pt-2">
          <Button>Book Your Tour</Button>
          <Button>View Our Packages</Button>
        </div>
      </div>
    </div>
  );
}
