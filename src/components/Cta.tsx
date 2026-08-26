import Button from "./Button";
import ctaImage from "../assets/cta.webp";
import { useTranslation } from "react-i18next";

export default function Cta() {
  const { t } = useTranslation();

  return (
    <div className="relative flex h-fit items-center justify-center py-12">
      <img
        src={ctaImage}
        alt="CTA Image"
        className="absolute h-full w-full object-cover brightness-80"
      />
      <div className="relative flex w-full flex-col items-center justify-center gap-y-4 lg:w-[80%] lg:flex-row lg:justify-around lg:gap-0">
        <div className="flex w-[90%] flex-col items-center gap-y-2 lg:w-[60%] lg:items-start 2xl:w-[60%]">
          <p className="text-background text-center text-2xl sm:text-3xl lg:text-left xl:text-4xl">
            {t("home.cta.title")}
          </p>
          <p className="text-background w-full text-center text-sm font-light sm:text-base lg:text-left">
            {t("home.cta.description")}
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Button>{t("home.cta.planJourney")}</Button>
          <Button variant="secondary">{t("home.cta.contactWhatsapp")}</Button>
        </div>
      </div>
    </div>
  );
}
