import "../../css/HomePage.css";
import line1 from "../../assets/Line 3.png";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://mybrand-production.up.railway.app/queries", {
        fullName: senderName,
        email: senderEmail,
        message: message,
      })
      .then((response) => {
        console.log(response.data);
        setSenderName("");
        setSenderEmail("");
        setMessage("");
      });
  };

  return (
    <>
      <div className="section-title">
        <span className="numbering">05. </span>
        <span className="title">Contact Me</span>
        <div>
          <img src={line1} alt="" />
        </div>
      </div>
      <p>Do you want to connect or have any question?</p>
      <div className="section-content">
        <form action="" className="contact-form" id="contact-form" onSubmit={handleMessageSubmit}>
          <div id="errors-success" style={{ width: "90%", padding: 0 }}></div>
          <div className="field">
            <label for="name">Full Name:</label>
            <input
              id="full-name"
              placeholder="Enter your name"
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          </div>
          <div className="field">
            <label for="email">Email:</label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label for="message">Message:</label>

            <textarea
              id="message"
              placeholder="Write a message ..."
              type="richText"
              style={{ color: "#fff" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-btn"
            style={{ cursor: "pointer" }} 
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
