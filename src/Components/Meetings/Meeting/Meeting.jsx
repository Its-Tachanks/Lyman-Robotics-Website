import React, { Component } from "react";

import "./Meeting.css";

class Meeting extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 href={this.props.link}>{this.props.title}</h3>
        <p>{this.props.description}</p>
        {this.props.note}
      </React.Fragment>
    );
  }
}

export default Meeting;
