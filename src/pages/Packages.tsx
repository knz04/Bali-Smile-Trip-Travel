import { Pin } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import PackageCard from "../components/packages/PackageCard";
import transportServiceImage1 from "../assets/packages/transport-service-1.JPG";
import transportServiceImage2 from "../assets/packages/transport-service-2.PNG";
import { packages } from "../data/packages";
import usePageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";

export default function Packages() {
  const { t } = useTranslation();
  usePageTitle(t("packages.pageTitle"));

  const notesItems = t("packages.notes.items", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <SectionHeader
        heading={t("packages.header.heading")}
        subheading={t("packages.header.subheading")}
      />

      {/* Important notes */}
      <div className="flex flex-col items-center justify-center gap-y-2 py-12">
        <div className="flex flex-row items-center justify-center gap-x-2">
          <Pin />
          <p>{t("packages.notes.title")}</p>
        </div>
        <ul className="list-disc pb-4 pl-5">
          {notesItems.map((item, i) => (
            <li key={i} className="text-sm font-light lg:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid w-full grid-cols-1 items-center justify-items-center gap-y-12 pb-12 md:grid-cols-2">
        {packages.map((pack, index) => (
          <PackageCard
            key={index}
            id={index}
            image={pack.image}
            title={t(`packages.items.${pack.id}.title`)}
            description={t(`packages.items.${pack.id}.description`)}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-y-2 py-12">
        {" "}
        <img
          src={transportServiceImage1}
          alt="Transport Service"
          className="h-fit w-fit"
        />
        <img
          src={transportServiceImage2}
          alt="Transport Service"
          className="h-fit w-fit"
        />
      </div>
    </>
  );
}
