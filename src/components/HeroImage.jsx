const HeroImage = () => {
  return (
    <>
      <div className="hero-image">
        <img
          className="mobile-img"
          src="/images/image-hero-mobile.png"
          alt=""
        />
        <img
          className="tablet-img"
          src="/images/image-hero-tablet.png"
          alt=""
        />
        {/* <img
          className="desktop-img"
          src="/images/image-hero-desktop.png"
          alt=""
        /> */}
      </div>
    </>
  );
}

export default HeroImage