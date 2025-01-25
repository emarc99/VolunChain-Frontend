import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
  variant: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  textColor?: "white" | "black" | "primary" | "secondary";
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant,
  textColor = "white",
  type = "button",
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "cursor-pointer py-3 px-6 rounded-full w-auto font-semibold border-2",
        {
          "text-white": textColor === "white",
          "text-black": textColor === "black",
          "text-primary": textColor === "primary",
          "text-secondary": textColor === "secondary",
        },
        {
          "bg-primary border-primary": variant === "primary",
          "bg-secondary border-secondary": variant === "secondary",
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