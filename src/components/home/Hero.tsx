import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-home.webp";
import Button from "../Button";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-[calc(100vh-72px)] lg:h-[calc(100vh-104px)]">
      <img
        src={heroImage}
        alt="Hero Image"
        className="absolute h-full w-full object-cover brightness-80"
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-y-2">
        <p className="text-background text-center text-4xl font-semibold sm:text-5xl xl:text-6xl">
          {t("home.hero.titleLine1")}
        </p>
        <p className="text-background text-center text-4xl font-semibold sm:text-5xl xl:text-6xl">
          {t("home.hero.titleLine2")}
        </p>
        <p className="text-background text-center text-2xl font-normal sm:text-3xl xl:text-4xl">
          {t("home.hero.subtitle")}
        </p>
        <p className="text-background text-center text-sm font-light lg:text-base">
          {t("home.hero.description")}
        </p>
        <div className="flex flex-col items-center justify-center gap-x-4 gap-y-2 pt-2 sm:flex-row">
          <Link to="/book">
            <Button>{t("home.hero.ctaBook")}</Button>
          </Link>
          <Link to="/packages">
            <Button>{t("home.hero.ctaPackages")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
