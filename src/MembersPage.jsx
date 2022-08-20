import React, { Component } from "react";

// eslint-disable-next-line
import $ from "jquery";

// CSS Import
import "./MembersPage.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";

import ContactModal from "./Components/ContactModal/ContactModal";
import Meetings from "./Components/Meetings/Meetings";

// Library Imports
import ReactTypingEffect from "react-typing-effect";

class MembersPage extends Component {
  state = {
    people: [
      {
        name1: "Joshua Evenden-Wallick",
        grade1: "11th",
        image1: "../images/Members/Josh.png",
        name2: "Val Rojas",
        grade2: "10th",
        image2: "../images/Members/Val.png",
      },
      {
        name1: "Logan Weil",
        grade1: "10th",
        image1: "../images/Members/Logan.png",
        name2: "Ani Subbert",
        grade2: "10th",
        image2: "../images/Members/Ani.png",
      },
      {
        name1: "Kylie Perrone",
        grade1: "12th",
        image1: "../images/Members/Kylie.png",
        name2: "Lam Nguyen",
        grade2: "12th",
        image2: "../images/Members/Lam.png",
      },
      {
        name1: "Alana Ali",
        grade1: "12th",
        image1: "../images/Members/Alana.png",
        name2: "Chloe Haye",
        grade2: "10th",
        image2: "../images/Members/Chloe.png",
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
              text={["Members"]}
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
        <div className="AllLinks">
          {this.state.people.map((peopleObject, index) => (
            <div
              className="PersonRow FadeInLoad"
              key={peopleObject.text1 + "hi"}
            >
              {/* I know it is using UL's for no reason, dont know why its like that but it works so idc, cry */}
              <ul
                style={{ textAlign: "center", listStyle: "none" }}
                className="PersonColumn"
              >
                <li className="PersonLi">
                  <h2 className="PersonName">{peopleObject.name1}</h2>
                  <p className="PersonDesc">{peopleObject.grade1 + " grade"}</p>
                  <img src={peopleObject.image1} className="PersonImage"></img>
                </li>
              </ul>
              <ul
                style={{ textAlign: "center", listStyle: "none" }}
                className="PersonColumn"
              >
                <li className="PersonLi">
                  <h2 className="PersonName">{peopleObject.name2}</h2>
                  <p className="PersonDesc">{peopleObject.grade2 + " grade"}</p>
                  <img src={peopleObject.image2} className="PersonImage"></img>
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

export default MembersPage;
