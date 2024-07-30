import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset'; // Explicitly define the type options
  bgColor?: string;
  textColor?: string;
  className?: string;
};

function Button({
  children,
  type = "button",
  bgColor = "",
  textColor = "",
  className = "",
  ...props
}:ButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-white bg-blue-600 ${textColor} ${className} ${bgColor} `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;