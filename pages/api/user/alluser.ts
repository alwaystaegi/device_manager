// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";

// type Data = {
//   name: string;
// };
// 위에거를 아래것으로 변경함
interface ResponseDataType {
  name: string;
  users: User[];
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
) {
  try {
    const users = await client.user.findMany();
    console.log(users);
    res.status(200).json({
      name: "OKOKOK",
      users /*만약 변수와 그 값?? 뭐라해야할지 모르겠는데... users:users 이렇게 둘이 같으면 users로 적어도됨*/,
    });
  } catch (err) {
  } finally {
    await client.$disconnect();
  }
}
