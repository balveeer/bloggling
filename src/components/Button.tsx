import { ReactNode } from "react";
type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  bgColor?: string;
  textColor?: string;
  className?: string;
};

function Button({
  children,
  type = "button",
  bgColor = "bg-black hover:bg-white",
  textColor = "text-white hover:text-black",
  className = "",
  ...props
}:ButtonProps) {
  return (
    <button
      className={`w-full ${bgColor} ${textColor} rounded-lg px-4 py-2 mt-6   border-black border-2 font-bold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;