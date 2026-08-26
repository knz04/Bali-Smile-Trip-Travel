import { BookOpenText, Gem, Heart, Lightbulb, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const SmileStandard = [
  { id: "safe", icon: ShieldCheck },
  { id: "mindful", icon: Lightbulb },
  { id: "insightful", icon: BookOpenText },
  { id: "luxury", icon: Gem },
  { id: "enjoyable", icon: Heart },
] as const;

export default function Smile() {
  const { t } = useTranslation();

  return (
    <div className="flex h-fit flex-col items-center justify-center gap-y-12 pb-12 lg:pb-0 2xl:h-[70vh]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-start text-2xl sm:text-center sm:text-3xl xl:text-4xl">
          {t("home.smile.title")}
        </p>
        <p className="w-[90%] text-center text-sm font-light sm:w-full lg:text-base">
          {t("home.smile.subtitle")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-x-2 2xl:gap-x-6">
        {SmileStandard.map((item) => (
          <div
            key={item.id}
            className="bg-yellow flex h-[20vh] w-full flex-col items-center justify-center gap-y-4 rounded-xs px-2 sm:h-[16vh] lg:h-[60vh] 2xl:h-[40vh]"
          >
            <item.icon className="size-12 stroke-1 lg:size-16 xl:size-24" />
            <p className="text-center text-xl sm:text-2xl xl:text-3xl">
              {t(`home.smile.items.${item.id}.title`)}
            </p>
            <p className="w-[80%] text-center text-sm font-light lg:text-base">
              {t(`home.smile.items.${item.id}.subtitle`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
