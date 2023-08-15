import React from "react";
import DashboardInfo from ".";
import certificatelogo from "@/assets/svg/Vector.svg";
import Image from "next/image";
import Button from "@/components/atoms/button/action-button";

const Certifications = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-between items-center">
      <p className="text-[#222222] font-[550]">Certifications</p>
        <Button>Edit</Button>
      </div>
      <DashboardInfo className="rounded-full p-2">
        <div className="flex px-2">
          <Image
            src={certificatelogo}
            width={35}
            height={35}
            alt="certificatelogo"
          />
          <div className="flex flex-col text-center flex-1">
            <p className="text-[#49454FCC] text-lg">Python</p>
            <p className="text-[#49454FCC] text-sm">Coding Ninjas</p>
          </div>
        </div>
      </DashboardInfo>
    </div>
  );
};

export default Certifications;
