import React, { Component } from "react";

import Meeting from "./Meeting/Meeting";

import "./Meetings.css";

class Meetings extends Component {
  render() {
    return (
      <div className="MeetingRow">
        {/* I know it is using UL's for no reason, dont know why its like that but it works so idc, cry */}
        <ul
          style={{ textAlign: "center", listStyle: "none" }}
          className="MeetingsColumn"
          id="Meet1"
        >
          <li className="MeetDay">
            <Meeting title="Monday" link="/" description="2:20-5:00" />
          </li>
        </ul>
        <ul
          style={{ textAlign: "center", listStyle: "none" }}
          className="MeetingsColumn"
          id="Meet2"
        >
          <li className="MeetDay">
            <Meeting title="Wednesday" link="/" description="1:20-4:00" />
          </li>
        </ul>
        <ul
          style={{ textAlign: "center", listStyle: "none" }}
          className="MeetingsColumn"
          id="Meet3"
        >
          <li className="MeetDay">
            <Meeting
              title="Friday"
              link="/"
              description="2:20-5:00"
              note={
                <p style={{ fontSize: "10px" }}>
                  <b>When needed</b>
                </p>
              }
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Meetings;
