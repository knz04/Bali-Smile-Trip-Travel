import SectionHeader from "../components/SectionHeader";
import dewa from "../assets/dewa.webp";
import { Link } from "react-router";
import Cta from "../components/Cta";

const stats = [
  {
    amount: "10+",
    text: "Years of Experience",
  },
  {
    amount: "100+",
    text: "Tours Completed",
  },
  {
    amount: "100+",
    text: "Happy Guests",
  },
  {
    amount: "100+",
    text: "5-Star Reviews",
  },
];

export default function About() {
  return (
    <div className="flex w-full flex-col">
      <SectionHeader
        heading="About Us"
        subheading="Your trusted Bali tour and transport provider, where every journey is crafted with heart, passion, and true Balinese hospitality."
      />

      <div className="flex justify-around lg:flex-row lg:p-12">
        {/* About founder */}
        <div className="flex flex-col gap-y-8 lg:w-2/3">
          {/* Meet our founder*/}
          <div className="flex flex-col">
            <p className="text-primary pb-6 lg:text-3xl">Meet Our Founder</p>
            <p className="text-primary pb-4 font-light lg:text-base">
              Dewa Wahya is the founder of Bali Smile Trip & Travel, a trusted
              Bali tour and travel service specializing in private Bali tours,
              personalized itineraries, and authentic local experiences.
            </p>
            <p className="text-primary pb-4 font-light lg:text-base">
              Born and raised in Bali, Dewa developed a deep connection to the
              island’s culture, traditions, and landscapes knowledge that goes
              far beyond popular tourist attractions.
            </p>
            <p className="text-primary font-normal lg:text-base">
              Hospitality Background & Luxury Service Experience
            </p>
            <p className="text-primary pb-4 font-light lg:text-base">
              Before establishing Bali Smile Trip & Travel, Dewa built his
              professional career as a Hotel Manager and Luxury Villa Manager in
              Bali. Working closely with international guests, he gained
              extensive experience in delivering high-end hospitality standards,
              personalized service, comfort, privacy, and attention to detail.
            </p>
            <p className="text-primary pb-4 font-light lg:text-base">
              This background allows him to understand exactly what couples,
              families, and luxury travelers expect from a premium Bali travel
              experience.
            </p>
            <p className="text-primary font-normal lg:text-base">
              Certified Tour Guide & Private Driver in Bali{" "}
            </p>
            <p className="text-primary pb-4 font-light lg:text-base">
              In addition to his hospitality career, Dewa has years of hands-on
              experience as a certified Bali tour guide and private driver. He
              combines professional guiding skills with local insight to provide
              journeys that are safe, smooth, and enjoyable. As a local tour
              guide in Bali, he offers cultural storytelling, flexible
              itineraries, and genuine recommendations tailored to each guest’s
              travel style.
            </p>
            <p className="text-primary font-normal lg:text-base">
              A Philosophy Built on Meaningful Travel
            </p>
            <p className="text-primary font-light lg:text-base">
              Dewa’s personal philosophy, “Exploring Destinations, Creating
              Memories,” is the foundation of every tour. Each journey is
              designed to deliver:
            </p>
            <ul className="list-disc pb-4 pl-5">
              <li className="text-primary font-light lg:text-base">
                Safety and comfort
              </li>
              <li className="text-primary font-light lg:text-base">
                Smooth travel flow
              </li>
              <li className="text-primary font-light lg:text-base">
                Enjoyable experiences
              </li>
              <li className="text-primary font-light lg:text-base">
                Authentic Balinese storytelling
              </li>
            </ul>
            <p className="text-primary pb-4 font-light lg:text-base">
              Whether it’s a romantic couple’s trip, a family holiday, a luxury
              escape, or an adventure tour, every experience is thoughtfully
              curated.
            </p>
            <p className="text-primary font-normal lg:text-base">
              More Than a Tour — A Local Friend in Bali
            </p>
            <p className="text-primary pb-4 font-light lg:text-base">
              For Dewa, guests are never treated as customers, but as friends
              visiting his home island. His goal is to ensure every traveler
              feels comfortable, cared for, and confident throughout their
              journey in Bali.
            </p>
            <p className="text-primary pb-4 font-light lg:text-base">
              Through Bali Smile Trip & Travel, he continues to share Bali with
              honesty, professionalism, and heartfelt hospitality.
            </p>
          </div>

          {/* Why choose us*/}
          <div>
            <p className="text-primary pb-6 font-normal lg:text-3xl">
              Here is why Bali Smile Trip & Travel is the perfect choice for
              you:
            </p>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-12 w-12 items-center justify-center rounded-full lg:text-3xl">
                    1
                  </p>
                  <p className="lg:text-3xl">
                    Local Experts, Authentic Bali Experiences
                  </p>
                </div>
                <p className="text-primary font-light lg:text-base">
                  We are local Balinese professionals who truly understand the
                  island its culture, traditions, and hidden gems beyond the
                  usual tourist routes. With us, you don’t just visit Bali; you
                  experience it authentically.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-12 w-12 items-center justify-center rounded-full lg:text-3xl">
                    2
                  </p>
                  <p className="lg:text-3xl">
                    Creating Memories, Not Just Photos
                  </p>
                </div>
                <p className="text-primary font-light lg:text-base">
                  This is more than a tagline it’s our philosophy. Every journey
                  is carefully designed to create meaningful moments, emotional
                  connections, and lasting memories, not just great photos.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-12 w-12 items-center justify-center rounded-full lg:text-3xl">
                    3
                  </p>
                  <p className="lg:text-3xl">
                    Tailor-Made Journeys for Every Traveler
                  </p>
                </div>
                <p className="text-primary font-light lg:text-base">
                  No two travelers are the same and neither are our tours. We
                  create fully customized itineraries for:
                </p>
                <ul className="list-disc pb-4 pl-5">
                  <li className="text-primary font-light lg:text-base">
                    Romantic escapes for couples
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Safe and enjoyable trips for families
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Exclusive, refined experiences for luxury travelers
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Thrilling routes for adventure lovers
                  </li>
                </ul>
                <p className="text-primary font-light lg:text-base">
                  Your interests, pace, and comfort always come first.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-12 w-12 items-center justify-center rounded-full lg:text-3xl">
                    4
                  </p>
                  <p className="lg:text-3xl">
                    Exploring Destinations, Creating Memories
                  </p>
                </div>
                <p className="text-primary font-light lg:text-base">
                  We are not just drivers. We are certified guides and hosts,
                  who are:
                </p>
                <ul className="list-disc pb-4 pl-5">
                  <li className="text-primary font-light lg:text-base">
                    Experienced and knowledgeable
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Fluent in English
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Friendly, patient, and attentive
                  </li>
                </ul>
                <p className="text-primary font-light lg:text-base">
                  We ensure every journey is delivered through our SMILE Journey
                  standard.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-12 w-12 items-center justify-center rounded-full lg:text-3xl">
                    5
                  </p>
                  <p className="lg:text-3xl">Comfortable & Premium Vehicles</p>
                </div>
                <p className="text-primary font-light lg:text-base">
                  Travel in comfort with our well maintained vehicles:
                </p>
                <ul className="list-disc pb-4 pl-5">
                  <li className="text-primary font-light lg:text-base">
                    Clean, modern interiors
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Cold air-conditioning
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Ideal for both short city rides and long scenic journeys
                  </li>
                </ul>
                <p className="text-primary font-light lg:text-base">
                  Comfort is a key part of a great travel experience.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-12 w-12 items-center justify-center rounded-full lg:text-3xl">
                    6
                  </p>
                  <p className="lg:text-3xl">
                    Professional, Certified & Caring Guides
                  </p>
                </div>
                <p className="text-primary font-light lg:text-base">
                  Transparency is our promise. What we quote is what you pay—no
                  surprises, no hidden fees. We believe true quality speaks for
                  itself.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-12 w-12 items-center justify-center rounded-full lg:text-3xl">
                    7
                  </p>
                  <p className="lg:text-3xl">
                    Honest Pricing with No Hidden Costs
                  </p>
                </div>
                <p className="text-primary pb-4 font-light lg:text-base">
                  Our guests come from around the world, and many return or
                  recommend us. Their positive experiences are reflected in our
                  Google Reviews. Real Review, Real Experience.
                </p>
                <p className="text-primary font-light lg:text-base">
                  Read what our guests say about us!
                </p>
                <Link
                  to="https://maps.app.goo.gl/r8nSb1v5k6963Wp86?g_st=ipc"
                  target="_blank"
                  className="text-primary font-light underline hover:cursor-pointer lg:text-base"
                >
                  https://maps.app.goo.gl/r8nSb1v5k6963Wp86?g_st=ipc
                </Link>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-12 w-12 items-center justify-center rounded-full lg:text-3xl">
                    8
                  </p>
                  <p className="lg:text-3xl">
                    More Than a Tour — We Truly Cares
                  </p>
                </div>
                <p className="text-primary font-light lg:text-base">
                  We care about:
                </p>
                <ul className="list-disc pb-4 pl-5">
                  <li className="text-primary font-light lg:text-base">
                    Your experience and comfort
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Respecting Balinese culture and traditions
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Supporting local communities
                  </li>
                  <li className="text-primary font-light lg:text-base">
                    Preserving Bali’s natural beauty
                  </li>
                </ul>
                <p className="text-primary font-light lg:text-base">
                  Travel with purpose, not just destinations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder image */}
        <div className="flex flex-col items-center gap-y-2">
          <img src={dewa} className="w-fit lg:h-80" />
          <div className="flex flex-col">
            <p className="text-primary text-center font-normal lg:text-base">
              Dewa Wahya
            </p>
            <p className="text-primary text-center font-light lg:text-base">
              Founder & Local Travel Expert
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex w-full flex-row items-center justify-around gap-x-2 px-12 pb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-yellow flex h-36 w-54 flex-col items-center justify-center gap-y-2 rounded-xs"
          >
            <p className="text-primary text-center font-semibold lg:text-3xl">
              {stat.amount}
            </p>
            <p className="text-primary text-center font-light lg:text-base">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
      <Cta />
    </div>
  );
}
