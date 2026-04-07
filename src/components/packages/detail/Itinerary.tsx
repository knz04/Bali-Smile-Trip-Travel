import { ArrowRight, Car } from "lucide-react";

interface ItineraryProps {
  title: string;
  subtitle?: string;
  pickup: string;
  dropoff: string;
  items: string[];
}

export default function Itinerary({
  title,
  subtitle,
  pickup,
  dropoff,
  items,
}: ItineraryProps) {
  return (
    <div className="flex flex-col">
      <p className="text-xl sm:text-2xl xl:text-3xl">{title}</p>
      <p className="text-sm font-light lg:text-base">{subtitle}</p>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-x-2">
          <Car size={80} className="stroke-1" />
          <p className="text-sm font-light lg:text-base">{pickup}</p>
        </div>

        <div className="flex flex-col">
          {items.map((item, index) => (
            <div className="flex flex-row items-center gap-x-2" key={index}>
              <ArrowRight size={24} className="stroke-2" />
              <p className="text-sm font-light lg:text-base">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-x-2">
          <Car size={80} className="stroke-1" />
          <p className="text-sm font-light lg:text-base">{dropoff}</p>
        </div>
      </div>
      <p className="text-sm font-light italic lg:text-base">
        The itinerary is fully customizable based on your interests and travel
        pace.
      </p>
    </div>
  );
}
