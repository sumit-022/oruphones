import Button from "@/components/atoms/button/action-button";
import React from "react";
import DashboardInfo from ".";

const Education = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-between items-center">
        <p className="text-[#222222] font-[550]">Education</p>
        <Button>Edit</Button>
      </div>
      <DashboardInfo className="rounded-md py-3 px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#413B89] text-[16px] font-semibold">
            IIT Hyderabad
          </h2>
          <div className="flex justify-between">
            <p className="text-[#222222] font-semibold">(2018 - 2022)</p>
            <p className="text-[#222222] font-semibold mr-8">Btech</p>
          </div>
          <p className="text-[#49454FCC] text-sm">
            Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel
            congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor
            sit amet consectetur.
          </p>
        </div>
      </DashboardInfo>
    </div>
  );
};

export default Education;
