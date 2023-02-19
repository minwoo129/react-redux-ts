import React, { useState, ChangeEvent, MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, decCount } from "./modules/actions/hello";
import { RootState } from "./modules/reducer";
import { getGithubProfileThunk } from "./modules/thunk/hello";

const App = () => {
  const dispatch = useDispatch<any>();
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

  const _getGithubProfile = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const result = await dispatch(
        getGithubProfileThunk({
          subPath: "/minwoo129",
        })
      );
    } catch (e: any) {
      console.log("_getGithub error: ", e);
    }
  };

  return (
    <div className="App">
      <div>
        <input value={txt} type={"number"} onChange={onChangeTxt} />
        <button onClick={onClickAdd}>덧셈</button>
        <button onClick={onClickDec}>뺄셈</button>
      </div>
      <button onClick={_getGithubProfile}>github 계정 가져오기</button>

      <div>{count}</div>
    </div>
  );
};

export default App;
