// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/server/client";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const NewUser = await client.user.create({
      data: { addr: "어흥", age: 999, name: "호랑이", favfood: "너" },
    });
    res.status(200).json({ name: "OKOKOK" });
  } catch (err) {
    res.status(200).json({ name: "NGNGNG" });
  }
}
