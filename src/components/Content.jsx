import data from "../data/data";
// import Card from "./Card";

const Content = () => {
  return (
    <>
      <section className="content-section">
        <div className="content-container">
          <h3 className="content-title">Check out our most popular courses!</h3>
            {data.map(({ id, title, details, imageURL }) => {
              return (
                <div className="card-body" key={id}>
                  <img className="card-image" src={imageURL} />
                  <h3 className="card-title">{title}</h3>
                  <p className="card-details">{details}</p>
                  <button className="card-btn">Get Started</button>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Content;
