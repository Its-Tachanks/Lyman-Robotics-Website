import React, { Component } from "react";

// eslint-disable-next-line
import $ from "jquery";

// CSS Import
import "./SchedulePage.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";

// Library Imports
import ReactTypingEffect from "react-typing-effect";

class SchedulePage extends Component {
  state = {
    events: [
      {
        date: new Date("September 19 2022 2:20"),
        pmAm: "PM",
        location: "Building 9",
        desc: "Recurring meeting (Every monday)",
      },
      {
        date: new Date("September 21 2022 1:20"),
        pmAm: "PM",
        location: "Building 9",
        desc: "Recurring meeting (Every wednesday)",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="FadeInLoad">
          <div className="LinksPageTitleDiv">
            <ReactTypingEffect
              text={["Schedule"]}
              eraseSpeed="70"
              typingDelay="800"
              speed="180"
              eraseDelay="99999999999999"
              cursor=" "
              className="LinksPageTitle"
              id="PageTyping"
            />
          </div>
        </div>
        <div className="AllSchedule">
          {this.state.events.map((meetObject, index) => (
            <div className="FadeInLoad Meet" key={meetObject.text1 + "hi"}>
              <hr></hr>
              <h2>
                {this.getDay(meetObject.date) +
                  " " +
                  (meetObject.date.getMonth() + 1) +
                  "/" +
                  meetObject.date.getDate() +
                  "/" +
                  meetObject.date.getFullYear()}
              </h2>
              <h3>
                {meetObject.date.getHours() +
                  ":" +
                  meetObject.date.getMinutes() +
                  " " +
                  meetObject.pmAm}
              </h3>
              <h3 style={{ paddingBottom: ".4rem" }}>{meetObject.location}</h3>
              <p className="MeetDesc">{meetObject.desc}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }

  getDayDiff(startDay) {
    var oldDate = new Date(startDay);
    var curDate = new Date();
    var timeDiff = curDate.getTime() - oldDate.getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);
    return dayDiff;
  }

  getDay(date) {
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    return weekdays[date.getDay()];
  }
}

export default SchedulePage;
