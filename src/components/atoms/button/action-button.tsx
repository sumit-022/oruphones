import clsx from "clsx";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-primary-buttongrey text-text-blue-600 py-1 px-6 font-sans text-xs font-semibold rounded-full",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
