import React from 'react';
import Map from './Map';
import {GoogleApiWrapper} from 'google-maps-react';

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Map
          google={this.props.google}
          events={this.props.events}
          coords={this.props.coords}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(Container)
