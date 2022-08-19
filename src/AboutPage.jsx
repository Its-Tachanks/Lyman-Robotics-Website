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
        desc: "This is my third time being in this club with past FLL experiences. I am a rather introverted person who enjoys playing video games and watching shows.",
      },
      {
        name: "Val Rojas Acevedo",
        grade: "10th",
        image: "../images/Members/Val.png",
        desc: "This is my second year doing robotics with Lyman. I had a lot of fun last year doing mostly code and want to do the same this year.",
      },
      {
        name: "Logan Weil",
        grade: "10th",
        image: "../images/Members/Logan.png",
        desc: "This is my second year with Lyman Robotics. Last year I was a driver and builder, so I'm hoping to get more coding experience this time around.",
      },
      {
        name: "Ani Subbert",
        grade: "10th",
        image: "../images/Members/Ani.png",
        desc: "My favorite part of robotics is the building but I also enjoy programming. I'm not the best at getting around on the program, but I hope to get better at it.",
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
