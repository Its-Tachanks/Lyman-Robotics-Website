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
  state = {
    links: [
      {
        image1: "../images/Languages/CSS.png",
        text1: "Test 1",
        link1: "https://tachanks.xyz",
        image2: "../images/Languages/HTML.png",
        text2: "Test 2",
        link2: "https://tachanks.xyz",
      },
      {
        image1: "../images/Languages/JS.png",
        text1: "Test 3",
        link1: "https://tachanks.xyz",
        image2: "../images/Languages/Python.png",
        text2: "Test 4",
        link2: "https://tachanks.xyz",
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
        <div className="FadeInLoad AllLinks">
          {this.state.links.map((linkObject, index) => (
            <div className="LinkRow" key={linkObject.text1 + "hi"}>
              {/* I know it is using UL's for no reason, dont know why its like that but it works so idc, cry */}
              <ul
                style={{ textAlign: "center", listStyle: "none" }}
                className="LinkColumn"
              >
                <li className="LinkLi">
                  <a href={linkObject.link1}>
                    <img src={linkObject.image1} className="ImageLink"></img>
                  </a>
                </li>
              </ul>
              <ul
                style={{ textAlign: "center", listStyle: "none" }}
                className="LinkColumn"
              >
                <li className="LinkLi">
                  <a href={linkObject.link2}>
                    <img src={linkObject.image2} className="ImageLink"></img>
                  </a>
                </li>
              </ul>
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
}

export default LinksPage;
