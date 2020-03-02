import React, { Fragment } from 'react';
import './App.css';

function App() {
  const name = '뤼액트';
  const number = 0;
  const name2 = undefined;

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 // 단위 생략하면 px
  };
  return (
    <div style={style}>
      {name === '리액트' ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
      {number && <h2>${number}</h2>}
      {name === '뤼액트' && <h2>뤼액트 안녕.</h2>}
      {name2}
      {/* style을 미리 지정하지 않고 바로 값을 지정하려면.. */}
      <div
        style={{
          backgroundColor: 'white',
          color: 'black',
          fontSize: 48,
          padding: 16
        }}
      >
        <p>Hello?</p>
      </div>
      <div className="react">
        <h2>css...</h2>
      </div>
    </div>
  );
}

export default App;
