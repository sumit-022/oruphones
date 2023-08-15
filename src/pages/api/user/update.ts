import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/utils/db/connect";
import { User } from "@/models/user";

export default async function Update(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case "PUT":
      try {
        const { id, name, email, phone, about, skills } = req.body;

        const user = await User.findById(id);
        if (!user) {
          return res
            .status(400)
            .json({ message: "Invalid credentials", success: false });
        }
        user.firstName = name.split(" ")[0];
        user.lastName = name.split(" ")[1];
        user.email = email;
        user.phone = phone;
        user.about = about;
        user.skills = skills;
        await user.save();

        res.status(200).json({
          message: "Update Success",
          success: true,
        });
        console.log("success");
      } catch (error: any) {
        return res.status(400).json({ error: error.message, success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
