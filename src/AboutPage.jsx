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
                <p>We are a pretty dedicated and diverse team who works together to build and code the best robots we can. Our club is student-run, so every student gets a chance to participate and claim an important role in the process. Our officer posts are also constantly changing, so there is always room to do more! </p>
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
                <p>We build our robots from scratch, mainly for the FTC competition. Every member of the team gets a chance to participate in the buiding process and to learn the basics about each part. We, as a team, believe in the hands-on approach to learning, so we all pitch in whenit is time to build.</p>
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
                {/* Your comments are unnecessarily snappy, Tosh */}
                <p>If building is not necessarily your thing, or you are looking for something more, we code! Members also all get a change to contribute to the code, which is as important as the build. No prior conding experience? That is not an issue, since out experienced members would love to teach you all about how we do things.</p>
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
