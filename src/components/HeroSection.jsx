import React from "react";

const HeroSection = () => {
  return (
    <section className="section-container">
      <div className="hero-details">
        <h1 className="section-title">Maximize skill, minimize budget</h1>
        <p className="section-details">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="section-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/public/images/image-hero-mobile.png" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
