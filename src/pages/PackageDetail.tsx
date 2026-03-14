import { useParams } from "react-router";
import PackageHero from "../components/packages/PackageHero";
import { packages } from "../data/packages";
import Button from "../components/Button";
import { Link } from "react-router";
import Paragraph from "../components/packages/detail/Paragraph";
import List from "../components/packages/detail/List";
import Itinerary from "../components/packages/detail/Itinerary";
import Vehicle from "../components/packages/detail/Vehicle";
import InclusionExclusion from "../components/packages/detail/InclusionExclusion";

export default function PackageDetail() {
  const { id } = useParams();

  return (
    <div className="flex w-full flex-col items-center pb-12">
      <PackageHero
        title={packages[id].title}
        subtitle={packages[id].subtitle}
        duration={packages[id].duration}
        image={packages[id].image}
      />

      <div className="flex w-[90%] flex-col gap-y-8 pt-12">
        <Paragraph
          title={packages[id].title}
          paragraphs={[packages[id].description]}
        />

        <List
          title={packages[id].highlights.title}
          items={packages[id].highlights.items}
        />

        <Itinerary
          title={packages[id].itinerary.title}
          subtitle={packages[id].itinerary.subtitle}
          pickup={packages[id].itinerary.pickup}
          dropoff={packages[id].itinerary.dropoff}
          items={packages[id].itinerary.items}
        />

        <Vehicle
          main={packages[id].vehicles.main}
          upgrade={packages[id].vehicles.upgrade}
        />

        <InclusionExclusion
          inclusions={packages[id].inclusions}
          exclusions={packages[id].exclusions}
        />

        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-xl sm:text-2xl xl:text-3xl">
            Book your {packages[id].title} now!
          </p>
          <Link to="/book">
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
