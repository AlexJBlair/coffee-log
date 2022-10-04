import React, { Component } from 'react';
import './LogBox.css';

class LogBoxInput extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className='coffee-search-form'>
          <input
            className='coffee-search-textbox'
            type='text'
            name='coffee-search'
            placeholder='The best coffee beans!'
            required
          />
          <div>
            <button
              type='submit'
              className='coffee-search-button'>
              Grind those beans
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogBoxInput;
