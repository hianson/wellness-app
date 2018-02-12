import React, { Component } from 'react';
import axios from 'axios';

class AddressField extends Component {
  constructor() {
    super();

    this.state = {
      // events: null
    }
  }

  render() {
    console.log(navigator.geolocation)
    return (
      <div>
        // {this.state.events}
      </div>
    );
  }
}

export default AddressField;
