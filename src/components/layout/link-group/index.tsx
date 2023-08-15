import React from "react";

interface LinkGroupProps {
  children: (handleClick: () => void, open: boolean) => React.ReactNode;
  activeCondition: boolean;
}

const LinkGroup = ({ children, activeCondition }: LinkGroupProps) => {
  return <li>{children(() => {}, activeCondition)}</li>;
};

export default LinkGroup;
