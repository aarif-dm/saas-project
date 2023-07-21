const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/subscribe.jpg)'}} className="subscribe__content">
          <h4>Visit our website and go through blogs for new updates.</h4>

          {/* <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">Subscribe</button>
          </form> */}
          <a href="https://www.aeonx.digital/" target="_blank" rel="noopener noreferrer"><button className="btn btn--rounded">Website</button></a>
        </div>
      </div>
    </section>
  )
};


export default Subscribe