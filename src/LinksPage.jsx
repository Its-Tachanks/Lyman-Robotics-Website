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
        image1: "../images/Links/Discord.png",
        text1: "Join our Discord",
        link1: "https://discord.gg/q6cqSP2jCN",
        image2: "../images/Links/First.png",
        text2: "FTC Website",
        link2: "https://www.firstinspires.org/robotics/ftc",
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
        <div className=" AllLinks">
          {this.state.links.map((linkObject, index) => (
            <div className="LinkRow FadeInLoad" key={linkObject.text1 + "hi"}>
              {/* I know it is using UL's for no reason, dont know why its like that but it works so idc, cry */}
              <ul
                style={{ textAlign: "center", listStyle: "none" }}
                className="LinkColumn"
              >
                <li className="LinkLi">
                  <div className="Container">
                    <a
                      href={linkObject.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkObject.image1}
                        className="ImageLink ScaleHover"
                      ></img>
                      <div className="CenteredText">{linkObject.text1}</div>
                    </a>
                  </div>
                </li>
              </ul>
              <ul
                style={{ textAlign: "center", listStyle: "none" }}
                className="LinkColumn"
              >
                <li className="LinkLi">
                  <div className="Container">
                    <a
                      href={linkObject.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkObject.image2}
                        className="ImageLink ScaleHover"
                      ></img>
                      <div className="CenteredText">{linkObject.text2}</div>
                    </a>
                  </div>
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
