import React, { useState } from 'react';

const EventPractice = () => {
  /*
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
*/
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const netxForm = {
      ...form, // 기존 form 내용을 여기 복사
      [e.target.name]: e.target.value, // 원하는 값 덮어쓰기
    };
    setForm(netxForm);
  };

  const onClick = () => {
    alert(username + ':' + message);
    // setUsername('');
    // setMessage('');
    setForm({ username: '', message: '' });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1> 이벤트 연습</h1>
      <input
        type="text"
        name="username"
        plcaholder="사용자명"
        value={username}
        // onChange={onChangeUsername}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        // onChange={onChangeMessage}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
