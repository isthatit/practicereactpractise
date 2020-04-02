import React from 'react';
import MyComponent from './MyComponent';
import MyClassTypeComponent from './MyClassTypeComponent';

const App = () => {
  return (
    // <MyComponent name="react" favoriteNumber={1}>
    //   리액트
    // </MyComponent>
    <MyClassTypeComponent
      name="react"
      favoriteNumber={1}
    ></MyClassTypeComponent>
  );
};

export default App;
