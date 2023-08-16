import cloudinary from "@/config/cloudinary.config";
import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      console.log("Req", req);

      const { file } = req.body;
      const result = await cloudinary.uploader.upload(file, {
        upload_preset: "af4pgk3a",
      });
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
