import React, { Component } from 'react';
import axios from 'axios';

class GetEvents extends Component {
  constructor() {
    super();

    this.state = {
      events: null
    }
  }

  // whenever component gets new coordinates, get new events from them!
  // componentWillReceiveProps(nextProps) {
  //   this.props = nextProps;
  //
  //   const secret = process.env.REACT_APP_EVENTBRITE_KEY
  //   var self = this
  //   var lat = this.props.coords.lat
  //   var lng = this.props.coords.lng
  //
  //   axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${secret}&categories=107&&location.latitude=${lat}&location.longitude=${lng}`)
  //   .then(response => {
  //     let events = response.data.events.map((event, i) => {
  //       return(
  //         <li key={i}>{event.name.text}</li>
  //       )
  //     })
  //     self.setState({ events: events })
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  componentDidUpdate() {
    // console.log(this.state.events)
    // this.props.events = this.state.events
  }

  render() {
    return (
      <div>
        {this.state.events}
      </div>
    );
  }
}

export default GetEvents;
