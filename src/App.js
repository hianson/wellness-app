import React, { Component } from 'react';
import GetEvents from './components/GetEvents';
import GetCoordinates from './components/GetCoordinates';
import Container from './components/Container';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      address: '',
      coords: {
        lat: 0,
        lng: 0
      }
    }
  }

  handleAddress = (addressValue) => {
    this.setState({coords: addressValue})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Container />
        <GetCoordinates onChangeAddress={this.handleAddress}/>
        <GetEvents />
      </div>
    );
  }
}

export default App;
