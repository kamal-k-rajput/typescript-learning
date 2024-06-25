import React from "react";

export const DoctorCard = ({ props }: any) => {
  return (
    <div role="listitem" className="card doctors w-dyn-item">
      <div className="doctor-card-content">
        <img
          alt={props.name}
          src={props.src}
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 79vw, (max-width: 1439px) 30vw, 344px"
          //   srcSet="https://assets-global.website-files.com/5e31fbcb275ce1b6bb167cb4/5e630ab86f973431f9880935_derek-evans-doctor-p-500.jpeg 500w, https://assets-global.website-files.com/5e31fbcb275ce1b6bb167cb4/5e630ab86f973431f9880935_derek-evans-doctor.jpg 664w"
          className="doctor-image"
        />
        <div className="card-content">
          <h2 className="doctor-name">{props.name}</h2>
          <div className="doctor-speciality">{props.speciality}</div>
          <p className="doctor-short-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris
            nulla tincidunt appet fermentum amet sit.
          </p>
          <div className="mg-top-18">
            <div className="justify-content-space-between">
              <div className="doctor-contact-information">
                <a
                  href={props.contact}
                  className="icon-rounded phone w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e30f15c05f796d5e61de195_phone-icon-top-bar.svg"
                    width="24"
                    alt="Doctor Phone"
                    className="doctor-icon"
                  />
                </a>
                <a
                  href={props.email}
                  className="icon-rounded email w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e30f15c05f796f60d1de196_email-icon-top-bar.svg"
                    width="24"
                    alt="Doctor Email | Medica Webflow Template"
                    className="doctor-icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mg-top-32px">
            <a
              href="/doctors/dr-yogesh-rajput"
              className="button-secondary full-width w-button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
