import header from "../assets/header.webp";

interface SectionHeaderProps {
  heading: string;
  subheading: string;
}

export default function SectionHeader({
  heading,
  subheading,
}: SectionHeaderProps) {
  return (
    <div className="relative md:h-[24vh] lg:h-[40vh]">
      <img
        src={header}
        alt="Header"
        className="absolute h-full w-full object-cover brightness-50"
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-y-2">
        <p className="text-background text-center md:text-3xl">{heading}</p>
        <p className="text-background w-[80%] text-center text-sm font-light lg:w-[50%] lg:text-base">
          {subheading}
        </p>
      </div>
    </div>
  );
}
