import { useState } from "react";
import Button from "./Button";
import ctaImage from "../assets/cta.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function Cta() {
  const { t } = useTranslation();
  const [isContactOpen, setIsContactOpen] = useState(false);

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
          <Link to="/book">
            <Button>{t("home.cta.planJourney")}</Button>
          </Link>
          <Button variant="secondary" onClick={() => setIsContactOpen(true)}>
            {t("home.cta.contactWhatsapp")}
          </Button>
        </div>
      </div>

      {/* Contact Dialog */}
      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-md bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsContactOpen(false)}
              className="text-primary absolute top-3 right-3 rounded-full p-1 transition hover:cursor-pointer"
            >
              <X size={14} />
            </button>

            <h2 className="text-primary text-3xl xl:text-4xl">
              {t("common.contactDialog.title")}
            </h2>
            <p className="text-primary mt-1 text-sm font-light lg:text-base">
              {t("common.contactDialog.subtitle")}
            </p>

            <div className="mt-6 flex w-full flex-col gap-3">
              <Link to="https://wa.me/6281238906395" target="_blank">
                <Button className="w-full text-center">
                  {t("common.contactDialog.whatsapp")}
                </Button>
              </Link>
              <Link to="mailto:balismiletrip2025@gmail.com" target="_blank">
                <Button className="w-full text-center">
                  {t("common.contactDialog.email")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
