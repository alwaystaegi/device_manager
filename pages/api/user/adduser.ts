// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";

// type Data = {
//   name: string;
// };
interface Data {
  ok: Boolean;
  user?: User;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const user = await client.user.create({
      data: { addr: "어흥", age: 999, name: "호랑이", favfood: "너" },
    });
    console.log(user);
    res.status(200).json({ ok: true, user });
  } catch (err) {
    res.status(200).json({ ok: false });
  } finally {
    await client.$disconnect();
  }
}
