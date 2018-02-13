import React from 'react';
import ReactDOM from 'react-dom';

export class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    this.map.panTo({lat: this.props.coords.lat, lng: this.props.coords.lng})

    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 15;
      let lat = this.props.coords.lat;
      let lng = this.props.coords.lng;

      var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: this.map,
        title: 'Hello World!'
      });
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
      let lat = this.props.coords.lat;
      let lng = this.props.coords.lng;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  renderMarkers() {
    // if google is available:
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      var events = this.props.events
      // take the events and map over them
      events.map((event, i) => {
        var lat = parseFloat(event.venue.latitude)
        var lng = parseFloat(event.venue.longitude)
        // create a new marker for every event!
        var marker = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          map: this.map,
          title: 'Hello World!'
        });
      })
    }
  }

  render() {
    // console.log(this.props.events)
    const style = {
      width: '500px',
      height: '500px'
    }
    return (
      <div style={style} ref='map'>
        Loading map...
        {this.renderMarkers()}
      </div>
    )
  }
}

export default Map;
