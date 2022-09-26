import { useState } from "react";

interface CtProps {
  title: String | Number | Number[];
  name: String;
  instagram?: String;
}
export default function (props: CtProps) {
  const [counter, setCounter] = useState(0);

  return (
    <div className=" bg-slate-300">
      <div>제목...?{props.title.toString()}</div>
      <div>카운터:{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
