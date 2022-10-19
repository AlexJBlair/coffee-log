import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleHeader from './components/TitleHeader';
import LogBoxInput from './components/LogBox';
import CoffeeEntryForm from './components/CoffeeEntryForm';
import Footer from './components/Footer';
class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
          <TitleHeader />
          <LogBoxInput />
          <CoffeeEntryForm />
          <Footer />
      </div>
    );
  }
}

export default App;
