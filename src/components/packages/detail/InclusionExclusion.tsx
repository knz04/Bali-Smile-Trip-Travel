import { Check, SquareCheck, X } from "lucide-react";

interface InclusionExclusionProps {
  inclusions?: string[];
  exclusions?: string[];
}

export default function InclusionExclusion({
  inclusions = [],
  exclusions = [],
}: InclusionExclusionProps) {
  if (!inclusions.length && !exclusions.length) return null;

  return (
    <div className="flex w-full flex-col gap-y-4 lg:flex-row">
      {inclusions.length > 0 && (
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="flex flex-row items-center gap-x-2">
            <SquareCheck size={48} className="stroke-2 text-green-700" />
            <p className="text-xl text-green-700 sm:text-2xl xl:text-3xl">
              Tour Inclusions
            </p>
          </div>
          <div className="flex flex-col">
            {inclusions.map((inclusion, index) => (
              <div key={index} className="flex flex-row items-center gap-x-2">
                <Check size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  {inclusion}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {exclusions.length > 0 && (
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="flex flex-row items-center gap-x-2">
            <SquareCheck size={48} className="stroke-2 text-red-800" />
            <p className="text-xl text-red-800 sm:text-2xl xl:text-3xl">
              Tour Exclusions
            </p>
          </div>
          <div className="flex flex-col">
            {exclusions.map((exclusion, index) => (
              <div key={index} className="flex flex-row items-center gap-x-2">
                <X size={24} className="stroke-2" />
                <p className="text-primary text-sm font-light lg:text-base">
                  {exclusion}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
