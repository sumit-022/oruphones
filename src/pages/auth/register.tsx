import Input from "@/components/atoms/input";
import InputGroup from "@/components/atoms/input/group";
import RegisterFormPartOne from "@/components/forms/register_one";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const handleChanges = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
    } else {
      axios
        .post("/api/register", {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
          phone: user.phoneNumber,
        })
        .then((res) => {
          if (res.data.success) {
            router.push("/auth/login");
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-16 rounded shadow-2xl w-2/3">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Register</h2>
        <RegisterFormPartOne
          user={user}
          handleChanges={handleChanges}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default Register;
