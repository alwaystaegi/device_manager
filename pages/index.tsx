import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
const Home: NextPage = () => {
  return (
    <Layout title="HOME">
      <div className="h-full  overflow-y-scroll p-6 space-y-7">
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
            <div>[실시간버튼자리]</div>
          </div>
          {/* //!센서목록 */}
          <div className="flex flex-wrap">
            {/* //!장비카드 */}
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1].map((device, idx) => (
              <div
                key={idx}
                className="bg-red-200 border-2 w-52 h-52 p-4 flex flex-col justify-between rounded-xl m-5"
              >
                <div className="flex justify-end">
                  <span className="text-5xl">25</span>
                  <span className="text-2xl text-gray-500">%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500">안방-메모메모메모</span>
                  <span className="text-xl">샤오미 공기청정기</span>
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
