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

const arcOffsets = [0, 10, 16, 20, 20, 16, 10, 0];

export default function Key() {
  return (
    <div
      className="relative bg-cover bg-bottom sm:h-[60vh] lg:h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="from-background absolute inset-0 bg-linear-to-r from-50%" />

      {/* Logo */}
      <img
        src="/logo-no-text.png"
        alt="Logo"
        className="xl:[80%] absolute top-8 left-1/2 h-[30%] -translate-x-1/2 lg:top-1/2 lg:left-0 lg:h-[75%] lg:translate-x-1/10 lg:-translate-y-3/5 xl:-translate-y-1/2"
      />

      {/* SM: stacked list below logo */}
      <div className="absolute top-[38%] right-0 left-0 flex flex-col items-center gap-y-2 px-4 lg:hidden">
        {lines.map((line, i) => (
          <p key={i} className="text-primary text-center sm:text-2xl">
            {line}
          </p>
        ))}
      </div>

      {/* LG: arc layout */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-primary absolute lg:text-xl xl:text-4xl"
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
