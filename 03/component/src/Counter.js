import React, { Component } from 'react';

class Counter extends Component {
  /*  
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0
    };
  }
  */

  //state 를 constructor 에서 꺼내기
  state = {
    number: 0,
    fixedNumber: 0
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>불변값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1
              },
              () => {
                //callBack Func
                console.log('방금 setState 호출 됨.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
