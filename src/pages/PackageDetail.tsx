import { useParams } from "react-router";
import PackageHero from "../components/packages/PackageHero";
import { packages } from "../data/packages";
import { ArrowRight, Car, Check, SquareCheck } from "lucide-react";
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
      <div className="flex w-[90%] flex-col gap-y-12">
        <div className="flex flex-col">
          <p className="text-xl sm:text-2xl xl:text-3xl">Tour Overview</p>
          <p className="text-sm font-light lg:text-base">
            The Ubud Essential Tour by Bali Smile Trip & Travel is a private
            Bali day tour designed to reveal the true soul of Ubud. Guided by a
            local Balinese tour guide, this experience combines culture, nature,
            and authentic local encounters delivered in a safe, smooth, and
            comfortable journey. Perfect for couples, families, luxury
            travelers, and adventure seekers who want more than just
            sightseeing.
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-xl sm:text-2xl xl:text-3xl">Tour Highlights</p>
          <ul className="list-disc pb-4 pl-5">
            <li className="text-primary text-sm font-light lg:text-base">
              Traditional Balinese Silver Making Class in Ubud
            </li>
            <li className="text-primary text-sm font-light lg:text-base">
              Traditional Balinese Batik Painting Class in Ubud
            </li>
            <li className="text-primary text-sm font-light lg:text-base">
              Tegalalang Rice Terrace & Swing (optional)
            </li>
            <li className="text-primary text-sm font-light lg:text-base">
              Hidden waterfall surrounded by nature
            </li>
            <li className="text-primary text-sm font-light lg:text-base">
              Visit to an Old Traditional Balinese House Compound
            </li>
            <li className="text-primary text-sm font-light lg:text-base">
              Luwak (Civet) Coffee Plantation experience
            </li>
            <li className="text-primary text-sm font-light lg:text-base">
              Sacred river & natural scenery
            </li>
            <li className="text-primary text-sm font-light lg:text-base">
              Traditional temple visit with cultural storytelling
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-xl sm:text-2xl xl:text-3xl">Sample Itinerary</p>
          <p className="text-sm font-light lg:text-base">
            (Flexible & Private)
          </p>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-x-2">
              <Car size={80} className="stroke-1" />
              <p className="text-sm font-light lg:text-base">
                Pick-up at Hotel/Villa
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-x-2">
                <ArrowRight size={24} className="stroke-2" />
                <p className="text-sm font-light lg:text-base">
                  Silver Making Workshop
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <ArrowRight size={24} className="stroke-2" />
                <p className="text-sm font-light lg:text-base">
                  Silver Making Workshop
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <ArrowRight size={24} className="stroke-2" />
                <p className="text-sm font-light lg:text-base">
                  Silver Making Workshop
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <ArrowRight size={24} className="stroke-2" />
                <p className="text-sm font-light lg:text-base">
                  Silver Making Workshop
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <ArrowRight size={24} className="stroke-2" />
                <p className="text-sm font-light lg:text-base">
                  Silver Making Workshop
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <ArrowRight size={24} className="stroke-2" />
                <p className="text-sm font-light lg:text-base">
                  Silver Making Workshop
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-x-2">
              <Car size={80} className="stroke-1" />
              <p className="text-sm font-light lg:text-base">
                Drop-off at Hotel/Villa
              </p>
            </div>
          </div>
          <p className="text-sm font-light italic lg:text-base">
            The itinerary is fully customizable based on your interests and
            travel pace.
          </p>
        </div>

        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col">
            <p className="text-xl sm:text-2xl xl:text-3xl">Sample Itinerary</p>
            <p className="text-sm font-light lg:text-base">
              (Flexible & Private)
            </p>
          </div>
          <div className="flex flex-col justify-between gap-8 lg:flex-row">
            <div className="flex flex-col pt-6">
              <p className="text-sm lg:text-base">Standard Private Tour</p>
              <p className="text-sm font-light lg:text-base">
                IDR 975,000 / car
              </p>
              <p className="text-sm font-light lg:text-base">
                (Avanza / Xenia / Daihatsu Terios/ Suzuki Ertiga / Nissan Grand
                Livina VL / Nissan Grand Livina X-Gear - up to 7 passengers)
              </p>
              <img
                src={"https://placehold.co/600x400?text=Placeholder"}
                alt="Vehicle Image"
                className="h-32 w-full shrink-0 object-cover lg:h-48"
              />
            </div>
            <div className="bg-primary hidden h-90 w-px self-stretch lg:block"></div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold lg:text-base">
                Vehicle Upgrade Options
              </p>
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="flex flex-col">
                  <p className="text-sm lg:text-base">Standard Private Tour</p>
                  <p className="text-sm font-light lg:text-base">
                    IDR 975,000 / car
                  </p>
                  <p className="text-sm font-light lg:text-base">
                    (Avanza / Xenia / Daihatsu Terios/ Suzuki Ertiga / Nissan
                    Grand Livina VL / Nissan Grand Livina X-Gear - up to 7
                    passengers)
                  </p>
                  <img
                    src={"https://placehold.co/600x400?text=Placeholder"}
                    alt="Vehicle Image"
                    className="h-32 w-full shrink-0 object-cover lg:h-48"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-base">Standard Private Tour</p>
                  <p className="text-sm font-light lg:text-base">
                    IDR 975,000 / car
                  </p>
                  <p className="text-sm font-light lg:text-base">
                    (Avanza / Xenia / Daihatsu Terios/ Suzuki Ertiga / Nissan
                    Grand Livina VL / Nissan Grand Livina X-Gear - up to 7
                    passengers)
                  </p>
                  <img
                    src={"https://placehold.co/600x400?text=Placeholder"}
                    alt="Vehicle Image"
                    className="h-32 w-full shrink-0 object-cover lg:h-48"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm font-light italic lg:text-base">
            All prices are per vehicle, not per person perfect for couples,
            families, and private groups.
          </p>
        </div>

        <div className="flex w-full flex-col gap-y-4 lg:flex-row">
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="flex flex-row items-center gap-x-2">
              <SquareCheck size={48} className="stroke-2 text-green-700" />
              <p className="text-xl text-green-700 sm:text-2xl xl:text-3xl">
                Tour Inclusions
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="flex flex-row items-center gap-x-2">
              <SquareCheck size={48} className="stroke-2 text-red-800" />
              <p className="text-xl text-red-800 sm:text-2xl xl:text-3xl">
                Tour Inclusions
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  SMILE Journey Service Standard
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-y-4">
          <div className="grid w-full grid-cols-3 gap-4">
            <img
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt="Vehicle Image"
              className="h-32 w-full shrink-0 object-cover lg:h-48"
            />
            <img
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt="Vehicle Image"
              className="h-32 w-full shrink-0 object-cover lg:h-48"
            />
            <img
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt="Vehicle Image"
              className="h-32 w-full shrink-0 object-cover lg:h-48"
            />
            <img
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt="Vehicle Image"
              className="h-32 w-full shrink-0 object-cover lg:h-48"
            />
            <img
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt="Vehicle Image"
              className="h-32 w-full shrink-0 object-cover lg:h-48"
            />
            <img
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt="Vehicle Image"
              className="h-32 w-full shrink-0 object-cover lg:h-48"
            />
          </div>
          <Button variant="secondary">View More</Button>
        </div>

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
