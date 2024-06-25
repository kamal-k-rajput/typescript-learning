import React from "react";

export const DoctorIndividual = () => {
  return (
    <div>
      <div className="section section-doctor-template">
        <div className="container-default text-center">
          <div className="w-layout-grid doctor-container">
            <img
              id="w-node-_23809342-bab2-f15e-eeb5-c2f9d289a2a4-80766632"
              src="https://assets-global.website-files.com/5e31fbcb275ce1b6bb167cb4/5e630ab86f973431f9880935_derek-evans-doctor.jpg"
              alt="Derek Evans"
              sizes="(max-width: 479px) 90vw, (max-width: 991px) 94vw, 800px"
              srcSet="https://assets-global.website-files.com/5e31fbcb275ce1b6bb167cb4/5e630ab86f973431f9880935_derek-evans-doctor-p-500.jpeg 500w, https://assets-global.website-files.com/5e31fbcb275ce1b6bb167cb4/5e630ab86f973431f9880935_derek-evans-doctor.jpg 664w"
              className="image-border"
            />
            <div
              id="w-node-_23809342-bab2-f15e-eeb5-c2f9d289a2a5-80766632"
              className="content left"
            >
              <div className="subheading-wrapper">
                <h3 className="subheading">Gastroenterologist</h3>
                <div className="sufix-line"></div>
              </div>
              <h1 className="doctor-template-name">Derek Evans</h1>
              <div className="justify-content-space-between">
                <div className="doctor-contact-information">
                  <a
                    href="tel:+1176996711"
                    className="icon-rounded phone w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e30f15c05f796d5e61de195_phone-icon-top-bar.svg"
                      width="24"
                      alt="Doctor Phone | Medica Webflow Template"
                      className="doctor-icon"
                    />
                  </a>
                  <a href="#" className="icon-rounded email w-inline-block">
                    <img
                      src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e30f15c05f796f60d1de196_email-icon-top-bar.svg"
                      width="24"
                      alt="Doctor Email | Medica Webflow Template"
                      className="doctor-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="mg-top-18">
                <div className="rich-text doctor-biography w-richtext">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nec nibh ex. Fusce congue augue posuere justo
                    condimentum, in tempus neque tincidunt. Ut eleifend dolor
                    sed leo feugiat pharetra. Nunc erat mauris, faucibus ac
                    magna vel, tincidunt elementum est. Nulla et condimentum
                    odio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
