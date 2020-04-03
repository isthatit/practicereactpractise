import React from 'react';
import PropTypes from 'prop-types';

const MyCompoenet = ({ name, favoriteNumber, children }) => {
  /*
  setTimeout(function() {
    console.log('hello world function');
  }, 1000);
  setTimeout(() => {
    console.log('hello world arrow');
  }, 1000);
  // 자신이 종속 된 객체의 this를 가르킴
  function BlackDog() {
    this.name = '흰둥이';
    return {
      name: '검둥이',
      bark: function() {
        console.log('BlackDogFunction', this.name + ': 멍멍');
      }
    };
  }

  const blackDog = new BlackDog();
  blackDog.bark();

  // 자신이 종속 된 인스턴스를 가르킴
  function WhiteDog() {
    this.name = '흰둥이';
    return {
      name: '검둥이',
      bark: () => {
        console.log('WhiteDogFunction', this.name + ': 멍멍!');
      }
    };
  }

  const whiteDog = new WhiteDog();
  whiteDog.bark();

  function twice(value) {
    return value * 2;
  }
  const triple = value => value * 3;
  */
  //비구조화 할당 문법 ES6 함수 파라미터 부분에서도 사용 가능
  // const { name, children } = props;
  return (
    <div>
      안녕하세요 제 이름은 {name}입니다.
      <br />
      children 값은 {children}
      입니다.
      <br />
      좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyCompoenet.defaultProps = {
  name: '기본 이름'
};

MyCompoenet.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyCompoenet;
