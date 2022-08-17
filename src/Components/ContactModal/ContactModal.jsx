import React, { Component, useRef } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

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
          <h2>{this.props.title}</h2>
          <div className="desc">{this.props.desc}</div>
          {this.props.inputs.map((inputName, index) => (
            <div className="msgInput" key={inputName + index}>
              <input
                placeholder={inputName.split("_").join(" ") + "..."}
                id={inputName + "ID"}
              ></input>
            </div>
          ))}
          <p style={{ fontSize: "12px" }}>
            <b>Please do not spam the button</b>
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
    let boxGrade = document.getElementById("Current_GradeID").value;
    let boxName = document.getElementById("NameID").value;
    let boxEmail = document.getElementById("Preferred_Contact_EmailID").value;
    let idEmail = document.getElementById("Student_IDID").value;

    if (
      boxGrade == "" ||
      boxGrade == undefined ||
      boxName == "" ||
      boxName == undefined ||
      boxEmail == "" ||
      boxEmail == undefined ||
      idEmail == "" ||
      idEmail == undefined
    ) {
      this.setState({
        modalIsOpen: false,
      });
      alert("Please enter all answers fully!");
      return;
    }

    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discord.com/api/webhooks/1008877855112953957/PvpBeirRLMbmFpIfq8BjTkZaoouzgsBLSw9IymBnmHTVhom_kaZrdOw1rMF5B7NaqfhI", //"https://discord.com/api/webhooks/1008878393510596688/5l-f5gkw2pG1B9Aqoql2on-Gv8S2fXuxkrDsWHAAUOmx2AcaLjrlgeDQuYvntSi9TRgu", //
      true
    );
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
              name: "Contact Email",
              value: boxEmail,
              inline: true,
            },
            {
              name: "Student ID",
              value: idEmail,
              inline: true,
            },
          ],
          footer: {
            text: "Hopefully they stay!",
            icon_url: "http://lymanrobotics.netlify.app/images/NavbarLogo.png",
          },
        },
      ],
    };
    try {
      request.send(JSON.stringify(params));
    } catch (err) {
      alert(
        "Something went wrong! Please try again or contact joshuaew06@gmail.com so they know"
      );
    }

    emailjs
      .send(
        "service_o3m7mlh",
        "template_1fnr06m",
        {
          grade: boxGrade,
          name: boxName,
          email: boxEmail,
          id: idEmail,
        },
        "uq4kVKFRDwE7pFfsW"
      )
      .then(
        function (response) {
          alert("Your response has been sent!");
        },
        function (error) {
          console.log(error);
          alert(
            "Something went wrong, please contact joshuaew06@gmail.com so he can know"
          );
        }
      );

    document.getElementById("Current_GradeID").value = "";
    document.getElementById("NameID").value = "";
    document.getElementById("Preferred_Contact_EmailID").value = "";
    document.getElementById("Student_IDID").value = "";
  }
}

export default ContactModal;
