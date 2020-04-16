# 컴포넌트의 라이프사이클 메서드

## 라이프 사이클 메서드의 종류는 총 9개.

### Will 접두사 메서드는 어떤 작업 '전'에 실행되는 메서드

### Did 접두사 메서드는 어떤 작업 '후'에 실행되는 메서드

### 라이프사이클 카테고리 마운트, 업데이트, 언마운트

#### 마운트

마운트: DOM이 생성되고 웹 브라우저상에 나타나는 것

마운트 할 때 호출하는 메서드: 컴포넌트 만들기 -> constructor -> getDerivedStateFromProps -> render -> componentDidMount
constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드
render: 우리가 준비한 UI를 랜더링하는 메서드
componentDidMount: 컴포넌트가 웹 브라우저 상에 나타난 후 호출하는 메서드

#### 업데이트

업데이트: 컴포넌트는 아래 네 가지의 경우 업데이트 함.
props가 바뀔 때
state가 바뀔 때
부모 컴포넌트가 리랜더링 될 때
this.forceUpdate로 강제로 랜더링을 트리거 할 때
업데이트 할 때 호출하는 메서드: 업데이트를 발생시키는 요인(props 변경, state 변경, 부모 컴포넌트 리랜더링) -> getDerivedStateFromProps -> shouldComponentUpdate -true 반환시 render 호출, false 반환시 여기서 작업 중지-> render -> getSnapshotBeforeUpdate -웹브라우저 상의 실제 DOM 변화-> componentDidUpdate

getDerivedStateFromProps: 마운트 과정에서 호출되고, 업데이트가 시작하기 전에도 호출 됨 props의 변화에 따라 state 값에도 변화룰 주고 싶을 때 사용
shouldComponentUpdate: 컴포넌트가 리랜더링 할지말지 결정하는 메서드, 만약 특정 함수에서 this.forceUpdate() 함수를 호출하면 이 과정을 생략하고 바로 render 함수 호출.
render: 컴포넌트를 리랜더링 함.
getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

#### 언마운트

언마운트: 마운트의 반대 과정, 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 함.
언마운트 할 때 호출하는 메서드: 언마운트하기 -> componentWillUnmount
componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
