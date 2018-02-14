import React from 'react';

export class Footer extends React.Component {

  render() {
    var image = require('../img/eventbrite.png');
    return (
      <div style={footerStyle}>
        <p style={textStyle}>Powered by</p>
        <a href="https://www.eventbrite.com/" target="_blank" rel="noopener noreferrer"><img style={imgStyle} src={image} alt='Eventbrite' /></a>
      </div>
    )
  }
}

const footerStyle = {
  marginTop: '20px'
}
const textStyle = {
  color: '#F4683a',
  margin: '0'
}
const imgStyle = {
  width: '100px'
}

export default Footer;
