import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>
      Your message has been successfully sent! I will reply to you as soon as
      possible! Thank you!
    </p>
  );
};
export function Contact(props) {
  //success result message
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_va1p6bg",
        "template_8oo0h9c",
        form.current,
        "ksiyr5KBUrVxvrzdS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    //show success message
    showResult(true);
  };
  //hide result message after 5 seconds
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className="contact">
      <h1>Send me a message!</h1>

      <form
        ref={form}
        className="contact-form"
        action="submit"
        method="post"
        onSubmit={sendEmail}
        id="contact-form"
      >
        <label className="standard-label">Your Name: </label>
        <input type="text" id="name" name="user_name" required></input>
        <label className="standard-label">Your email address: </label>
        <input
          type="email"
          id="contact-email"
          name="user_email"
          required
        ></input>
        <label className="standard-label">Subject</label>
        <input type="text" id="subject" name="subject"></input>
        <label className="standard-label">Message: </label>
        <textarea
          required
          rows="10"
          cols="50"
          id="message"
          name="message"
        ></textarea>
        <button className="send-btn" type="submit" value="Send">
          Send message
        </button>
        <div className="row">{result ? <Result /> : null}</div>
      </form>
    </div>
  );
}
