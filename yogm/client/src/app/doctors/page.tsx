import React from "react";
import "./style.css";
import { DoctorCard } from "@/components/cards/Doctor.card";

const page = () => {
  const buttonProps = {
    title: "Click",
  };
  let doctors = [
    {
      name: "Dr. Test one",
      speciality: "Gastroenterologist",
      src: "https://yogm.s3.ap-south-1.amazonaws.com/symbol.jpeg",
      contact: 9999999999,
      email: "doctor@mail.com",
    },
    {
      name: "Dr. Test two",
      speciality: "Gastroenterologist",
      src: "https://yogm.s3.ap-south-1.amazonaws.com/symbol.jpeg",
      contact: 9999999999,
      email: "doctor@mail.com",
    },
    {
      name: "Dr. test three",
      speciality: "Gastroenterologist",
      src: "https://yogm.s3.ap-south-1.amazonaws.com/symbol.jpeg",
      contact: 9999999999,
      email: "doctor@mail.com",
    },
  ];
  return (
    <div>
      <div className="section page-hero">
        <div className="container-default">
          <div className="hero-wrapper">
            <div className="vertical-center">
              <h1 className="page-title">Our Doctors</h1>
              <p className="large-paragraph text-center white-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="mg-top-18">
                <a
                  href="/contact"
                  className="button-primary large white w-button"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section page-content">
        <div className="container-default">
          <div className="w-dyn-list">
            <div role="list" className="grid-3-columns w-dyn-items">
              {doctors.map((doctor) => {
                return <DoctorCard props={doctor} key={doctor.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
