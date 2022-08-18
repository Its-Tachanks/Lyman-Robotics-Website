import React, { Component } from "react";

// eslint-disable-next-line
import $ from "jquery";

// CSS Import
import "./LinksPage.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";
import ContactModal from "./Components/ContactModal/ContactModal";
import Meetings from "./Components/Meetings/Meetings";

// Library Imports
import ReactTypingEffect from "react-typing-effect";

class LinksPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="FadeInLoad">
          <div className="LinksPageTitleDiv">
            <ReactTypingEffect
              text={["Links"]}
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

export default LinksPage;
