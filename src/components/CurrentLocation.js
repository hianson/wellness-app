import React, { Component } from 'react';
// import axios from 'axios';

class CurrentLocation extends Component {
  constructor() {
    super();

    this.state = {
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    var address = event.target.value
    this.setState({address: event.target.value});
    this.props.onChangeAddress(address)
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Address:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CurrentLocation;
