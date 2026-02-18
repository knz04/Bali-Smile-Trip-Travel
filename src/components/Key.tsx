import bg from "../assets/hero-home.webp";

const lines = [
  "Local Experts, Authentic Bali Experiences",
  "Creating Memories, Not Just Photos",
  "Tailor-Made Journeys for Every Traveler",
  "Exploring Destinations, Creating Memories",
  "Comfortable & Premium Vehicles",
  "Professional, Certified & Caring Guides",
  "Honest Pricing with No Hidden Costs",
  "More Than a Tour — We Truly Care",
];

// Arc: offsets curve outward in the middle
const arcOffsets = [0, 10, 16, 20, 20, 16, 10, 0];

export default function Key() {
  return (
    <div
      className="relative h-screen bg-cover bg-bottom"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="from-background absolute inset-0 bg-linear-to-r from-50%" />
      <img
        src="/logo-no-text.png"
        alt="Logo"
        className="absolute top-1/2 left-0 h-[80%] translate-x-1/10 -translate-y-1/2"
      />
      <div className="absolute inset-y-0 right-0 w-1/2 translate-y-30">
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-primary absolute text-4xl"
            style={{
              top: `${10 + i * 9}%`,
              left: `${arcOffsets[i]}%`,
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
