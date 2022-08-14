import React, { Component, useRef } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

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
          <span className="LoadButton-front text">{this.props.btnText}</span>
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
          <div className="subBtn">
            <button
              className="LoadButton-pushable GameRequest"
              onClick={this.sendEmail}
              id="CntBtn"
            >
              <span className="LoadButton-shadow"></span>
              <span className="LoadButton-edge"></span>
              <span className="LoadButton-front text">Submit</span>
            </button>
          </div>
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

  sendEmail = () => {
    let boxGrade = document.getElementById("Current_GradeID").value;
    let boxName = document.getElementById("NameID").value;
    let boxEmail = document.getElementById("Contact_EmailID").value;

    if (
      boxGrade == "" ||
      boxGrade == undefined ||
      boxName == "" ||
      boxName == undefined ||
      boxEmail == "" ||
      boxEmail == undefined
    ) {
      this.setState({
        modalIsOpen: false,
      });
      return;
    }

    emailjs
      .send(
        "service_o3m7mlh",
        "template_1fnr06m",
        {
          grade: boxGrade,
          name: boxName,
          email: boxEmail,
        },
        "uq4kVKFRDwE7pFfsW"
      )
      .then(
        function (response) {
          console.log("Email sent!");
        },
        function (error) {
          document.getElementById("ContactMsgInput").style.display = "none";
          document.getElementById("ContactNameInput").style.display = "none";
          document.getElementById("CntBtn").style.display = "none";
          console.log(error);
          alert(
            "Something went wrong, please contact joshuaew06@gmail.com so he can know"
          );
        }
      );

    document.getElementById("ContactMsgInput").value = "";
    document.getElementById("ContactNameInput").value = "";
  };
}

export default ContactModal;
