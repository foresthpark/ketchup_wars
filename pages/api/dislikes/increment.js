import client from "../../../libs/server/prisma";

export default async function handler(req, res) {
  const dislikes = await client.dislikes.update({
    where: {
      id: "ckzz5ltzf00099lvytrzdeneq",
    },
    data: {
      count: {
        increment: 1,
      },
    },
  });

  return res.status(200).json({ data: dislikes?.count });
}
