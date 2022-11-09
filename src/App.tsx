import React, { useState, ChangeEvent, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./modules/reducer";

const App = () => {
  const count = useSelector((state: RootState) => state.hello.count);

  const [txt, setTxt] = useState<string>("");

  const onChangeTxt = (e: ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };

  const onClickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("txt: ", txt);
  };

  const onClickDec = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("txt: ", txt);
  };

  return (
    <div className="App">
      <input value={txt} type={"number"} onChange={onChangeTxt} />
      <button onClick={onClickAdd}>덧셈</button>
      <button onClick={onClickDec}>뺄셈</button>

      <div>{count}</div>
    </div>
  );
};

export default App;
