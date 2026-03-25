interface PricingOption {
  title: string;
  price: string;
}

interface PricingCategory {
  name: string;
  options: PricingOption[];
}

interface PricingProps {
  title: string;
  options?: PricingOption[];
  categories?: PricingCategory[];
}

export default function Pricing({ title, options, categories }: PricingProps) {
  return (
    <div className="flex flex-col">
      <p className="text-xl sm:text-2xl xl:text-3xl">{title}</p>

      {/* Flat options (most packages) */}
      {options && (
        <ul className="list-disc pb-4 pl-5">
          {options.map((option, index) => (
            <li
              key={index}
              className="text-primary text-sm font-light lg:text-base"
            >
              {option.title} — {option.price}
            </li>
          ))}
        </ul>
      )}

      {/* Nested categories (Nusa Penida) */}
      {categories && (
        <div className="flex flex-col gap-y-4 pb-4">
          {categories.map((category, index) => (
            <div key={index}>
              <p className="text-base font-medium sm:text-lg">
                {category.name}
              </p>
              <ul className="list-disc pl-5">
                {category.options.map((option, i) => (
                  <li
                    key={i}
                    className="text-primary text-sm font-light lg:text-base"
                  >
                    {option.title} — {option.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
