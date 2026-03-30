import SearchBar from "../components/SearchBar";
import SectionHeader from "../components/SectionHeader";
import { tags } from "../data/gallery";

export default function Gallery() {
  return (
    <div>
      <SectionHeader
        heading="Gallery"
        subheading="See the beauty, culture, and unforgettable moments our guests experience across Bali."
      />
      <div className="flex flex-col p-4 md:flex-row">
        <div className="w-ful flex flex-col gap-2">
          <SearchBar />
          <div className="flex flex-col">
            {tags.map((tag) => (
              <p
                className="text-primary text-sm font-light hover:cursor-pointer hover:underline lg:text-base"
                key={tag}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
