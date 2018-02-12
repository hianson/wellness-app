import React from 'react';
import ReactDOM from 'react-dom';

export class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: {
        lat: 0,
        lng: 0
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 15;
      let lat = this.state.coords.lat;
      let lng = this.state.coords.lng;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    // ...
  }

  render() {
    const style = {
      width: '500px',
      height: '500px'
    }
    return (
      <div style={style} ref='map'>
        Loading map...
      </div>
    )
  }
}

export default Map;