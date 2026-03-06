import { Link } from "react-router";
import Button from "../Button";

interface PackageCardProps {
  id: number;
  image?: string;
  title: string;
  description: string;
}

export default function PackageCard({
  id,
  image,
  title,
  description,
}: PackageCardProps) {
  return (
    <div className="flex w-[90%] flex-row items-center justify-center gap-4 lg:w-[80%]">
      <img
        src={image || "https://placehold.co/600x400?text=Placeholder"}
        alt="Package Image"
        className="size-32 shrink-0 object-cover lg:size-48"
      />
      <div className="flex flex-col items-start justify-center gap-2">
        <p className="text-xl sm:text-2xl xl:text-3xl">{title}</p>
        <p className="line-clamp-3 text-sm font-light lg:text-base">
          {description}
        </p>
        <Link to={`/packages/${id}`}>
          <Button>Learn More</Button>
        </Link>
      </div>
    </div>
  );
}
