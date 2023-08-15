import React from "react";
import Input from "../atoms/input";
import InputGroup from "../atoms/input/group";

interface RegisterFormPartTwoProps {
  user: {
    phoneNumber: string;
    about: string;
    professionalDetails: string;
    skills: string[];
  };
  handleChanges: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const RegisterFormPartTwo = ({
  user,
  handleChanges,
}: RegisterFormPartTwoProps) => {
  return (
    <form className="space-y-5 flex flex-col">
      <Input
        label="Phone Number"
        id="phoneNumber"
        type="text"
        placeholder="Phone Number"
        onChange={handleChanges}
        value={user.phoneNumber}
      />
      <Input
        label="About"
        id="about"
        type="textarea"
        placeholder="About"
        onTextAreaChange={handleChanges}
        value={user.about}
        onChange={handleChanges}
      />
    </form>
  );
};

export default RegisterFormPartTwo;
