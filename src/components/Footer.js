import React from 'react';

export class Footer extends React.Component {

  render() {
    var image = require('../img/eventbrite.png');
    return (
      <div style={footerStyle}>
        <p style={textStyle}>Powered by</p>
        <img style={imgStyle} src={image} alt='Eventbrite' />
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
