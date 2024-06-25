import React from "react";

export const ContactSection = () => {
  return (
    <div className="section section-contact-bar">
      <div className="contact-bar-wrapper">
        <div className="w-layout-grid contact-bar-grid">
          <div className="contact-bar-column">
            <img src="" alt="" className="contact-bar-icon" />
            <div className="contact-bar-text">
              <div className="contact-bar-title"> Contact us</div>
              <a href="" className="contact-bar-link">
                +91988754723
              </a>
              <a href="" className="contact-bar-link">
                test@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-bar-column">
            <img src="" alt="" className="contact-bar-icon" />
            <div className="contact-bar-text">
              <div className="contact-bar-title">Open Hours</div>
              <div className="contact-bar-item">Everyday</div>
              <div className="contact-bar-item">All Time</div>
              <div className="contact-bar-item"></div>
              {/* <div className="contact-bar-item"></div> */}
            </div>
          </div>
          <div className="contact-bar-column">
            <img src="" alt="" className="contact-bar-icon" />
            <div className="contact-bar-text">
              <div className="contact-bar-title">Services</div>
              <a href="" className="contact-bar-link">
                Cardiology
              </a>
              <a href="" className="contact-bar-link">
                Cardiology
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
