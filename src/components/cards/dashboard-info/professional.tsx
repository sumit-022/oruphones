import React from "react";
import DashboardInfo from ".";
import stars from "@/assets/svg/Stars.svg";
import Image from "next/image";

const Professional = () => {
  return (
    <DashboardInfo className="rounded-md p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-[222222] font-[550]">Professional Details</p>
          <p className="text-[#49454FCC]">
            This are the professional details shown to the users in the app
          </p>
        </div>
        <Image src={stars} width={120} height={120} alt="stars" />
      </div>
    </DashboardInfo>
  );
};

export default Professional;
