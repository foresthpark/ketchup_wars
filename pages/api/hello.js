import client from "../../libs/server/prisma";

export default async function handler(req, res) {
  return res.status(200).json({ data: "What are you doing here?" });
}
