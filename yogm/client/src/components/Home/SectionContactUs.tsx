import React from "react";
import { ADDRESS, MOBILE_NUMBER } from "../constants/Constants";

export const SectionContactUs = () => {
  return (
    <>
      <div className="section section-contact-us">
        <div className="w-layout-grid grid-contact-us">
          <div className="form-wrapper">
            <h2>How Can We Help?</h2>
            <div className="w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="form"
                aria-label="Email Form"
              >
                <label htmlFor="name" className="label">
                  What is your Name?
                </label>
                <input
                  className="input w-input"
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder="Your Name"
                  type="text"
                  id="name"
                  required
                />
                <label htmlFor="email" className="label">
                  What is your Email?
                </label>
                <input
                  className="input w-input"
                  maxLength={256}
                  name="email"
                  data-name="Email"
                  placeholder="email@youremail.com"
                  type="email"
                  id="email"
                  required
                />
                <label htmlFor="Phone-Number" className="label">
                  What is your Phone Number?
                </label>
                <input
                  className="input w-input"
                  maxLength={256}
                  name="Phone-Number"
                  data-name="Phone Number"
                  placeholder="(123) 456 -7890"
                  type="tel"
                  id="Phone-Number"
                  required
                />
                <label htmlFor="Message" className="label">
                  Do you have any message for us?
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  maxLength={5000}
                  placeholder="Let us know how we can help..."
                  data-name="field"
                  className="input text-area w-input"
                ></textarea>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="button-primary default w-button"
                  value="Send Your Message"
                />
              </form>
              <div
                className="success-message w-form-done"
                tabIndex={-1}
                role="region"
                aria-label="Email Form success"
              >
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className="error-message w-form-fail"
                tabIndex={-1}
                role="region"
                aria-label="Email Form failure"
              >
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="contact-information">
            <h3 className="contact-info-header">Need Some Help?</h3>
            <div className="contact-buttons-wrapper">
              <a
                href="tel:(404)547-8704"
                className="button-icon w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e323cdde0a920f306739527_phone-icon.svg"
                  alt="Phone Icon - Medica Webflow Template"
                  className="icon-button primary"
                />
                <div className="button-secondary-text">Call us Today</div>
              </a>
              <div className="mg-top-28px">
                <a
                  href="mailto:info@medica.com"
                  className="button-secondary-icon large w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e323ee7f210593431944150_email-icon.svg"
                    alt="Email Icon - Medica Webflow Template"
                    className="icon-button primary"
                  />
                  <div className="button-secondary-text">Send Us a Email</div>
                </a>
              </div>
            </div>
            <div className="contact-office-locations">
              <h3 className="contact-info-header">Visit Us</h3>
              <div className="w-layout-grid contact-offices-grid">
                <div className="contact-offices-column">
                  <h4 className="contact-office-location-title">Etwah</h4>
                  <ul role="list" className="contact-location-list">
                    <li className="location-item">
                      <a
                        href={MOBILE_NUMBER.PRIMARY_NUMBER.toString()}
                        className="location-phone"
                      >
                        {MOBILE_NUMBER.PRIMARY_NUMBER}
                      </a>
                    </li>
                    <li className="location-item">
                      <div>
                        <span>{ADDRESS.LINE_ONE}</span>
                        <span>{ADDRESS.LINE_TWO}</span>
                        <br />
                        <span>{ADDRESS.LINE_THREE}</span>
                        <span>{ADDRESS.DISTRICT}</span>
                        <span>{ADDRESS.STATE}</span>
                        <span>{ADDRESS.PINCODE}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="contact-offices-column">
                  <h4 className="contact-office-location-title">Bidhuna</h4>
                  <ul role="list" className="contact-location-list">
                    <li className="location-item">
                      <a
                        href={MOBILE_NUMBER.BIDHUNA.toString()}
                        className="location-phone"
                      >
                        {MOBILE_NUMBER.BIDHUNA}
                      </a>
                    </li>
                    <li className="location-item">
                      <div>
                        Acchalda Road
                        <br />
                        Bidhuna Uttar Pradesh
                        <br />
                        206243
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
