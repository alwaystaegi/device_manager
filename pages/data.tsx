import { Device } from "@prisma/client";
import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import Layout from "../components/Layout";

interface Data {}

const Home: NextPage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [id, setId] = useState("");
  const [value, setValue] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.query.deviceid) {
      setId(router.query.deviceid.toString());
      document.querySelector("#addValue")?.classList.remove("hidden");
    }
    fetch("/api/device/alldevice").then((res /*response*/) => {
      res.json().then((json) => {
        setDevices(json.devices);
      });
    });
  }, []);

  function 장비선택(event: ChangeEvent<HTMLSelectElement>) {
    setId(event.currentTarget.value);
    document.querySelector("#addValue")?.classList.remove("hidden");
  }
  function 등록함수() {
    setErrmsg("");
    if (isNaN(parseInt(value))) {
      setErrmsg("숫자를 입력해주세요");
      return;
    }
    const data = { value };
    fetch(`/api/sencing/${id}`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.ok) {
          setValue("");
          document.querySelector("#addInfo")?.classList.add("hidden");
          alert("등록에 성공하였습니다.");
        }
      });
  }
  function 불러오기() {
    console.log(1);
    console.log(document.querySelector("#addInfo")?.children);
  }
  return (
    <Layout title="DATA">
      {/* //!디바이스 선택하기 */}

      <div className="m-4">
        <div className="font-serif font-bold text-2xl">Select Device</div>
        <select
          title="select-device"
          className="h-12 ring-4 ring-black text-gray-800 px-2 my-4"
          onChange={장비선택}
          onEmptied={불러오기}
        >
          <option hidden value="">
            장치 선택
          </option>
          {devices.map((device, idx) => (
            <option key={idx} value={device.id}>
              {`${device.type} (${device.location}) ${device.product}-${
                device.memo ? device.memo : "메모 없음"
              }`}
            </option>
          ))}
        </select>
      </div>
      {/* //!디바이스 정보 등록하기 */}
      <div id="addValue" className="hidden mx-4 border-t">
        <div className="font-bold my-4">장비ID:{id}</div>
        <div className="font-bold" placeholder="측정 값을 입력해주세요">
          Value *
        </div>
        <input
          type="text"
          className="h-12 ring-1 ring-black text-gray-800 px-2 w-full my-3"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <div className="text-red-500">{errmsg}</div>
        <button className="w-full btn h-10" onClick={등록함수}>
          등록
        </button>
      </div>
    </Layout>
  );
};

export default Home;
