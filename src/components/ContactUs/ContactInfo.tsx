"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-phone"></i>
            </div>

            <div className="content">
              <h4>Phone</h4>
              <p>+91-94609-71652</p>
              <p>(+000) 245522455</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-email"></i>
            </div>

            <div className="content">
              <h4>E-mail</h4>
              <p>info@gbpcp.com</p>
              <p>support@gbpcp.com</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-world"></i>
            </div>

            <div className="content">
              <h4>Location</h4>
              <p>
                B.J. Road, Bandstand Promenade, Bandra West, Mumbai, Maharashtra
                400050
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
