import { BookOpenText, Gem, Heart, Lightbulb, ShieldCheck } from "lucide-react";

const SmileStandard = [
  {
    icon: ShieldCheck,
    title: "Safe",
    subtitle: "Your safety is our highest priority throughout the journey.",
  },
  {
    icon: Lightbulb,
    title: "Mindful & Smooth",
    subtitle:
      "Thoughtfully planned, seamless, and stress-free travel experience.",
  },
  {
    icon: BookOpenText,
    title: "Insightful & Story-Driven",
    subtitle:
      "Every journey is enriched with meaningful stories, culture, and local wisdom.",
  },
  {
    icon: Gem,
    title: "Luxury Comfort",
    subtitle: "Comfortable, refined, and personalized service at every step.",
  },
  {
    icon: Heart,
    title: " Enjoyable & Enticing",
    subtitle:
      "A joyful journey that leaves lasting memories and deeper connection, enriched with authentic Balinese storytelling",
  },
];

export default function Smile() {
  return (
    <div className="flex h-fit flex-col items-center justify-center gap-y-12 pb-12 lg:pb-0 2xl:h-[70vh]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-start text-2xl sm:text-center sm:text-3xl xl:text-4xl">
          The SMILE Journey Standard
        </p>
        <p className="w-[90%] text-center text-sm font-light sm:w-full lg:text-base">
          We ensure every journey is delivered through our SMILE Journey
          standard.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-x-2 2xl:gap-x-6">
        {SmileStandard.map((item) => (
          <div
            key={item.title}
            className="bg-yellow flex h-[20vh] w-full flex-col items-center justify-center gap-y-4 rounded-xs px-2 sm:h-[16vh] lg:h-[60vh] 2xl:h-[40vh]"
          >
            <item.icon className="size-12 stroke-1 lg:size-16 xl:size-24" />
            <p className="text-center text-xl sm:text-2xl xl:text-3xl">
              {item.title}
            </p>
            <p className="w-[80%] text-center text-sm font-light lg:text-base">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
