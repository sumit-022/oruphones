import React from "react";

interface InputGroupProps {
  children: React.ReactNode;
}

const InputGroup = ({ children }: InputGroupProps) => {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
};

export default InputGroup;
