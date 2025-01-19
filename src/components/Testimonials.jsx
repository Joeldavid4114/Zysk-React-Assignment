import React from "react";
// import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-logo">⚡ Sisyphus</div>
      <p className="testimonial-text">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </p>
      <div className="testimonial-user">
        <img
          src="/assets/women.jpeg"
          alt="Candice Wu"
          className="testimonial-avatar"
        />
        <div className="testimonial-info">
          <p className="user-name">Candice Wu</p>
          <p className="user-title">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;