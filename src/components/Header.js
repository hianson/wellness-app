import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 style={hStyle}>Wellness App</h1>
      </div>
    )
  }
}

const hStyle = {
  color: '#acd6b2'
}

export default Header;
