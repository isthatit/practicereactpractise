import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    // console.log("랜더링이 완료 되었습니다.");
    console.log({
      name,
      nickname,
    });
  });

  // 마운트 될 때만 실행하고 싶을 땐 두번째 파라미터로 빈 배열을 넣어줌
  useEffect(() => {
    //console.log("마운트 될 때만 실행");
  }, []);

  // 특정 값이 업데이트 될 때만 실행
  useEffect(() => {
    // console.log("name 값이 업데이트 될 때만 실행");
  }, [name]);

  // 컴포넌트가 언마운트 될 때나 업데이트 되기 직전에 실행
  useEffect(() => {
    return () => {
      console.log("cleanup");
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
