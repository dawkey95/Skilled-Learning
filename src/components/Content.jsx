import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <>
      <section className="content-section">
        <div className="content-container">
          <div className="content-header">
            <h3 className="content-title">
              Check out our most popular courses!
            </h3>
          </div>
          <Card />
        </div>
      </section>
    </>
  );
};

export default Content;
