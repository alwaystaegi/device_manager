// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";

// type Data = {
//   name: string;
// };
interface Data {
  ok: Boolean;
  deletedId?: string;
  device?: Device;
  error?: String;
}
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  try {
    if (request.method !== "DELETE") {
      response.status(405).json({
        ok: false,
        error: `지원하지 않는 메서드 입니다:${request.method}`,
      });
    }
    console.log(JSON.parse(request.body).id);
    const deletedDevice = await client.device.delete({
      where: {
        id: JSON.parse(request.body).id.toString(),
      },
    });
    response.status(200).json({ ok: true, device: deletedDevice });
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err}` });
  }
}
