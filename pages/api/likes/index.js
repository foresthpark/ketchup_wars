import client from "../../../libs/server/prisma";

export default async function handler(req, res) {
  const likes = await client.likes.findUnique({
    where: {
      id: "ckzs10dl60000d4vyn75qhrgi",
    },
  });

  return res.status(200).json({
    data: likes?.count,
  });
}
