import Button from "@/components/atoms/button/action-button";
import React from "react";
import EmployeeCard from "@/components/atoms/cards/employeecard";

const Experience = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-between items-center">
        <p className="text-[#222222] font-[550]">Experience</p>
        <Button>Edit</Button>
      </div>
      <EmployeeCard
        type="Full Time"
        role="Full Stack Developer"
        company="Oruphones"
        duration="2014-2021"
        years="7 Years"
      />
      <EmployeeCard
        type="Full Time"
        role="Full Stack Developer"
        company="Oruphones"
        duration="2014"
        years="6 Months"
      />
    </div>
  );
};

export default Experience;
