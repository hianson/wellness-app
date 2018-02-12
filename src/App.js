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

  // on componentDidMount, write function which gets user's current position
  // set coords state to user's current position lat LatLng
  componentDidMount() {
    console.log('getting users coords')
    navigator.geolocation.watchPosition((position) => {
      var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      this.setState({ coords })
    });
  }

  handleAddress = (addressValue) => {
    this.setState({coords: addressValue})
  }

  render() {
    return (
      <div className="App">
        <Container coords={this.state.coords}/>
        <GetCoordinates onChangeAddress={this.handleAddress}/>
        <GetEvents coords={this.state.coords}/>
      </div>
    );
  }
}

export default App;
