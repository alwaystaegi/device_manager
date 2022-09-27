import { OpenDirOptions } from "fs";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
interface LayoutProps {
  title: string;
  children?: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  const bottomCN =
    "border-2 w-full flex justify-center items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700";
  const bottomIconName =
    "flex flex-col justify-center items-center cursor-pointer";

  const router = useRouter();
  function Darkmode() {
    document.body.classList.toggle("dark");
  }

  return (
    <div className="relative flex justify-center">
      <div className="flex justify-between h-[100vh] w-[640px] border-4 bg-white flex-col dark:text-[#ECECEE] dark:bg-[#1E1E20]">
        {/* //!탑 */}
        <div className="relative h-[100px] flex justify-center items-center border-b-2 shadow-md">
          <h1 className="text-3xl font-bold font-serif">{props.title}</h1>
          <div
            className="absolute right-4 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700 "
            onClick={() => {
              Darkmode();
            }}
          >
            {/* //!다크모드*/}
            {/* //! 달아이콘 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 hidden dark:block "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            {/* //! 태양아이콘 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 block dark:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
        </div>
        {/* //!미들 */}
        <div className="h-[80vh]">{props.children}</div>
        {/* //!바텀 */}
        <div className="h-[100px] border-t-2">
          <nav className="flex justify-between h-full">
            {/* //!메뉴1 */}
            <Link href={"/"}>
              <div
                className={`${bottomCN} ${
                  router.pathname === "/"
                    ? "bg-[#cfe297] hover:bg-[#c4de76] dark:bg-[#363439]"
                    : ""
                }`}
              >
                <div className={bottomIconName}>
                  {/* //!HOME아이콘 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <div>HOME</div>
                </div>
              </div>
            </Link>
            {/* //!메뉴2 */}
            <Link href={"/data"}>
              <div
                className={`${bottomCN} ${
                  router.pathname === "/data"
                    ? "bg-[#cfe297] hover:bg-[#c4de76] dark:bg-[#363439]"
                    : ""
                }`}
              >
                <div className={bottomIconName}>
                  {/* //!DATA아이콘 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                  <div>DATA</div>
                </div>
              </div>
            </Link>
            {/* //!메뉴3 */}
            <Link href={"/setting"}>
              {/* <div className={bottomCN}> */}
              <div
                className={`${bottomCN} ${
                  router.pathname === "/setting"
                    ? "bg-[#cfe297] hover:bg-[#c4de76] dark:bg-[#363439]"
                    : ""
                }`}
              >
                <div className={bottomIconName}>
                  {/* //!SETTING아이콘 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>SETTING</div>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
