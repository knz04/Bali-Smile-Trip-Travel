import Button from "./Button";
import USFlag from "../assets/us.png";
import IDFlag from "../assets/id.png";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Link } from "react-router";

export default function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            to="/gallery"
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Gallery
          </Link>
          <Link
            to="/packages"
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline"
          >
            Packages
          </Link>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
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
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline sm:text-sm"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline sm:text-sm"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline sm:text-sm"
          >
            Gallery
          </Link>
          <Link
            to="/packages"
            className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline sm:text-sm"
          >
            Packages
          </Link>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline sm:text-sm">
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
                  <p className="font-light sm:text-sm">Bahasa Indonesia</p>
                </div>
                <div className="flex flex-row items-center gap-x-2 px-4 py-2 whitespace-nowrap transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200">
                  <img src={USFlag} alt="English (US)" className="h-6 w-auto" />
                  <p className="font-light sm:text-sm">English (US)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
