import React from "react";


export function Contact(){
    return(
        <div className="contact">

   <h1>Send me a message!</h1> 
   <h3>Direct contact details: </h3>
    <a href="mailto:office@valentina.com">valentinavaccari@hotmail.com</a>

<form className="contact__form" action="submit" method="post" id="contact-form">
    <label className="standard-label" >Your Name: </label>
    <input type="email" id="contact-email" required></input>
    <label className="standard-label" >Your email address: </label>
    <input type="email" id="contact-email" required></input>
    <label className="standard-label" >Subject</label>
    <input type="number" id="telephone"></input>
    <label className="standard-label">Message: </label>
    <textarea required id="message" ></textarea>
   <button type="submit" value="Send message">Send</button>
</form>

        </div>
    )
}