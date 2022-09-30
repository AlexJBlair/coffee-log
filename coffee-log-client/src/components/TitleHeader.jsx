import React, { Component } from 'react';
import './TitleHeader.css';
class TitleHeader extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          className='coffee-bean-image'
          alt='coffee bean'
          src={process.env.PUBLIC_URL + '/coffee-bean.png'}
        />
        <h1 className='title-component-header'>Coffee Log</h1>
        <h3 className='title-component-sub-header'>
          Save some coffee, or find one you liked!
        </h3>
      </div>
    );
  }
}

export default TitleHeader;
