import React, { useState } from "react";
import profile from "@/assets/svg/profile-rounded.svg";
import Image from "next/image";
import clsx from "clsx";

interface ConnectionCardProps {
  className?: string;
  id: number;
  connected?: boolean;
  onConnect: (id: number) => void;
  onRemove: (id: number) => void;
}

const ConnectionCard = ({
  className,
  onConnect,
  id,
  onRemove,
  connected,
}: ConnectionCardProps) => {
  return (
    <div
      className={clsx(
        "border-2 mt-4 w-max px-4 py-3 rounded-md border-[#CECECE]",
        className
      )}
    >
      <div className="flex items-center text-sm gap-4">
        <div className="flex flex-col gap-4">
          <p>Vishnu Swaroop</p>
          <div className="text-[#49454FCC]">
            <p>Full Stack Developer</p>
            <p>@ Oruphones</p>
          </div>
          <button
            className="bg-[#BAB6EB] text-[#1F1F1FCC] font-[500] px-3 rounded-full"
            onClick={() => {
              connected ? onRemove(id) : onConnect(id);
            }}
          >
            {connected ? "Remove Connection" : "Connect"}
          </button>
        </div>
        <Image src={profile} alt="profile" width={120} height={120} />
      </div>
    </div>
  );
};

export default ConnectionCard;
