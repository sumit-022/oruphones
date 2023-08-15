import clsx from "clsx";
import React from "react";

interface DashboardInfoProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardInfo = ({ children, className }: DashboardInfoProps) => {
  return (
    <div className={clsx("border-2 mt-4 border-[#CECECE]", className)}>
      {children}
    </div>
  );
};

export default DashboardInfo;
