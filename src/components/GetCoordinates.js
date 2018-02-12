import React, { Component } from 'react';
import axios from 'axios';

class GetCoordinates extends Component {
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
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.address) {
      this.getCoordinates();
    }
  }

  getCoordinates() {
    var address = this.state.address
    var self = this;

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`)
    .then(response => {
      var lat = response.data.results[0].geometry.location.lat
      var lng = response.data.results[0].geometry.location.lng
      var coords = {
        lat: lat,
        lng: lng
      }
      self.setState({ coords })
      this.props.onChangeAddress(this.state.coords)
      
    })
    .catch(error => {
      console.log(error);
    });

  }

  render() {
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

export default GetCoordinates;
