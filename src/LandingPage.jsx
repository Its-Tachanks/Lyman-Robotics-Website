import React, { Component } from "react";

// eslint-disable-next-line
import $ from "jquery";

// CSS Import
import "./LandingPage.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";
import ContactModal from "./Components/ContactModal/ContactModal";
import Meetings from "./Components/Meetings/Meetings";

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
          <h2>What we do</h2>
          <p>
            Someone give me a paragraph to put here, dont really feel like
            writing one that isnt 2 words long
          </p>
        </div>
        <div className="FadeInLoad">
          <hr />
          <h2>Meeting Info</h2>
          <Meetings />
          <p>Building 6</p>
          <p>Room 019</p>
        </div>
        <div className="SignUpDiv FadeInLoad">
          <hr />
          <h2 className="SignUpTlt">Join the club</h2>
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
