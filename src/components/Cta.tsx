import Button from "./Button";
import ctaImage from "../assets/cta.webp";

export default function Cta() {
  return (
    <div className="relative flex h-fit items-center justify-center py-12 lg:h-[24vh] lg:p-0">
      <img
        src={ctaImage}
        alt="CTA Image"
        className="absolute h-full w-full object-cover brightness-80"
      />
      <div className="relative flex w-full flex-col items-center justify-center gap-y-4 lg:w-[80%] lg:flex-row lg:justify-around lg:gap-0">
        <div className="lg:items-left flex w-[90%] flex-col items-center gap-y-2 lg:w-[50%]">
          <p className="text-background text-4xl">
            Let Us Be Your Local Friend in Bali
          </p>
          <p className="text-background w-full text-center text-lg font-light lg:w-[60%] lg:text-left">
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
