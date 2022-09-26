import type { NextPage } from "next";
import Counter from "../components/Counter";
const Home: NextPage = () => {
  return (
    <div>
      hello world
      <Counter title={1234} name="jh" />
    </div>
  );
};

export default Home;
