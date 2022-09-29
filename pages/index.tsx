import { Device } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clearInterval } from "timers";
import DeviceCard from "../components/DeviceCard";
import Layout from "../components/Layout";
declare global {
  interface Window {
    time: NodeJS.Timer;
  }
}
const Home: NextPage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    //컴포넌트가 로딩될때 한번만 실행됨
    //사용자 목록을 가져와서 state 변수에 저장
    fetch("/api/device/alldevice").then((res /*response*/) => {
      res.json().then((json) => {
        setDevices(json.devices);
      });
    });
  }, []);
  function 실시간로딩함수() {
    if (!flag) {
      window.time = setInterval(() => {
        fetch("/api/device/alldevice").then((res /*response*/) => {
          res.json().then((json) => {
            setDevices(json.devices);
          });
        });
      }, 100);
    } else {
      window.clearInterval(window.time);
    }
    document.querySelector("#spinner")?.classList.toggle("animate-spin");
    setFlag(!flag);
  }
  function 클릭됨() {
    document.querySelector("#target")?.classList.toggle("translate-x-5");
    console.log(document.querySelector("#target")?.classList);
    실시간로딩함수();
  }
  return (
    <Layout title="HOME">
      <div className="h-full  overflow-y-scroll p-6 space-y-7 font-sans">
        <div id="웰컴메시지" className="flex justify-between items-center h-14">
          <div>
            <div className="text-5xl">HELLO taegi</div>
            <div className="text-gray-500">Welcom back to home</div>
          </div>
          <Link href="/setting">
            <button className="flex space-x-2 btn py-4 px-5 rounded-lg">
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
          </Link>
        </div>
        <div>
          {/* //!링크드유 */}
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold">Linked to You</div>
            <div className="flex">
              <button
                id="test"
                className="relative cursor-pointer flex justify-around items-center bg-slate-200 w-10 rounded-lg text-gray-900 font-bold font-sans"
                onClick={클릭됨}
              >
                <div>O</div>
                <div>X</div>
                <div id="target" className="absolute left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 fill-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </div>
              </button>
              <span>실시간</span>
              <svg
                id="spinner"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                // !스핀넣을 자리
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          </div>
          {/* //!센서목록 */}
          <div className="flex flex-wrap">
            <div className="border-4 w-full"></div>

            {/* //!장비카드 */}
            {0 === devices.length && (
              <div className="w-full my-5 text-4xl text-red-500 flex justify-center">
                장비가 존재하지 않습니다.
              </div>
            )}
            {devices.map((device, idx) => (
              <DeviceCard key={idx} device={device} />
              // <div
              //   key={device.id}
              //   className="shadow-3d bg-red-200 border-2 w-52 h-52 p-4 flex flex-col justify-between rounded-xl m-5 bg-gradient-to-b from-blue-200 to-cyan-200 hover:from-blue-300 hover:to-cyan-300"
              // >
              //   <div className="flex justify-end">
              //     <span className="text-5xl dark:text-gray-500">-</span>
              //     <span className="text-2xl text-gray-500 dark:text-gray-700">
              //       {device.unit}
              //     </span>
              //   </div>
              //   <div className="flex flex-col">
              //     <span className="text-gray-500 dark:text-gray-700">
              //       {device.location}
              //       {device.memo ? `-${device.memo}` : ""}{" "}
              //     </span>
              //     <span className="text-xl dark:text-gray-500">
              //       {device.product}
              //     </span>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
