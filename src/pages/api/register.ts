import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/utils/db/connect";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export default async function Register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { method } = req;
  const { firstName, lastName, email, password, phone } = req.body;
  switch (method) {
    case "POST":
      try {
        await new User({
          firstName,
          lastName,
          email,
          password: bcryptjs.hashSync(password, 10),
          phone,
          about: "",
          skills: [],
        }).save();
        res.status(201).json({ message: "User created successfully" });
      } catch (error) {
        res.status(500).json({ message: "User creation failed" });
      }
  }
}
