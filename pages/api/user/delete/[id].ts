// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../libs/server/client";

// type Data = {
//   name: string;
// };
interface Data {
  ok: Boolean;
  deletedId?: string;
  user?: User;
  err?: String;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    console.log(req.query.id);
    const deletedUser = await client.user.delete({
      where: {
        id: req.query.id?.toString(),
      },
    });
    res.status(200).json({ ok: true, deletedId: deletedUser.id });
  } catch (err) {
    res.status(200).json({ ok: false, err: `${err}` });
  }
}
