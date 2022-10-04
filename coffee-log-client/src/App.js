import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleHeader from './components/TitleHeader';
import LogBoxInput from './components/LogBox';
class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <TitleHeader />
        <div>
          <LogBoxInput />
        </div>
      </div>
    );
  }
}

export default App;
