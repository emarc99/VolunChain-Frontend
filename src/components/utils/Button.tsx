import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
  variant: "primary" | "secondary";
  type: "button" | "submit" | "reset";
  textColor?: "white" | "black" | "primary" | "secondary";
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  textColor = "white",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx("py-3 px-6 rounded-full w-auto font-semibold border-2", {
        // Text color classes
        "text-white": textColor === "white",
        "text-black": textColor === "black",
        "text-primary": textColor === "primary",
        "text-secondary": textColor === "secondary",

        // Variant specific styles
        "bg-primary hover:bg-transparent hover:text-primary hover:border-primary":
          variant === "primary",
        "border-primary": variant === "primary",
        "border-2 border-secondary hover:bg-secondary hover:text-white":
          variant === "secondary",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
