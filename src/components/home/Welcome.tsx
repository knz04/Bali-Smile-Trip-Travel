import Button from "../Button";
import welcome from "../../assets/welcome.webp";
import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-8 py-2 sm:h-[60vh] lg:h-screen lg:flex-row lg:gap-x-8 2xl:h-[80vh]">
      <div className="flex">
        <img src={welcome} alt="Welcome" className="w-full sm:h-64 lg:h-96" />
      </div>
      <div className="flex w-[90%] flex-col gap-y-4 lg:w-[40%]">
        <p className="text-start text-2xl sm:text-3xl xl:text-4xl">
          {t("home.welcome.title")}
        </p>
        <p className="pt-2 text-sm font-light lg:max-w-[75%] lg:text-base">
          {t("home.welcome.paragraph1")}
        </p>
        <p className="pt-2 text-sm font-light lg:max-w-[75%] lg:text-base">
          {t("home.welcome.paragraph2")}
        </p>
        <Button>{t("home.welcome.learnMore")}</Button>
      </div>
    </div>
  );
}
