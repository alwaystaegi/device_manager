import { User } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Counter from "../components/Counter";

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  //prisma 코드는 csr환경에서는 사용할수 없음 ... 왜? 위험하다!
  const router = useRouter();
  // use Router를 이용해 강제 새로고침
  const [rename, setRename] = useState("");
  function 사용자추가함수() {
    console.log("사용자 추가함수가 클릭되었습니다.");
    // fetch("/api/adduser").then((res) => {
    //   res.json().then((json) => {
    //     console.log(json);
    //   });
    // });
    fetch("/api/adduser")
      .then((res) => res.json())
      .then((json) => setUsers([...users, json.user]));
  }

  function 사용자삭제(targetID: string) {
    fetch(`api/user/delete/${targetID}`)
      .then((res) => res.json())
      .then((json) => {
        setUsers(users.filter((user) => user.id !== json.deletedId));
        console.log(json.deletedId);
      });
  }
  function 이름변경(targetId: string) {
    if (!rename) return;
    const data = { name: rename };
    console.log(`${targetId}의 이름을 ${rename}로 변경`);
    fetch(`/api/user/update/${targetId}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
  useEffect(() => {
    //컴포넌트가 로딩될때 한번만 실행됨
    //사용자 목록을 가져와서 state 변수에 저장
    fetch("/api/alluser").then((res /*response*/) => {
      res.json().then((json) => {
        setUsers(json.users);
      });
    });
  }, []);

  return (
    <div>
      hello world
      <Counter title={1234} name="jh" />
      <button className="bg-gray-300 p-2 rounded m-2" onClick={사용자추가함수}>
        사용자추가
      </button>
      <div className="flex flex-wrap">
        {users.map((user) => {
          return (
            <div key={user.id} className="border-2">
              <div className="text-2xl font-bold">{user.name}</div>
              <div>
                <span>사는 지역</span>:{user.addr}
              </div>
              <div>({user.age}세)</div>
              <div>
                <span className="text-sm">좋아하는 음식</span> :{user.favfood}
              </div>
              <div className="text-gray-400">{user.createAt.toString()}</div>
              <div>
                <input
                  type="text"
                  className="border"
                  value={rename}
                  onChange={(e) => {
                    setRename(e.currentTarget.value);
                  }}
                ></input>
                <button
                  className="bg-gray-200 text-red-500 px-1 rounded hover:bg-gray-300"
                  onClick={() => 이름변경(user.id)}
                >
                  수정
                </button>
              </div>
              <button
                className="bg-gray-200 text-red-500 px-1 rounded hover:bg-gray-300"
                onClick={() => {
                  사용자삭제(user.id);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
