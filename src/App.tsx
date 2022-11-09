import React, { useState, ChangeEvent, MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, decCount } from "./modules/actions/hello";
import { RootState } from "./modules/reducer";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.hello.count);

  const [txt, setTxt] = useState<string>("");

  const onChangeTxt = (e: ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };

  const onClickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(addCount(Number(txt)));
    setTxt("");
  };

  const onClickDec = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(decCount(Number(txt)));
    setTxt("");
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
