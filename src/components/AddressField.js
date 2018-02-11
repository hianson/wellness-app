import React, { Component } from 'react';
import axios from 'axios';

class AddressField extends Component {
  constructor() {
    super();

    this.state = {
      // events: null
    }
  }



  // componentDidMount() {
  //   const key = process.env.REACT_APP_EVENTBRITE_KEY
  //   var self = this
  //
  //   axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${key}&categories=107`)
  //   .then(response => {
  //     let events = response.data.events.map((event, i) => {
  //       return(
  //         <li key={i}>{event.name.text}</li>
  //       )
  //     })
  //     // console.log(response)
  //     self.setState({ events: events })
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

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
