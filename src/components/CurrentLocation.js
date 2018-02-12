import React, { Component } from 'react';
import axios from 'axios';

class CurrentLocation extends Component {
  constructor() {
    super();

    this.state = {
      address: '',
      coords: {
        lat: 0,
        lng: 0
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    var address = event.target.value
    this.setState({address: event.target.value});
    this.props.onChangeAddress(address)
  }

  handleSubmit(event) {
    console.log('An address was submitted: ' + this.state.value);
    event.preventDefault();
    this.getCoordinates();
  }

  getCoordinates() {
    var address = this.state.address
    var self = this;

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`)
    .then(response => {
      var lat = response.data.results[0].geometry.location.lat
      var lng = response.data.results[0].geometry.location.lng
      // console.log(lat, lng)
      var coords = {
        lat: lat,
        lng: lng
      }
      self.setState({ coords })
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Address:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CurrentLocation;
