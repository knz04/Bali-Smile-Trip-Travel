import { useParams } from "react-router";
import PackageHero from "../components/packages/PackageHero";
import { packages } from "../data/packages";
import Button from "../components/Button";
import { Link } from "react-router";

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
