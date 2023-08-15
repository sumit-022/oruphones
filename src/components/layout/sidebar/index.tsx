import SidebarButton from "@/components/atoms/button/sidebar-button";
import React, { useState } from "react";
import sidebarLinks from "@/data/sidebar-links";
import clsx from "clsx";
import { useAtom } from "jotai";
import navigationAtom from "@/atoms/navigation";
import Cookies from "js-cookie";
import { useAccount } from "@/providers/userprovider";
import { useRouter } from "next/router";

const Sidebar: React.FC<DashboardInfoType> = ({ user }) => {
  const [active, setActive] = useAtom(navigationAtom);
  const { setAuthState } = useAccount();
  const router = useRouter();

  const handleActive = (path: string) => {
    console.log(active);
    setActive((prev) => ({ ...prev, path }));
  };

  const logout = () => {
    Cookies.remove("token");
    setAuthState(false);
    router.push("/auth/login");
  };

  return (
    <aside className="h-screen relative w-60 p-4">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <SidebarButton className="my-4 w-max shadow-sm mr-8 text-text-blue-600 font-semibold">
            Dashboard
          </SidebarButton>
        </div>
        <div className="flex flex-col gap-4">
          {sidebarLinks.map((link) => (
            <div className="flex items-center gap-3" key={link.id}>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.11108 8.77778L4.66664 5.22223L1.11108 1.66667"
                  stroke="#9197B3"
                  strokeWidth="1.77778"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <SidebarButton
                className={clsx(
                  active.path === link.path ? "border border-text-blue-600" : ""
                )}
                link
                onclick={() => {
                  handleActive(link.path);
                }}
              >
                {link.text}
              </SidebarButton>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full absolute bottom-4 flex justify-center">
        <button className="font-[500] text-[#222222E5]" onClick={logout}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
