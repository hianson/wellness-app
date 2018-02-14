import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'

export class Map extends React.Component {
  constructor() {
    super()
    this.state = {
      markers: [],
      searchLocation: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.removeMarkers();
    this.props = nextProps;
    this.map.panTo({lat: this.props.coords.lat, lng: this.props.coords.lng})

    if (this.props && this.props.google) {
      const {google} = this.props;
      let lat = nextProps.coords.lat;
      let lng = nextProps.coords.lng;

      var allMarkers = [];

      var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: this.map
      })
      allMarkers.push(marker)
      // console.log(markers)
      // this.setState({ searchLocation })
    }
    this.renderMarkers(allMarkers)
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

      let zoom = 12;
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

  removeMarkers() {
    for (var i in this.state.markers) {
      var marker = this.state.markers[i]
      marker.setMap(null)
    }
  }

  renderMarkers(allMarkers) {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const events = this.props.events
      var image = require('../img/leaf.png');

      events.map((event, i) => {
        var lat = parseFloat(event.venue.latitude)
        var lng = parseFloat(event.venue.longitude)
        var date = moment(event.start.utc).format("dddd, MMMM Do YYYY, h:mmA")
        var desc = event.description.text
        if (event.description.text) {
          desc = event.description.text.slice(0, 255) + '...'
        }

        var marker = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          map: this.map,
          icon: image,
          url: event.url
        })

        var contentString =
          '<div id="content">'+
            `<h3 style="color: rgb(142, 194, 149);">${event.name.text}</h3>`+
            '<hr>' +
            `<h4>${date}</h4>`+
            `<p>${desc}</p>`+
          '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 300
        })

        marker.addListener('click', function() {
          window.open(marker.url)
        })

        marker.addListener('mouseover', () => {
          infowindow.open(this.map, marker)
        })

        marker.addListener('mouseout', () => {
          infowindow.close()
        })

        allMarkers.push(marker)
        return(marker)
      })
    }

    this.setState({ markers: allMarkers })
  }

  render() {
    const style = {
      width: '75vw',
      height: '75vh',
      margin: '40px auto 20px auto'
    }
    return (
      <div style={style} ref='map'>
        Loading map...
      </div>
    )
  }
}

export default Map;
