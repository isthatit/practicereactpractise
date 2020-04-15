import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      //push는 기존 배열에 추가, concat은 새롭게 배열을 만들어 추가함. 리액트는 기존 배열을 두고 새로운 값을 상태로 설정해야 최적화 할 수 있다고 함.
      id: nextId, //nextId값을 id로 설정
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값 1 증가
    setNames(nextNames); //names 값 업데이트
    setInputText(""); //inputtext 비움
  };

  const onRemove = (id) => {
    const netxNames = names.filter((name) => name.id !== id);
    setNames(netxNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IterationSample;
