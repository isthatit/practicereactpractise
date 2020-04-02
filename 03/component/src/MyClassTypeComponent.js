import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyClassTypeComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;

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
  }

  // defaultProps와 propTypes를 클래스 내부에 지정하는 방법
  static defaultProps = {
    name: '기본 이름'
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
}
/*
MyClassTypeComponent.defaultProps = {
  name: '기본 이름'
};

MyClassTypeComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};
*/
export default MyClassTypeComponent;
