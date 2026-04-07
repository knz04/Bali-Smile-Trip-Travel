import Button from "./Button";
import USFlag from "../assets/us.png";
import IDFlag from "../assets/id.png";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement | null>(null);
  const mobileLanguageRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (event.target instanceof Node) {
        if (
          isLanguageOpen &&
          languageRef.current &&
          !languageRef.current.contains(event.target) &&
          (!mobileLanguageRef.current ||
            !mobileLanguageRef.current.contains(event.target))
        ) {
          setIsLanguageOpen(false);
        }

        if (
          isMenuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target)
        ) {
          setIsMenuOpen(false);
          setIsLanguageOpen(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpen, isMenuOpen]);

  return (
    <nav className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-row items-center justify-around gap-x-4 py-3 lg:gap-x-0">
        {/*Logo*/}
        <div className="flex flex-row items-center justify-between gap-x-2 hover:cursor-pointer">
          <img
            src="/logo-transparent.png"
            alt="Logo"
            className="h-12 w-auto lg:h-20"
          />
          <Link
            to="/"
            className="font-medium uppercase sm:text-sm md:text-base"
          >
            Bali Smile Trip & Travel
          </Link>
        </div>
        {/*Nav*/}
        <div className="hidden flex-row items-center justify-between gap-x-8 lg:flex">
          <Link
            to="/"
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            About
          </Link>
          <Link
            to="/packages"
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Packages
          </Link>
          <Link
            to="/gallery"
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Gallery
          </Link>
          <p
            onClick={() => setIsContactOpen(true)}
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Contact
          </p>
        </div>
        {/*Book now and language*/}
        <div className="hidden flex-row items-center justify-between gap-x-4 lg:flex">
          <Link to="/book">
            <Button>Book Now</Button>
          </Link>
          <div
            ref={languageRef}
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="relative flex flex-row items-center justify-between gap-x-1 rounded-sm p-2 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200"
          >
            <img src={USFlag} alt="English (US)" className="h-6 w-auto" />
            {isLanguageOpen ? (
              <ChevronUp color="#1c1b18" size={24} />
            ) : (
              <ChevronDown color="#1c1b18" size={24} />
            )}

            {isLanguageOpen && (
              <div className="bg-background absolute top-12 right-0 z-50 flex w-max flex-col rounded-sm border border-neutral-200 shadow-lg">
                <div className="flex flex-row items-center gap-x-2 px-4 py-2 whitespace-nowrap transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200">
                  <img
                    src={IDFlag}
                    alt="Bahasa Indonesia"
                    className="h-6 w-auto"
                  />
                  <p className="font-light">Bahasa Indonesia</p>
                </div>
                <div className="flex flex-row items-center gap-x-2 px-4 py-2 whitespace-nowrap transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200">
                  <img src={USFlag} alt="English (US)" className="h-6 w-auto" />
                  <p className="font-light">English (US)</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={clsx(
            "flex rounded-sm p-2 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200 lg:hidden",
            isMenuOpen && "bg-neutral-200",
          )}
        >
          <Menu color="#1c1b18" size={24} />
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="bg-yellow flex w-full flex-col items-center gap-y-2 px-4 py-2 lg:hidden"
        >
          <Link
            to="/"
            className="text-sm font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            About
          </Link>
          <Link
            to="/packages"
            className="text-sm font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Packages
          </Link>
          <Link
            to="/gallery"
            className="text-sm font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Gallery
          </Link>
          <p
            onClick={() => {
              setIsContactOpen(true);
              setIsMenuOpen(false);
            }}
            className="text-sm font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Contact
          </p>

          <Link to="/book">
            {" "}
            <Button variant="secondary">Book Now</Button>
          </Link>
          <div
            ref={mobileLanguageRef}
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="relative flex flex-row items-center justify-between gap-x-1 rounded-sm p-2 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200"
          >
            <img src={USFlag} alt="English (US)" className="h-6 w-auto" />
            {isLanguageOpen ? (
              <ChevronUp color="#1c1b18" size={24} />
            ) : (
              <ChevronDown color="#1c1b18" size={24} />
            )}

            {isLanguageOpen && (
              <div className="bg-background absolute top-12 left-1/2 z-50 flex w-max -translate-x-1/2 flex-col rounded-sm border border-neutral-200 shadow-lg">
                <div className="flex flex-row items-center gap-x-2 px-4 py-2 whitespace-nowrap transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200">
                  <img
                    src={IDFlag}
                    alt="Bahasa Indonesia"
                    className="h-6 w-auto"
                  />
                  <p className="text-sm font-light">Bahasa Indonesia</p>
                </div>
                <div className="flex flex-row items-center gap-x-2 px-4 py-2 whitespace-nowrap transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200">
                  <img src={USFlag} alt="English (US)" className="h-6 w-auto" />
                  <p className="text-sm font-light">English (US)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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

            <h2 className="text-primary text-3xl xl:text-4xl">Contact Us</h2>
            <p className="text-primary mt-1 text-sm font-light lg:text-base">
              How would you like to contact us?
            </p>

            <div className="mt-6 flex w-full flex-col gap-3">
              <Link to="https://wa.me/6281238906395" target="_blank">
                <Button className="w-full text-center">
                  Contact via WhatsApp (Fast response)
                </Button>
              </Link>
              <Link to="mailto:balismiletrip2025@gmail.com" target="_blank">
                <Button className="w-full text-center">
                  Contact via Email
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
