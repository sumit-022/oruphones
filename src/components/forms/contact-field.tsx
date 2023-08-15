import React from "react";
import Button from "../atoms/button/action-button";

interface ContactFieldProps {
  fieldName: string;
  fieldValue: string;
  onEdit: () => void;
}

const ContactField = ({ fieldName, fieldValue, onEdit }: ContactFieldProps) => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <p className="text-[#1F1F1FB2] font-semibold">{fieldName}</p>
      <div className="flex justify-between">
        <p className="text-[#222222E5] font-semibold">{fieldValue}</p>
        <Button onClick={onEdit}>Edit</Button>
      </div>
    </div>
  );
};

export default ContactField;
