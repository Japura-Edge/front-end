import "../assets/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content row">
        <div className="footer-logo column">
          <img src="./images/JapuraChoice.png" alt="Japura Choice logo" />
        </div>
        <div className="contact-us column">
          <h2>Contact Us</h2>
          <div className="contact-us-details column">
            <h3>
              <i className="fa fa-phone" />
              0766885466
            </h3>
            <h3>
              <i className="fa fa-envelope" />
              japurachoice@gmail.com
            </h3>
          </div>
        </div>
        <div className="footer-links">
          <h2>Follow Us</h2>
          <div className="footer-links-icons row">
            <a href="https://www.facebook.com/japuraedge">
              <i className="fa fa-facebook-square" />
            </a>
            <a href="https://www.instagram.com/japuraedge/">
              <i className="fa fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/company/japura-edge">
              <i className="fa fa-linkedin-square" />
            </a>
            <a href="https://twitter.com/JapuraEdge">
              <i className="fa fa-twitter-square" />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <h3>© 2023 J'pura Choice. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
