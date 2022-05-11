import React from "react";


export function Contact(){
    return(
        <div className="contact">
            <p>Hey!Im the contact page!</p>
            
      
   <div className="contact__details"> 
   <h1>Contact</h1> 
   <p> Valentina V<br></br>
    Street number 10<br></br>
    10179 London<br></br>
    United Kingdom<br></br>
    <br></br>
    Tel <a href="tel:+491234567">+49 1234567</a><br></br>
    Skype <a href="skype:hello.valentina"> hello.valentina</a><br></br>
    <a href="mailto:office@valentina.com">valentina@valentina.com</a></p>
</div>
<form className="contact__form" action="submit" method="post" id="contact-form">
    <label className="standard-label" >Email: </label>
    <input type="email" id="contact-email" required></input>
    <label className="standard-label" >Telephone: (optional)</label>
    <input type="number" id="telephone"></input>
    <label className="standard-label">Message: </label>
    <textarea required id="message" ></textarea>
   <button type="submit" value="Send message">Send message</button>
</form>

        </div>
    )
}