import React from "react";

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextAreaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = ({
  label,
  type,
  placeholder,
  id,
  value,
  onChange,
  onTextAreaChange,
}: InputProps) => {
  if (type === "textarea")
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={id} className="text-sm font-semibold text-[#4a5568]">
          {label}
        </label>
        <textarea
          className="border border-gray-300 rounded-md p-2"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onTextAreaChange}
        />
      </div>
    );
  else if (label === "Phone Number")
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={id} className="text-sm font-semibold text-[#4a5568]">
          {label}
        </label>
        <input
          className="border border-gray-300 rounded-md p-2"
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-semibold text-[#4a5568]">
        {label}
      </label>
      <input
        className="border border-gray-300 rounded-md p-2"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
