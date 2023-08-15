import React, { MouseEvent } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit" | "reset";
  dropdown?: boolean;
}

const Button = ({
  children,
  className,
  type,
  dropdown,
  ...properties
}: ButtonProps) => {
  return (
    <button className={className} type={type} {...properties}>
      {children}
    </button>
  );
};

export default Button;
