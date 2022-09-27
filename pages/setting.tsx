import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout";
const Home: NextPage = () => {
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("");
  const [product, setProduct] = useState("");
  const [memo, setMemo] = useState("");
  function 장비추가버튼() {
    console.log("장추버튼클릭됨");
    document.querySelector("#container_add_device")?.classList.toggle("hidden");
    setLocation("");
    setUnit("");
    setProduct("");
    setMemo("");
  }
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
        <div className="space-y-5" id="container_add_device">
          <hr />
          <div className="text-3xl font-bold">New Device</div>
          {/* //!제품명 */}
          <div className="flex flex-col">
            <span>product *</span>
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
            <span>location *</span>
            <input
              type={"text"}
              className="h-12 ring-4 ring-black text-gray-800 px-2"
              value={location}
              onChange={(event) => setLocation(event.currentTarget.value)}
              placeholder={"거실, 안방... etc"}
            />
          </div>
          {/* //!unit 측정단위*/}
          <div className="flex flex-col">
            <span>unit *</span>
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
            <span>메모 *</span>
            <input
              type={"text"}
              className="h-12 ring-4 ring-black text-gray-800 px-2"
              value={memo}
              onChange={(event) => setMemo(event.currentTarget.value)}
              placeholder={"메모를 입력하세요"}
            />
          </div>
          <button className="w-full py-5 font-bold rounded text-2xl btn">
            등록
          </button>
          <hr />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
