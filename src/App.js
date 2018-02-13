import React, { Component } from 'react';
import GetEvents from './components/GetEvents';
import GetCoordinates from './components/GetCoordinates';
import Container from './components/Container';
import axios from 'axios';
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

  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
      var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      this.setState({ coords })
    });
  }

  handleAddress = (addressValue) => {
    this.setState({coords: addressValue}, () => {
      this.getEvents()
    })
  }

  // componentDidUpdate() {
  //   this.getEvents()
  // }

  //write a function to getEvents using the new coords
  getEvents() {
    // console.log('getting events with new coords: ', this.state.coords)
    var secret = process.env.REACT_APP_EVENTBRITE_KEY
    var lat = this.state.coords.lat
    var lng = this.state.coords.lng

    axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${secret}&categories=107&&location.latitude=${lat}&location.longitude=${lng}`)
    .then(response => {
      this.setState({ events: response.data.events }, function() {
        console.log(this.state.events)
      })
    })
    .catch(error => {
      console.log(error);
    });
  }


  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <Container coords={this.state.coords}/>
        <GetCoordinates onChangeAddress={this.handleAddress}/>
      </div>
    );
  }
}

export default App;
