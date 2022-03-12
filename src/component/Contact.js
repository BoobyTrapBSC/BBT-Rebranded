import React from "react";

export default function Contact() {

  return (
    <div id="contact-cont" className="position-relative">
      <h2>
        Get <span>in touch</span>
      </h2>
      <p>Do you have any question or proposal for us?</p>
      <p>
        Use this form to contact us and someone will be in touch with you soon!
      </p>
      <div className="contactForm">
        {/* SUCCESS ALERT
        <div
          className="alert alert-success d-none align-items-center my-2"
          role="alert"
          styles={
            handleSuccess === 0 ? { display: "none" } : { display: "flex" }
          }
        >
          <svg
            className="bi flex-shrink-0 me-2 "
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
            <AiFillCheckCircle fontSize={25} />
          </svg>
          <div>Your response has been submitted successfully!</div>
        </div>*/}
        {/* CONTACT FORM */}
        <form
          name="contact-form"
          method="post"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div id="formName">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              id=""
              required
            />
          </div>
          <div id="formMail">
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              id=""
            />
          </div>
          <div id="formMsg">
            <textarea
              name="Message"
              id=""
              placeholder="Your Message Here!"
              required
              rows="10"
            ></textarea>
          </div>
          <input
            id="formSubmit"
            className="btnYellow btn"
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
}
