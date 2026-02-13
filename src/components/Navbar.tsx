import Button from "./Button";
import USFlag from "../assets/us.png";
import IDFlag from "../assets/id.png";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (event.target instanceof Node) {
        // Close language dropdown
        if (
          isLanguageOpen &&
          languageRef.current &&
          !languageRef.current.contains(event.target)
        ) {
          setIsLanguageOpen(false);
        }

        // Close mobile menu
        if (
          isMenuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target)
        ) {
          setIsMenuOpen(false);
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
      <div className="flex w-full flex-row items-center justify-between gap-x-4 px-4 py-3 lg:w-[90%] lg:gap-x-0">
        <div className="flex flex-row items-center justify-between gap-x-2 hover:cursor-pointer">
          <img
            src="/logo-transparent.png"
            alt="Logo"
            className="h-12 w-auto lg:h-20"
          />
          <p className="font-medium uppercase">Bali Smile Trip & Travel</p>
        </div>
        <div className="hidden flex-row items-center justify-between gap-x-8 lg:flex">
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            Home
          </p>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            About
          </p>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            Gallery
          </p>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            Packages
          </p>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            Contact
          </p>
        </div>

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          ref={ref}
          className={clsx(
            "flex rounded-sm p-2 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200 lg:hidden",
            isMenuOpen && "bg-neutral-200",
          )}
        >
          <Menu color="#1c1b18" size={24} />
        </div>
        <div className="hidden flex-row items-center justify-between gap-x-4 lg:flex">
          <Button>Book Now</Button>
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
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="bg-yellow flex w-full flex-col items-center gap-y-2 px-4 py-2 lg:hidden"
        >
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            Home
          </p>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            About
          </p>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            Gallery
          </p>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            Packages
          </p>
          <p className="font-light transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
            Contact
          </p>

          <Button variant="secondary">Book Now</Button>
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
      )}
    </nav>
  );
}
