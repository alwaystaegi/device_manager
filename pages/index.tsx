import type { NextPage } from "next";
import Counter from "../components/Counter";

const Home: NextPage = () => {
  //prisma 코드는 csr환경에서는 사용할수 없음 ... 왜? 위험하다!

  return (
    <div>
      hello world
      <Counter title={1234} name="jh" />
      <button className="bg-gray-300 p-2 rounded m-2">ㅠㅠ 사용자추가</button>
    </div>
  );
};

export default Home;
