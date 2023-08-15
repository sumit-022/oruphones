import DashboardInfo from "@/components/cards/dashboard-info";
import React from "react";
import Image from "next/image";
import comanylogo from "@/assets/svg/logo.svg";

interface Props {
  role: string;
  company: string;
  duration: string;
  type: string;
  years: string;
}

const EmployeeCard = ({ role, company, duration, type, years }: Props) => {
  return (
    <DashboardInfo className="rounded-md p-2">
      <div className="flex flex-row-reverse">
        <Image src={comanylogo} height={50} width={50} alt="company logo" />
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between pr-3">
            <p className="text-[#222222]">
              {years} ({duration})
            </p>
            <p className="text-[#222222]">{type}</p>
          </div>
          <div className="flex justify-between items-center pr-1 text-sm">
            <p className="text-[#49454FCC]">{company}</p>
            <p className="text-[#49454FCC]">--{role}</p>
          </div>
        </div>
      </div>
    </DashboardInfo>
  );
};

export default EmployeeCard;
