import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/utils/db/connect";
import { User } from "@/models/user";
import Cookies from "js-cookie";

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res
            .status(400)
            .json({ message: "Invalid credentials", success: false });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
          return res
            .status(400)
            .json({ message: "Invalid Password", success: false });
        }
        const tokenData = {
          id: user._id,
        };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
          expiresIn: "1d",
        });

        res.status(200).json({
          message: "Login Success",
          success: true,
          token,
        });

        Cookies.set("token", token, { expires: 1 });
      } catch (error: any) {
        return res.status(400).json({ error: error.message, success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
