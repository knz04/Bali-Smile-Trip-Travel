import { Mail, MapPin } from "lucide-react";
import whatsapp from "../assets/whatsapp.png";

export default function Footer() {
  return (
    <div className="bg-primary flex h-fit w-full items-center justify-center py-12 xl:h-[24vh]">
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
            <p className="text-background font-light sm:text-sm lg:text-base">
              Jl. Chandra Ayu Gg. Sandat Blk. 1 No.12 1 B, Batubulan, Kec.
              Sukawati, Kabupaten Gianyar, Bali 80582
            </p>
            <div className="flex flex-row gap-x-2">
              <img src={whatsapp} className="h-6 w-6" />
              <Mail size={24} color="background" />
              <MapPin size={24} color="background" />
            </div>
          </div>
          <p className="text-background font-light sm:text-sm lg:text-base">
            Copyright &copy; 2026 Bali Smile Trip & Travel
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-background font-light hover:cursor-pointer hover:underline sm:text-sm lg:text-base">
            Home
          </p>
          <p className="text-background font-light hover:cursor-pointer hover:underline sm:text-sm lg:text-base">
            About
          </p>
          <p className="text-background font-light hover:cursor-pointer hover:underline sm:text-sm lg:text-base">
            Packages
          </p>
          <p className="text-background font-light hover:cursor-pointer hover:underline sm:text-sm lg:text-base">
            Gallery
          </p>
          <p className="text-background font-light hover:cursor-pointer hover:underline sm:text-sm lg:text-base">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
}
