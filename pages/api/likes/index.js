import client from "../../../libs/server/prisma";

export default async function handler(req, res) {
  try {
    const likes = await client.likes.findUnique({
      where: {
        id: "ckzz5lwuz00319lvyrczo7ukd",
      },
    });

    return res.status(200).json({
      data: likes?.count,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}
