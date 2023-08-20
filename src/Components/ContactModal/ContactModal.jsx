import React, { Component } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

// eslint-disable-next-line
import $ from "jquery";

import "./ContactModal.css";

class ContactModal extends Component {
	state = {
		modalIsOpen: false,
	};

	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.sendEmail = this.sendEmail.bind(this);
	}

	componentDidMount() {
		Modal.setAppElement("#root");

		emailjs.init("uq4kVKFRDwE7pFfsW");
	}

	render() {
		const modalStyle = {
			overlay: {
				opacity: "1",
			},
			content: {
				// Centers modal
				top: "50%",
				left: "50%",
				right: "auto",
				bottom: "auto",

				transform: "translate(-50%, -50%)",
			},
		};

		return (
			<div className="contactDiv FadeInLoad" id="ContactDiv">
				<button
					className="LoadButton-pushable GameRequest"
					onClick={this.openModal}
				>
					<span className="LoadButton-shadow"></span>
					<span className="LoadButton-edge"></span>
					<span className="LoadButton-front text" id="contactBtnText">
						{this.props.btnText}
					</span>
				</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					//onAfterOpen={afterOpenModal}
					//onRequestClose={closeModal}
					style={modalStyle}
					contentLabel="Contact"
					className="ContactModal"
					overlayClassName="ContactModalOverlay"
				>
					<h2 className="ModalTitle">{this.props.title}</h2>
					{/* <div className="ModalDesc">{this.props.desc}</div> */}
					{this.props.inputs.map((inputName, index) => (
						<div className="msgInput" key={inputName + index}>
							<input
								placeholder={inputName.split("_").join(" ") + "..."}
								id={inputName + "ID"}
							></input>
						</div>
					))}
					<p style={{ fontSize: "12px" }}>
						Please join the{" "}
						<a
							href="https://discord.gg/x4ygHV653p"
							target="_blank"
							rel="noreferrer"
						>
							discord server
						</a>
						, this is how we communicate
					</p>
					<div className="subBtn">
						<button
							className="LoadButton-pushable GameRequest"
							onClick={this.sendEmail}
							id="CntBtn"
						>
							<span className="LoadButton-shadow"></span>
							<span className="LoadButton-edge"></span>
							<span className="LoadButton-front">Submit</span>
						</button>
					</div>
					<div className="btnSpacer"></div>
					<button
						className="LoadButton-pushable_CloseButton"
						onClick={this.openModal}
					>
						<span className="LoadButton-shadow_CloseButton"></span>
						<span className="LoadButton-edge_CloseButton"></span>
						<span className="LoadButton-front_CloseButton">Close</span>
					</button>
				</Modal>
			</div>
		);
	}

	openModal() {
		if (this.state.modalIsOpen) {
			this.setState({
				modalIsOpen: false,
			});
		} else if (!this.state.modalIsOpen) {
			this.setState({
				modalIsOpen: true,
			});
		}
	}

	sendEmail() {
		let boxName = document.getElementById("NameID").value;
		let boxGrade = document.getElementById("GradeID").value;
		let boxEmail = document.getElementById("Personal_EmailID").value;
		let boxExper = document.getElementById(
			"Prior_experiences/knowledge_(if_any)ID"
		).value;

		if (
			boxGrade === "" ||
			boxGrade === undefined ||
			boxName === "" ||
			boxName === undefined ||
			boxEmail === "" ||
			boxEmail === undefined ||
			boxExper === "" ||
			boxExper === undefined
		) {
			this.setState({
				modalIsOpen: false,
			});
			alert("Please enter all answers fully!");
			return;
		}

		// ! Use Test webhook here
		let useTestWebhook = false;
		let webhookUrl = atob(
			"aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTEzMDQ5OTE5NDYzMzg2NzI3NC94ZEdueTNKTXR4T2ctcXBnWmlLQ2hmUlY3TEVma2JRZVpEMXd6WDlGUkZfc3VSUk9yTXlTVmlhdzR5bVIwY3k0Wjh3bw==" /* Webhook URL */
		);

		// ! Set to use webhook function
		let useWebhook = true;

		// Discord Webhook code
		if (useWebhook) {
			const request = new XMLHttpRequest();
			request.open("POST", webhookUrl, true);
			request.setRequestHeader("Content-type", "application/json");
			const params = {
				embeds: [
					{
						title: "Club sign up form",
						description: "Someone signed up for the club!",
						color: 1458879,
						fields: [
							{
								name: "Name",
								value: boxName,
								inline: true,
							},
							{
								name: "Grade",
								value: boxGrade,
								inline: true,
							},
							{
								name: "\u200b",
								value: "\u200b",
								inline: true,
							},
							{
								name: "Email",
								value: boxEmail,
								inline: true,
							},
							{
								name: "Prior experience",
								value: boxExper,
								inline: true,
							},
						],
						footer: {
							icon_url:
								"http://lymanrobotics.netlify.app/images/NavbarLogo.png",
						},
					},
				],
			};
			request.send(JSON.stringify(params));

			console.log(
				`Discord webhook hopefully sucessfully sent since I don't have a way to get a promise return...`
			);
		}

		// ! Set to use email function
		var useEmailCode = false;

		// Email Code
		if (useEmailCode) {
			emailjs
				.send(
					"service_o3m7mlh",
					"template_1fnr06m",
					{
						grade: boxGrade,
						name: boxName,
						email: boxEmail,
						id: boxExper,
					},
					"uq4kVKFRDwE7pFfsW"
				)
				.then(
					function (response) {
						alert("The response was sent! Now join our discord please :)");
						console.log(
							`Email sent!\nStatus:${response.status}\nText:${response.text}`
						);
					},
					function (error) {
						alert(
							`Something went wrong, please email "joshuaew06@gmail.com" with your response \nError Code:${error.number}\nError Message:${error.message}`
						);
						console.log(`Email\nStatus:${error.number}\nText:${error.message}`);
					}
				);
		}
		// Clear boxes on submit
		document.getElementById("GradeID").value = "";
		document.getElementById("NameID").value = "";
		document.getElementById("Personal_EmailID").value = "";
		document.getElementById("Prior_experiences/knowledge_(if_any)ID").value =
			"";

		alert("The response was sent! Join the discord now please");
	}
}

export default ContactModal;
