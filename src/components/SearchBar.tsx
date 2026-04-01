import { Search } from "lucide-react";

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
          className="border-primary w-full rounded-sm border px-4 py-2 pr-8 text-sm font-light lg:text-base"
        />
        <Search
          className="text-primary absolute top-1/2 right-2 -translate-y-1/2 transform"
          size={24}
        />
      </div>
    </div>
  );
}
