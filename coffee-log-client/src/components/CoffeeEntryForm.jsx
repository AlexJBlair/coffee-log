import React, { Component } from 'react';
import './CoffeeEntryForm.css';

class CoffeeEntryForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className='coffee-form'>
          <label className='coffee-entry-form-label'>Coffee Database Entry Form</label>
          <div>
            <div>
              <input
                className='coffee-form-name'
                type='text'
                name='coffee-input-name'
                placeholder='Coffee name'
              />
            </div>
            <div>
              <input
                className='coffee-form-order-date'
                type='date'
                name='coffee-input-order-date'
                placeholder='Date of order'
              />
            </div>
            <div>
              <input
                className='coffee-form-roast'
                type='text'
                name='coffee-input-roast'
                placeholder='Type of roast'
              />
            </div>
            <div>
              <input
                className='coffee-form-rating'
                type='text'
                name='coffee-input-rating'
                placeholder='Rating'
              />
            </div>
            <div>
              <input
                className='coffee-form-origin-country'
                type='text'
                name='coffee-input-origin-country'
                placeholder='Country of origin'
              />
            </div>
            <div>
              <input
                className='coffee-form-bought-from'
                type='text'
                name='coffee-input-purchased-from'
                placeholder='Where is this coffee from?'
              />
            </div>
            <div>
              <button
                className='coffee-form-submit'
                type='submit'
                name='coffee-input-add-entry'>
                Add to bean base!
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CoffeeEntryForm;
