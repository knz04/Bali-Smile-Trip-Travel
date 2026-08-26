import ubudEssential from "../../assets/packages/ubud-essential.webp";
import northBali from "../../assets/packages/north-bali.webp";
import eastBali from "../../assets/packages/east-bali.webp";
import southBali from "../../assets/packages/south-bali.webp";
import andMore from "../../assets/packages/and-more.webp";
import Button from "../Button";
import { useTranslation } from "react-i18next";

export default function PackageOverview() {
  const { t } = useTranslation();

  const packages = [
    { id: "ubud", src: ubudEssential },
    { id: "north", src: northBali },
    { id: "east", src: eastBali },
    { id: "south", src: southBali },
    { id: "more", src: andMore },
  ] as const;

  return (
    <div className="flex h-[150vh] flex-col items-center justify-center gap-y-12 sm:h-[120vh]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl sm:text-3xl xl:text-4xl">
          {t("home.packages.title")}
        </p>
        <p className="w-[90%] text-center text-sm font-light sm:w-full lg:text-base">
          {t("home.packages.subtitle")}
        </p>
      </div>

      {/* Mobile: simple flex-col list */}
      <div className="flex w-full flex-col lg:hidden">
        {packages.map(({ id, src }) => (
          <div
            key={id}
            className="relative flex h-48 w-full cursor-pointer flex-col items-center justify-center"
          >
            <img
              src={src}
              alt={t(`home.packages.items.${id}`)}
              className="absolute h-full w-full object-cover brightness-75"
            />
            <p className="text-background relative z-10 text-center text-xl font-semibold">
              {t(`home.packages.items.${id}`)}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: original grid layout */}
      <div className="hidden w-full grid-cols-2 lg:grid">
        <div className="group relative flex h-full w-full flex-col items-center justify-center gap-y-2">
          <img
            src={ubudEssential}
            alt={t("home.packages.items.ubud")}
            className="absolute h-full w-full object-cover brightness-80"
          />
          <p className="text-background relative z-10 translate-y-4 font-semibold transition-transform duration-300 group-hover:-translate-y-2 lg:text-start lg:text-3xl xl:text-4xl">
            {t("home.packages.items.ubud")}
          </p>
          <Button className="relative z-10 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {t("home.packages.viewDetails")}
          </Button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          {[
            { id: "north", src: northBali },
            { id: "east", src: eastBali },
            { id: "south", src: southBali },
            { id: "more", src: andMore },
          ].map(({ id, src }) => (
            <div
              key={id}
              className="group relative flex aspect-square h-full w-full flex-col items-center justify-center gap-y-2"
            >
              <img
                src={src}
                alt={t(`home.packages.items.${id}`)}
                className="absolute h-full w-full object-cover brightness-80"
              />
              <p className="text-background relative z-10 translate-y-4 font-semibold transition-transform duration-300 group-hover:-translate-y-2 lg:text-start lg:text-3xl xl:text-4xl">
                {t(`home.packages.items.${id}`)}
              </p>
              <Button className="relative z-10 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {t("home.packages.viewDetails")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
