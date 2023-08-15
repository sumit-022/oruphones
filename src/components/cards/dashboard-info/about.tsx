import React from "react";
import DashboardInfo from ".";
import Button from "@/components/atoms/button/action-button";

const About: React.FC<DashboardInfoType> = ({ user, setOpened }) => {
  return (
    <DashboardInfo className="pt-4 pb-8 rounded-md p-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-black font-semibold">
            About <span className="text-[#413B89]">{user.firstName}</span>
          </h2>
          <Button onClick={() => setOpened?.({ state: true, type: "about" })}>
            Edit
          </Button>
        </div>
        <p className="text-[#49454FCC] text-sm font-sans">
          {user.about ? user.about : "No About"}
        </p>
      </div>
    </DashboardInfo>
  );
};

export default About;
