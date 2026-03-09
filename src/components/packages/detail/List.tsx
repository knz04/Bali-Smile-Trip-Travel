interface ListProps {
  title: string;
  items: string[];
}

export default function List({ title, items }: ListProps) {
  return (
    <div className="flex flex-col">
      <p className="text-xl sm:text-2xl xl:text-3xl">{title}</p>
      <ul className="list-disc pb-4 pl-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-primary text-sm font-light lg:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
