// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Sencing } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";

// type Data = {
//   name: string;
// };
interface Data {
  ok: Boolean;
  error?: String;
  result?: number;
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
  console.log(deviceid);
  try {
    const result = await client.sencing.findFirst({
      // ? where=== 필터링 ... sencing 안의 요소가 있는 것 들만 검사함
      where: {
        deviceId: deviceid?.toString(),
      },
      //   ? orderBy 정렬하기 desc 오름차순 asc내림차순
      orderBy: {
        createAt: "desc",
      },
      //   ?select 선택한당
      select: {
        value: true,
      },
    });
    console.log(result);
    response.status(200).json({ ok: true, result: result?.value });
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err}` });
  }
}
