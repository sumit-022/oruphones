import jsonwebtoken from "jsonwebtoken";
import { User } from "../../models/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function ShowUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
          return res
            .status(401)
            .json({ message: "Unauthorized", success: false });
        }
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET!);
        const user = await User.findOne({ _id: decoded.id });
        return res
          .status(200)
          .json({ message: "Authorized", user, success: true });
      } catch (error) {
        return res
          .status(401)
          .json({ message: "Unauthorized", success: false });
      }
  }
}
