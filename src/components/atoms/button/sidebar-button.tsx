import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
  link?: boolean;
}

const SidebarButton = ({ children, className, onclick, link }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-md px-8 py-1.5",
        className,
        link ? "" : "border"
      )}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default SidebarButton;
