// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device, DeviceType } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { userAgent } from "next/server";
import client from "../../../../libs/server/client";

// type Data = {
//   name: string;
// };
interface Data {
  ok: Boolean;
  error?: String;
}
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  if (request.method !== "GET") {
    response.status(405).json({
      ok: false,
      error: `지원하지 않는 메서드 입니다:${request.method}`,
    });
  }
  const { deviceid } = request.query;
  if (!deviceid) {
    response.status(200).json({
      ok: false,
      error: `장치 ID(deviceid)를 입력해주세요`,
    });
  }
  try {
    response.status(200).json({ ok: true });
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err}` });
  } finally {
    await client.$disconnect();
  }
}
