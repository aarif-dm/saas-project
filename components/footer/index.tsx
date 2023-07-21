import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo />ShopX</h6>
            
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Contact</li>
              <li><a href="#">Email: support@aeonx.digital</a></li>
              <li><a href="#">Hotline: +91 99099 55655</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN & DEVELOPED BY AEONX DIGITAL SOLUTIONS - © {new Date().getFullYear()}.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer