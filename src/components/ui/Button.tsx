import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "blue";
  type?: "button" | "submit" | "reset";
  textColor?: "white" | "black" | "primary" | "secondary";
  rounded?: "md" | "full";
  className?: string 
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  textColor = "white",
  type = "button",
  rounded = "md",
  className
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "cursor-pointer py-3 px-6 w-auto font-semibold transition-colors", 
        {
          "text-white": textColor === "white",
          "text-black": textColor === "black",
          "text-primary": textColor === "primary",
          "text-secondary": textColor === "secondary",

          "bg-primary border-primary": variant === "primary",
          "border-2 border-secondary": variant === "secondary",
          "w-full flex items-center justify-center gap-6 bg-transparent border border-[#73b9eb] hover:bg-[#73b9eb]/10": variant === "outline",
          "bg-[#2D9CDB] hover:bg-[#2D9CDB]/90": variant === "blue",
          "rounded-md": rounded === "md" && variant !== "blue",
          "rounded-full": rounded === "full",
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;