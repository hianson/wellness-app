import React, { Component } from 'react';
import GetCoordinates from './components/GetCoordinates';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      address: '',
      events: [],
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
      this.setState({ coords }, () => { this.getEvents()})
    });
  }

  handleAddress = (addressValue) => {
    this.setState({coords: addressValue}, () => {
      this.getEvents()
    })

  }

  getEvents() {
    var secret = process.env.REACT_APP_EVENTBRITE_KEY
    var lat = this.state.coords.lat
    var lng = this.state.coords.lng

    axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${secret}&categories=107&location.latitude=${lat}&location.longitude=${lng}&expand=venue`)
    .then(response => {
      this.setState({ events: response.data.events })
    })
    .catch(error => {
      console.log(error);
    });
    this.getPlaces()
  }


  getPlaces() {
    // console.log('getting places')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container events={this.state.events} places={this.state.places} coords={this.state.coords}/>
        <GetCoordinates onChangeAddress={this.handleAddress}/>
        <Footer />
      </div>
    );
  }
}

export default App;
