interface VehicleProps {
  main: {
    title: string;
    price: string;
    description: string;
    image: string;
  };
  upgrade: {
    title: string;
    price: string;
    description: string;
    image: string;
  }[];
}

export default function Vehicle({ main, upgrade }: VehicleProps) {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col">
        <p className="text-xl sm:text-2xl xl:text-3xl">Vehicle Options</p>
      </div>
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="flex flex-col pt-6">
          <p className="text-sm lg:text-base">{main.title}</p>
          <p className="text-sm font-light lg:text-base">{main.price}</p>
          <p className="text-sm font-light lg:text-base">{main.description}</p>
          <img
            src={main.image}
            alt="Vehicle Image"
            className="h-32 w-full shrink-0 object-cover lg:h-48"
          />
        </div>
        <div className="bg-primary hidden h-90 w-px self-stretch lg:block"></div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold lg:text-base">
            Vehicle Upgrade Options
          </p>
          <div className="flex flex-col gap-8 lg:flex-row">
            {upgrade.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <p className="text-sm lg:text-base">{item.title}</p>
                <p className="text-sm font-light lg:text-base">{item.price}</p>
                <p className="text-sm font-light lg:text-base">
                  {item.description}
                </p>
                <img
                  src={item.image}
                  alt="Vehicle Image"
                  className="h-32 w-full shrink-0 object-cover lg:h-48"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm font-light italic lg:text-base">
        All prices are per vehicle, not per person perfect for couples,
        families, and private groups.
      </p>
    </div>
  );
}
