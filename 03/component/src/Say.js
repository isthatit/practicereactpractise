import React, { useState } from 'react';

const Say = () => {
  const arr = [1, 2];
  const one = arr[0];
  const two = arr[1];
  //비구조 할당
  const [arrOne, arrTwo] = arr;
  //console.log(arr, '\n', one, two, '\n', arrOne, arrTwo);

  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요');

  const [color, setColor] = useState('black');

  /*
  state를 사용할 때는 setState 또는 useState를 사용해서 값을 바꿔줘야 함. 
  */

  //객체 업데이트는? 객체 사본을 만들고, 그 사본에 값을 업데이트 한 후, 그 사본 상태를 setState 혹은 세터 함수를 통해 업데이트 함.
  const obj = { a: 1, b: 2, c: 3 };
  const nextObj = { ...obj, b: 2 }; // 사본을 만들어서 b 값만 덮어쓰기

  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false }
  ];

  let nextArray = array.concat({ id: 4 }); //새 항목 추가
  nextArray.filter(item => item.id !== 2);

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨강
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파랑
      </button>
    </div>
  );
};

export default Say;
