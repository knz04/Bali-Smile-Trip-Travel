import { Link } from "react-router";
import { Timer } from "lucide-react";
import Button from "../Button";

interface PackageHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  image: string;
}

export default function PackageHero({
  title,
  subtitle,
  duration,
  image,
}: PackageHeroProps) {
  return (
    <div className="flex h-full w-full flex-col gap-y-8 lg:h-[80vh] lg:flex-row">
      {/* Mobile image */}
      <div className="relative w-full overflow-hidden lg:hidden lg:w-1/2">
        <img
          src={image}
          alt="Package image"
          className="h-52 w-full object-cover brightness-80 lg:h-full"
        />
      </div>

      {/* Left column - Text */}
      <div className="flex w-full flex-col items-start justify-center gap-y-2 px-8 pb-8 lg:w-1/2 lg:px-16 lg:pb-0">
        <div className="flex flex-row gap-x-1">
          <Link
            to="/packages"
            className="text-sm font-light hover:underline lg:text-base"
          >
            Packages
          </Link>
          <p className="text-sm font-light lg:text-base">/</p>
          <Link
            to="#"
            className="text-sm font-light hover:underline lg:text-base"
          >
            {title}
          </Link>
        </div>
        <p className="text-4xl font-semibold sm:text-5xl xl:text-6xl">
          {title}
        </p>
        <p className="text-xl font-light sm:text-2xl xl:text-3xl">{subtitle}</p>
        <div className="flex flex-row items-center justify-center gap-x-1">
          <Timer size={24} className="mb-1 stroke-1" />
          <p className="text-sm font-light lg:text-base">Tour Duration: </p>
          <p className="text-sm lg:text-base">{duration}</p>
        </div>
        <Link to="/book">
          <Button>Book Now</Button>
        </Link>
      </div>

      {/* Right column - Image */}
      <div className="hidden w-full overflow-hidden lg:relative lg:block lg:w-1/2">
        <img
          src={image}
          alt="Package image"
          className="h-52 w-full object-cover brightness-80 lg:h-full"
        />
      </div>
    </div>
  );
}
