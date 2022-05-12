import React from "react";
import { GrMailOption } from "react-icons/gr";

export function Contact() {
  return (
    <div className="contact">
      <h1>Send me a message!</h1>

      <div className="direct-contact">
        <h3>Direct contact:</h3>
        <button>
          <a href="mailto:valentinavaccari@hotmail.com">
            <GrMailOption />
          </a>
        </button>
        <a href="mailto:office@valentina.com">valentinavaccari@hotmail.com</a>
      </div>

      <form
        className="contact-form"
        action="submit"
        method="post"
        id="contact-form"
      >
        <label className="standard-label">Your Name: </label>
        <input type="email" id="contact-email" required></input>
        <label className="standard-label">Your email address: </label>
        <input type="email" id="contact-email" required></input>
        <label className="standard-label">Subject</label>
        <input type="number" id="telephone"></input>
        <label className="standard-label">Message: </label>
        <textarea required id="message"></textarea>
        <button className="send-btn" type="submit" value="Send message">
          Send
        </button>
      </form>
    </div>
  );
}
