import React, { Component } from "react";

// eslint-disable-next-line
import $ from "jquery";

// CSS Import
import "./AboutPage.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";

import ContactModal from "./Components/ContactModal/ContactModal";
import Meetings from "./Components/Meetings/Meetings";

// Library Imports
import ReactTypingEffect from "react-typing-effect";

class AboutPage extends Component {
  state = {
    people: [
      {
        name: "Joshua Evenden-Wallick",
        grade: "11th",
        image: "../images/Members/Josh.png",
        desc: "Someone's concoise (since no one actually wants to read all of it) description here",
      },
    ],
  };
  render() {
    return (
      <div className="AboutPageDiv">
        <Navbar />
        <div className="FadeInLoad">
          <div className="LinksPageTitleDiv">
            <ReactTypingEffect
              text={["About"]}
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
        <div className="FadeInLoad">
          <hr />
          <h2>General Info</h2>
          <div className="AboutRow">
            {/* I know it is using UL's for no reason, dont know why its like that but it works so idc, cry */}
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutLi">
                <img
                  src="../images/About/Us.png"
                  className="AboutImage"
                  id="UsPic"
                ></img>
              </li>
            </ul>
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutLi">
                {/* VAL CHANGE HERE */}
                <p>Stuff about us and our members</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="FadeInLoad">
          <hr />
          <h2>Building Robots</h2>
          <div className="AboutRow">
            {/* I know it is using UL's for no reason, dont know why its like that but it works so idc, cry */}
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutLi">
                {/* VAL CHANGE HERE */}
                <p>Stuff about robots and building</p>
              </li>
            </ul>
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutLi">
                <img
                  src="../images/About/Robot1.png"
                  className="AboutImage"
                  id="UsPic"
                ></img>
              </li>
            </ul>
          </div>
        </div>
        <div className="FadeInLoad">
          <hr />
          <h2>Coding Robots</h2>
          <div className="AboutRow">
            {/* I know it is using UL's for no reason, dont know why its like that but it works so idc, cry */}
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutLi">
                <img
                  src="../images/About/Code.png"
                  className="AboutImage"
                  id="UsPic"
                ></img>
              </li>
            </ul>
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutLi">
                {/* VAL CHANGE HERE */}
                <p>Stuff about coding the robots</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  getDayDiff(startDay) {
    var oldDate = new Date(startDay);
    var curDate = new Date();
    var timeDiff = curDate.getTime() - oldDate.getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);
    return dayDiff;
  }
}

export default AboutPage;
