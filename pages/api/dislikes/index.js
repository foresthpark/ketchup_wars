import client from "../../../libs/server/prisma";

export default async function handler(req, res) {
  const dislikes = await client.dislikes.findUnique({
    where: {
      id: "ckzz5ltzf00099lvytrzdeneq",
    },
  });

  return res.status(200).json({ data: dislikes?.count });
}
