import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleHeader from './components/TitleHeader';
import LogBoxInput from './components/LogBox';
import Footer from './components/Footer';
class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <TitleHeader />
        <div>
          <LogBoxInput />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
