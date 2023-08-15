import React from "react";
import InputGroup from "../atoms/input/group";
import Input from "../atoms/input";

interface RegisterFormPartOneProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
  };
  handleChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterFormPartOne = ({
  user,
  handleChanges,
  onSubmit,
}: RegisterFormPartOneProps) => {
  return (
    <form className="space-y-5 flex flex-col" onSubmit={onSubmit}>
      <InputGroup>
        <Input
          label="First Name"
          id="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChanges}
          value={user.firstName}
        />
        <Input
          label="Last Name"
          id="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleChanges}
          value={user.lastName}
        />
      </InputGroup>
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="Email"
        onChange={handleChanges}
        value={user.email}
      />
      <Input
        label="Phone Number"
        id="phoneNumber"
        type="text"
        placeholder="Phone Number"
        onChange={handleChanges}
        value={user.phoneNumber}
      />
      <InputGroup>
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChanges}
          value={user.password}
        />
        <Input
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChanges}
          value={user.confirmPassword}
        />
      </InputGroup>
      <button type="submit" className="w-full py-3 text-white bg-[#1E2875]">
        Register
      </button>
    </form>
  );
};

export default RegisterFormPartOne;
