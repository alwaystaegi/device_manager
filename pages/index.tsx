import { User } from "@prisma/client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Counter from "../components/Counter";

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  //prisma 코드는 csr환경에서는 사용할수 없음 ... 왜? 위험하다!
  function 사용자추가함수() {
    console.log("사용자 추가함수가 클릭되었습니다.");
    fetch("/api/adduser");
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
        ㅠㅠ 사용자추가
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
