import React, { useContext } from "react";
import { ListContext } from "./contexts/listContext";

function Test() {
  const { list, setList } = useContext(ListContext);

  const changeList = () => {
    setList(["asf", "hi"]);
  };

  console.log(list);
  return (
    <div>
      <button onClick={changeList}>Click</button>
    </div>
  );
}

export default Test;
