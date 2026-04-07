import { useParams, Link } from "react-router-dom";
import PackageHero from "../components/packages/PackageHero";
import { packages } from "../data/packages";
import Button from "../components/Button";
import Paragraph from "../components/packages/detail/Paragraph";
import List from "../components/packages/detail/List";
import Itinerary from "../components/packages/detail/Itinerary";
import Vehicle from "../components/packages/detail/Vehicle";
import InclusionExclusion from "../components/packages/detail/InclusionExclusion";
import Pricing from "../components/packages/detail/Pricing";
import usePageTitle from "../components/PageTitle";

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = id ? packages[Number(id)] : undefined;
  usePageTitle(pkg ? pkg.title : "Package Not Found");

  if (!pkg) {
    return (
      <div className="flex w-full flex-col items-center py-24">
        <p className="text-xl">Package not found.</p>
        <Link to="/packages">
          <Button>Back to Packages</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center pb-12">
      <PackageHero
        title={pkg.title}
        subtitle={pkg.subtitle}
        duration={pkg.duration}
        image={pkg.image}
      />
      <div className="flex w-[90%] flex-col gap-y-8 pt-12">
        <Paragraph title={pkg.title} paragraphs={[pkg.description]} />

        {pkg.highlights && (
          <List title={pkg.highlights.title} items={pkg.highlights.items} />
        )}

        {pkg.itinerary && (
          <Itinerary
            title={pkg.itinerary.title}
            subtitle={pkg.itinerary.subtitle}
            pickup={pkg.itinerary.pickup}
            dropoff={pkg.itinerary.dropoff}
            items={pkg.itinerary.items}
          />
        )}

        {pkg.vehicles && (
          <Vehicle main={pkg.vehicles.main} upgrade={pkg.vehicles.upgrade} />
        )}

        {pkg.pricing && (
          <Pricing
            title={pkg.pricing.title}
            options={pkg.pricing.options}
            categories={pkg.pricing.categories}
          />
        )}

        {(pkg.inclusions || pkg.exclusions) && (
          <InclusionExclusion
            inclusions={pkg.inclusions}
            exclusions={pkg.exclusions}
          />
        )}

        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-xl sm:text-2xl xl:text-3xl">
            Book your {pkg.title} now!
          </p>
          <Link to="/book">
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
