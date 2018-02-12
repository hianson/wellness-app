import React, { Component } from 'react';
import GetEvents from './components/GetEvents';
import CurrentLocation from './components/CurrentLocation';
import Container from './components/Container';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      address: ''
    }
  }

  handleAddress = (addressValue) => {
    this.setState({address: addressValue})
  }

  render() {
    return (
      <div className="App">
      <Container />
        <CurrentLocation onChangeAddress={this.handleAddress}/>
        <GetEvents />
      </div>
    );
  }
}

export default App;
