import React from "react";
import frontEndCertificate from "../img/Front-End-Certificate.png";
import responsiveWebCertificate from "../img/Responsive-Web-Certificate.png";

const Certificates = () => {
  return (
    <section id="certificates" className="section certificates">
      <h2>Certificates</h2>
      <div className="certificate-grid">
        <div className="certificate">
          <h3>Front End Development Libraries</h3>
          <img
            src={frontEndCertificate}
            alt="Front End Development Libraries Certificate"
          />
        </div>
        <div className="certificate">
          <h3>Responsive Web Design</h3>
          <img
            src={responsiveWebCertificate}
            alt="Responsive Web Design Certificate"
          />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
