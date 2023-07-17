import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

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
					<p id="ValParagraphIntro">
						We are an independent, student-run club that focuses on coding,
						building, and testing robots. Everyone is welcome, since there is no
						better way to learn than to participate. There is a spot for anyone
						who wants to work and be part of the multiple competitions we do on
						regional, and state levels throughout the FIRST TECH CHALLENGE
						season.
					</p>
					<NavLink to="/about" className="LearnMoreNav">
						Learn More
					</NavLink>
				</div>
				<div className="FadeInLoad">
					<hr />
					<h2>Meeting Info</h2>
					<Meetings />
					<NavLink to="/schedule" className="LearnMoreNav">
						View upcoming events
					</NavLink>
				</div>
				<div className="SignUpDiv FadeInLoad">
					<hr />
					<h2 className="SignUpTlt">Join the club</h2>
					{/*<p>Sign ups are currently closed</p>*/}
					<ContactModal
						btnText="Click here to sign up!"
						inputs={[
							"Current_Grade",
							"Name",
							"Personal_(Not_School)_Contact_Email",
							"Student_ID",
						]}
						desc="Enter your relative information below"
						title="Lyman Robotics Club Sign Up"
					/>
				</div>
				<div className="FadeInLoad">
					<hr />
					<h2>Next meeting</h2>
					<p className="LearnMoreNav">TBD</p>
				</div>
				<div className="EndSpacer" style={{ marginTop: "2rem" }}></div>
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
