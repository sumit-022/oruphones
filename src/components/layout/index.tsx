import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { useAccount } from "@/providers/userprovider";
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactNode;
  user: UserType;
  className?: string;
}

const Layout = ({ children, user, className }: LayoutProps) => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <Sidebar user={user} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header user={user} />
        <main
          className={clsx(
            "flex-1 overflow-x-hidden bg-primary-background overflow-y-auto",
            className
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
