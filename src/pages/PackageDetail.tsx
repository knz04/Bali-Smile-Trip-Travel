import { useParams } from "react-router";
import PackageHero from "../components/packages/PackageHero";
import { packages } from "../data/packages";

export default function PackageDetail() {
  const { id } = useParams();

  return (
    <div className="w-full">
      <PackageHero
        title={packages[id].title}
        subtitle={packages[id].subtitle}
        duration={packages[id].duration}
        image={packages[id].image}
      />
    </div>
  );
}
