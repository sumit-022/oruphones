import React from "react";
import DashboardInfo from ".";
import Button from "@/components/atoms/button/action-button";

const Skills: React.FC<DashboardInfoType> = ({ user, setOpened }) => {
  return (
    <DashboardInfo className="rounded-md p-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-[#1E2875] font-[500] text-lg">Skills</p>
          <Button onClick={() => setOpened?.({ state: true, type: "skills" })}>
            Edit
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {user.skills && user.skills.length > 0 ? (
            user.skills.map((skill, index) => (
              <p
                key={index}
                className="text-[#222222E5] font-semibold text-sm font-sans"
              >
                {skill}
              </p>
            ))
          ) : (
            <p className="text-[#222222E5] font-semibold text-sm font-sans">
              No Skills Added
            </p>
          )}
        </div>
      </div>
    </DashboardInfo>
  );
};

export default Skills;
