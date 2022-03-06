import React from 'react'

export default function Contact() {
  return (
    <div id='contact-cont'>
        <h2>Get <span>in touch</span></h2>
        <p>Do you have any question or proposal for us?</p>
        <p>Use this form to contact us and someone will be in touch with you soon!</p>
        <div className="contactForm">
            <form action="" method="post">
                <div id="formName">
                    <input type="text" name="Name" placeholder='Your Name' id="" />
                </div>
                <div id="formMail">
                    <input type="email" name="Email" placeholder='Your Email' id="" />
                </div>
                <div id="formMsg">
                    <textarea name="Message" id="" placeholder='Your Message Here!' rows="10"></textarea>
                </div>
                <input id='formSubmit' type="submit" value="Submit" />
            </form>
        </div>
    </div>
  )
}
