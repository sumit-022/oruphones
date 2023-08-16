import Button from "@/components/atoms/button";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useAccount } from "@/providers/userprovider";
import Link from "next/link";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setAuthState } = useAccount();

  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/login", user);
      if (res.data.success) {
        Cookies.set("token", res.data.token);
        setAuthState(true);
        setTimeout(() => {
          router.push("/");
        }, 500);
      } else {
        setError(res.data.message);
      }
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setError("");
    } else {
      setError("Please fill all the fields");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-16 rounded shadow-2xl w-2/3">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Login</h2>
        <form className="space-y-5 flex flex-col" onSubmit={onLogin}>
          <div>
            <label className="block mb-2 text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-800">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full py-3 text-white bg-[#1E2875]">
            Login
          </Button>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-gray-400">
            New User?{" "}
            <Link className="text-black underline" href={"/auth/register"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
