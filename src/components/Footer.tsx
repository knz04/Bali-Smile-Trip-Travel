import { Mail, MapPin, X } from "lucide-react";
import whatsapp from "../assets/whatsapp.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-primary flex h-fit w-full items-center justify-center py-12">
      <div className="items-left flex w-[90%] flex-col gap-y-6 lg:flex-row lg:items-center lg:justify-around lg:gap-0">
        <div className="flex flex-col gap-y-6">
          <div className="flex w-fit flex-row items-center justify-between gap-x-2 hover:cursor-pointer">
            <img
              src="/logo-transparent.png"
              alt="Logo"
              className="h-12 w-auto lg:h-20"
            />
            <p className="text-background font-medium uppercase sm:text-sm md:text-base">
              Bali Smile Trip & Travel
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-background text-sm font-light lg:text-base">
              {t("footer.address")}
            </p>
            <div className="flex flex-row gap-x-2">
              <img src={whatsapp} className="h-6 w-6" />
              <Mail size={24} color="background" />
              <MapPin size={24} color="background" />
            </div>
          </div>
          <p className="text-background text-sm font-light lg:text-base">
            {t("footer.copyright")}
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <Link
            to="/"
            className="text-background text-sm font-light hover:cursor-pointer hover:underline lg:text-base"
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/about"
            className="text-background text-sm font-light hover:cursor-pointer hover:underline lg:text-base"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/packages"
            className="text-background text-sm font-light hover:cursor-pointer hover:underline lg:text-base"
          >
            {t("nav.packages")}
          </Link>
          <Link
            to="/gallery"
            className="text-background text-sm font-light hover:cursor-pointer hover:underline lg:text-base"
          >
            {t("nav.gallery")}
          </Link>
          <p
            onClick={() => setIsContactOpen(true)}
            className="text-background text-sm font-light hover:cursor-pointer hover:underline lg:text-base"
          >
            {t("nav.contact")}
          </p>
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
