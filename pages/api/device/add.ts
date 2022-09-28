// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device, DeviceType } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { userAgent } from "next/server";
import client from "../../../libs/server/client";

// type Data = {
//   name: string;
// };
interface Data {
  ok: Boolean;
  device?: Device;
  error?: String;
}
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  if (request.method !== "POST") {
    response.status(405).json({
      ok: false,
      error: `지원하지 않는 메서드 입니다:${request.method}`,
    });
  }

  // const {
  //   body: { product, location, unit, type, memo },
  // } = request;
  const { product, location, unit, type, memo } = JSON.parse(request.body);

  let errmsg = "(이)가 없습니다";
  // !입력필드 검
  if (true) {
    if (!product) {
      errmsg = " 제품명" + errmsg;
    }
    if (!location) {
      errmsg = " 설치장소" + errmsg;
    }
    if (!unit) {
      errmsg = " 측정단위" + errmsg;
    }
    if (!type) {
      errmsg = " 장치종류" + errmsg;
    }
    if (errmsg !== "(이)가 없습니다") {
      return response.status(200).json({ ok: false, error: errmsg });
    }
  }

  try {
    const data = JSON.stringify(request.body);
    const device = await client.device.create({
      // data: JSON.parse(data),
      data: {
        product,
        location,
        unit,
        memo,
        type,
      },
    });
    response.status(200).json({ ok: true, device });
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err}` });
  }
}
