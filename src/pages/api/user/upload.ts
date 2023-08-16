import cloudinary from "@/config/cloudinary.config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { file } = req.body;
        const uploaded = await cloudinary.uploader.upload(file);
        res.status(200).json(uploaded);
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}