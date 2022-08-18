import React, { Component } from "react";
import $ from "jquery";

// CSS Import
import "./LandingPage.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";
import ContactModal from "./Components/ContactModal/ContactModal";

// Library Imports
import ReactTypingEffect from "react-typing-effect";

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="FadeInLoad">
          <div className="LandingPageTitleDiv">
            <ReactTypingEffect
              text={["Lyman Robotics"]}
              eraseSpeed="70"
              typingDelay="800"
              speed="180"
              eraseDelay="99999999999999"
              cursor=" "
              className="LandingPageTitle"
              id="PageTyping"
            />
          </div>
        </div>
        <div className="FadeInLoad">
          <hr />
          <h2>Want to find out more?</h2>
        </div>
        <div className="SignUpDiv FadeInLoad">
          <hr />
          <h2 className="SignUpTlt">Sign Up</h2>
          <ContactModal
            btnText="Click here to sign up!"
            inputs={[
              "Current_Grade",
              "Name",
              "Preferred_Contact_Email",
              "Student_ID",
            ]}
            desc="Enter your relative information in order to sign up"
            title="Lyman Robotics Club Sign Up"
          />
        </div>
        <div className="InfoDiv FadeInLoad">
          <hr />
          <h2 className="SignUpTlt">Information</h2>
          <div className="timesDiv">
            <h3
              style={{
                paddingBottom: "0.5rem",
                textDecoration: "underline",
              }}
            >
              Meeting days
            </h3>
            <ul className="DaysList">
              <li>Monday: 2:20pm-5:00pm</li>
              <li>Wednesday: 1:20pm-4:00pm</li>
            </ul>
            <h3
              style={{
                paddingBottom: "0.5rem",
                paddingTop: "0.5rem",
                textDecoration: "underline",
              }}
            >
              Location
            </h3>
            <p>Building 6, near cafeteria, Room 019</p>
          </div>
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
}

export default LandingPage;
