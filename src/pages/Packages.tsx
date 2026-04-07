import { Pin } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import PackageCard from "../components/packages/PackageCard";
import transportServiceImage from "../assets/packages/transport-service.png";
import { packages } from "../data/packages";
import usePageTitle from "../components/PageTitle";

export default function Packages() {
  usePageTitle("Packages");

  return (
    <>
      <SectionHeader
        heading="Our Packages"
        subheading="Choose your perfect Bali adventure. Every package includes a private driver and personalized service."
      />

      {/* Important notes */}
      <div className="flex flex-col items-center justify-center gap-y-2 py-12">
        <div className="flex flex-row items-center justify-center gap-x-2">
          <Pin />
          <p>Important Notes:</p>
        </div>
        <ul className="list-disc pb-4 pl-5">
          <li className="text-sm font-light lg:text-base">
            These are private tour packages (no sharing with other guests).
          </li>
          <li className="text-sm font-light lg:text-base">
            Itinerary is flexible and can be adjusted to your interests.
          </li>
          <li className="text-sm font-light lg:text-base">
            Start time is adjustable upon request.
          </li>
          <li className="text-sm font-light lg:text-base">
            Advance booking is recommended, typically during peak season.
          </li>
        </ul>
      </div>

      <div className="grid w-full grid-cols-1 items-center justify-items-center gap-y-12 pb-12 md:grid-cols-2">
        {packages.map((pack, index) => (
          <PackageCard
            key={index}
            id={index}
            image={pack.image}
            title={pack.title}
            description={pack.description}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-y-2 py-12">
        {" "}
        <img
          src={transportServiceImage}
          alt="Transport Service"
          className="h-fit w-fit"
        />
      </div>
    </>
  );
}
