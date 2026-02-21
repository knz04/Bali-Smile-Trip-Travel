import Button from "./Button";
import ctaImage from "../assets/cta.webp";

export default function Cta() {
  return (
    <div className="relative flex items-center justify-center sm:h-fit sm:py-12">
      <img
        src={ctaImage}
        alt="CTA Image"
        className="absolute h-full w-full object-cover brightness-80"
      />
      <div className="relative flex w-full flex-col items-center justify-center gap-y-4 lg:w-[80%] lg:flex-row lg:justify-around lg:gap-0">
        <div className="flex w-[90%] flex-col items-center gap-y-2 lg:w-[50%] lg:items-start 2xl:w-[60%]">
          <p className="text-background text-center sm:text-3xl lg:text-left xl:text-4xl">
            Let Us Be Your Local Friend in Bali
          </p>
          <p className="text-background w-full text-center font-light sm:text-base lg:text-left">
            Whether you seek romance, family bonding, luxury comfort, or
            adventurous exploration, Bali Smile Trip & Travel is here to create
            a journey you’ll remember forever.
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Button>Plan Your Journey</Button>
          <Button variant="secondary">Contact Us on WhatsApp</Button>
        </div>
      </div>
    </div>
  );
}
