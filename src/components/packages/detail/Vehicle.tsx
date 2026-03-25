interface VehicleOption {
  title: string;
  price: string;
  description?: string;
  image: string;
}

interface VehicleProps {
  main: VehicleOption;
  upgrade: VehicleOption[];
}

export default function Vehicle({ main, upgrade }: VehicleProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-xl sm:text-2xl xl:text-3xl">Vehicle Options</p>

      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        {/* Main Vehicle */}
        <div className="flex flex-col gap-y-2 lg:w-1/3">
          <img
            src={main.image}
            alt="Vehicle Image"
            className="h-120 w-full shrink-0 object-cover"
          />
          <p className="text-sm font-medium lg:text-base">{main.title}</p>
          <p className="text-sm font-light lg:text-base">{main.price}</p>
          {main.description && (
            <p className="text-sm font-light lg:text-base">
              {main.description}
            </p>
          )}
        </div>

        <div className="bg-primary hidden w-px self-stretch lg:block" />

        {/* Upgrade Options */}
        <div className="flex flex-col gap-y-2 lg:w-2/3">
          <p className="text-sm font-semibold lg:text-base">
            Vehicle Upgrade Options
          </p>
          <div className="flex flex-col gap-6 lg:flex-row">
            {upgrade.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-2 lg:w-1/2">
                <img
                  src={item.image}
                  alt="Vehicle Image"
                  className="h-120 w-full shrink-0 object-cover"
                />
                <p className="text-sm font-medium lg:text-base">{item.title}</p>
                <p className="text-sm font-light lg:text-base">{item.price}</p>
                {item.description && (
                  <p className="text-sm font-light lg:text-base">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm font-light italic lg:text-base">
        All prices are per vehicle, not per person — perfect for couples,
        families, and private groups.
      </p>
    </div>
  );
}
