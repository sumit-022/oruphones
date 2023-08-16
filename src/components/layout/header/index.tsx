import React from "react";
import notification from "../../../assets/svg/notifications.svg";
import Image from "next/image";
import Button from "@/components/atoms/button";
import profile from "../../../assets/svg/profile.svg";
import downArrow from "../../../assets/svg/down-arrow.svg";
import menu from "../../../assets/svg/menu.svg";
import { useAtom } from "jotai";
import sidebarAtom from "@/atoms/sidebar";

const Header: React.FC<DashboardInfoType> = ({ user }) => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom);
  return (
    <div className="py-4 border-b border-primary-border">
      <div className="flex justify-between md:justify-end items-center">
        <Image
          src={menu}
          alt="menu"
          width={40}
          height={40}
          className="md:hidden"
          onClick={() => setSidebarOpen((prev) => !prev)}
        />
        <div className="flex gap-5 items-center mr-4">
          <Image src={notification} alt="notification" className="w-6 h-6" />
          <Button className="border rounded-md p-2" type="button">
            <div className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <Image src={profile} alt="profile" className="w-10 h-10" />
                <div className="text-start">
                  <p className="text-xs font-medium">Welcome back,</p>
                  <p className="font-semibold">
                    {user.firstName + " " + user.lastName}
                  </p>
                </div>
              </div>
              <Image src={downArrow} alt="down-arrow" className="w-4 h-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
