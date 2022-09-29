import { Device } from "@prisma/client";
import type { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import { json } from "stream/consumers";
import Layout from "../components/Layout";
const Home: NextPage = () => {
  const [location, setLocation] = useState(""); //?제품위치
  const [unit, setUnit] = useState(""); //? 측정단위
  const [product, setProduct] = useState(""); //? 제품명
  const [memo, setMemo] = useState(""); //? 메모
  const [type, setType] = useState(""); //? 센서종류
  const [errmsg, setErrmsg] = useState(""); //?에러 메세지

  const [devices, setDevices] = useState<Device[]>([]);

  function 불러오기() {
    fetch("/api/device/alldevice")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDevices(json.devices);
      });
  }

  function 장비추가버튼() {
    document.querySelector("#container_add_device")?.classList.toggle("hidden");
    setLocation("");
    setUnit("");
    setProduct("");
    setMemo("");
    setErrmsg("");
  }

  function addfn() {
    let temp = "";
    if (!location || !unit || !product || !type) {
      temp = "이(가) 없습니다";
      console.log(errmsg);
      !unit ? (temp = " 단위" + temp) : null;
      !type ? (temp = " 장치종류" + temp) : null;
      !location ? (temp = " 설치장소" + temp) : null;
      !product ? (temp = " 제품명" + temp) : null;
      console.log(temp);
      setErrmsg(temp);
      return;
    }
    setErrmsg("");

    try {
      const data = { location, unit, product, type, memo };
      fetch(`/api/device/add`, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setDevices([...devices, json.device]);
          if (json.ok) {
            setLocation("");
            setUnit("");
            setProduct("");
            setMemo("");
            document
              .querySelector("#container_add_device")
              ?.classList.toggle("hidden");
          } else setErrmsg("등록에 실패했서요");
        });
    } catch (err) {}
  }
  function 삭제하기(id: String) {
    if (!id) return;
    const targetID = { id };
    fetch("/api/device/del", {
      method: "DELETE",
      body: JSON.stringify(targetID),
    })
      .then((res) => res.json())
      .then((json) =>
        setDevices(devices.filter((device) => device.id !== json.device.id))
      );
  }
  // ? <select change>
  function 장치종류변경(event: ChangeEvent<HTMLSelectElement>) {
    setType(event.currentTarget.value);
  }
  useEffect(() => {
    //컴포넌트가 로딩될때 한번만 실행됨
    //사용자 목록을 가져와서 state 변수에 저장
    fetch("/api/device/alldevice")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDevices(json.devices);
      });
  }, []);

  return (
    <Layout title="SETTING">
      <div className="h-full  overflow-y-scroll p-6 space-y-7">
        {/* //!장비추가버튼 */}
        <div className="flex justify-end">
          <button
            className="flex space-x-2 btn py-4 px-5 rounded-lg"
            onClick={장비추가버튼}
          >
            <span>Add Device</span>
            {/* //!플러스아이콘 */}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </button>
        </div>
        {/* //!추가하기 */}
        <div className="space-y-5 hidden" id="container_add_device">
          <hr />
          <div className="text-3xl font-bold">New Device</div>
          {/* //!제품명 */}
          <div className="flex flex-col">
            <span>제품명 *</span>
            <input
              type={"text"}
              className="h-12 ring-4 ring-black text-gray-800 px-2"
              value={product}
              onChange={(event) => setProduct(event.currentTarget.value)}
              placeholder={"제품명을 입력하세요"}
            />
          </div>
          {/* //!위치입력 */}
          <div className="flex flex-col">
            <span>설치장소 *</span>
            <input
              type={"text"}
              className="h-12 ring-4 ring-black text-gray-800 px-2"
              value={location}
              onChange={(event) => setLocation(event.currentTarget.value)}
              placeholder={"거실, 안방... etc"}
            />
          </div>
          {/* //!장치종류*/}
          <div className="flex flex-col">
            <span>장치종류 *</span>
            <select
              title="장치종류"
              defaultValue={"장치종류"}
              className="h-12 ring-4 ring-black text-gray-800 px-2"
              onChange={장치종류변경}
            >
              <option hidden value="">
                장치종류
              </option>
              <option value="TEMP">온도 센서</option>
              <option value="HUMI">습도 센서</option>
              <option value="CO2">CO2 센서</option>
            </select>
          </div>
          {/* //!unit 측정단위*/}
          <div className="flex flex-col">
            <span>측정단위 *</span>
            <input
              type={"text"}
              className="h-12 ring-4 ring-black text-gray-800 px-2"
              value={unit}
              onChange={(event) => setUnit(event.currentTarget.value)}
              placeholder={"℃,℉ ...etc"}
            />
          </div>
          {/* //!메모*/}
          <div className="flex flex-col">
            <span>메모</span>
            <input
              type={"text"}
              className="h-12 ring-4 ring-black text-gray-800 px-2"
              value={memo}
              onChange={(event) => setMemo(event.currentTarget.value)}
              placeholder={"메모를 입력하세요"}
            />
          </div>
          <div className="text-red-500">{errmsg}</div>
          <button
            className="w-full py-5 font-bold rounded text-2xl btn"
            onClick={addfn}
          >
            등록
          </button>

          <hr />
        </div>
        {/* //!장비 삭제하기 */}
        <div>
          <div>
            {0 === devices.length && (
              <div className="w-full my-5 text-4xl text-red-500 flex justify-center">
                장비가 존재하지 않습니다.
              </div>
            )}
            {devices.map((device, idx) => (
              <div
                key={idx}
                className="border-b-4 py-5 flex justify-between items-center w-full"
              >
                <div className=" ">
                  <div>{device.id}</div>
                  <div>
                    [{device.type}] {device.product} ({device.location})
                  </div>
                  <div>{device.memo}</div>
                </div>
                <div
                  className="flex cursor-pointer h-[50px] w-[50px] justify-center items-center font-serif mx-5 bg-red-200 rounded-lg text-red-400"
                  onClick={() => {
                    삭제하기(device.id);
                  }}
                >
                  삭제
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
