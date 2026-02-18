interface ButtonProps {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children = "Book Now",
  className,
}: ButtonProps) {
  return (
    <div
      className={`w-fit rounded-sm border-2 px-8 py-2 transition duration-300 ease-in-out hover:cursor-pointer ${
        variant === "primary"
          ? "bg-yellow hover:border-yellow hover:bg-background border-transparent"
          : "border-yellow hover:bg-yellow bg-background"
      } ${className || ""}`}
    >
      <span className="text-primary text-center font-normal">{children}</span>
    </div>
  );
}
