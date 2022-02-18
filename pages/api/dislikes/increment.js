import client from "../../../libs/server/prisma";

export default async function handler(req, res) {
  const dislikes = await client.dislikes.update({
    where: {
      id: "ckzs10ds50007d4vyamq71n8h",
    },
    data: {
      count: {
        increment: 1,
      },
    },
  });

  return res.status(200).json({ data: dislikes?.count });
}
