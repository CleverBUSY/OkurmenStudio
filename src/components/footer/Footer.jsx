import footerRightImg from "../../assets/media/footerImg.png";
import Telegram from "../../assets/media/Vector.png";
import Instagram from "../../assets/media/instagram.png";
import Whatsapp from "../../assets/media/watsap.png";
import LogoImg from "../../assets/media/Logo.png"
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import "../../assets/style/Footer.scss";

const Footer = () => {
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <h1 className="footer_logo">Контакты</h1>

            <div className="footer_flex">
              <div className="footer_left">

                <div className="flex">
                  <div className="flex-1">
                    <p>/Позвоните нам:</p>
                    <h3>
                      <a href="tel:+996500443423">+996 500 443-423</a>
                    </h3>
                    <h3>
                      <a href="tel:+996702038656">+996 702 038-656</a>
                    </h3>
                  </div>
                  <div className="flex-2">
                    <p>/Пишите нам:</p>
                    <h3>codemoon.studio@gmail.com</h3>
                  </div>
                </div>

              </div>
              <div className="footer_right">
                <img className="imagess-right" src={footerRightImg} alt="" />
              </div>
            </div>

            <button onClick={handleScrollToTop} className="footer_btn">↑</button>
          </div>
        </div>
      </footer>

      <div className="footer_wrapper_2">
        <div className="container">
          <div className="footer_border_top">
            <Link to="/">
              <img onClick={handleScrollToTop} src={LogoImg} alt="" />
            </Link>
            <p>© CODEMOON. All right reserved 2024</p>
            <div className="program">
              <a href="https://t.me/+996500443423"><img src={Telegram} alt="" /></a>
              <a href="https://www.instagram.com/codemoon.studio?igsh=MTkxYnByMnZhOTRjdA=="><img src={Instagram} alt="" /></a>
              <a href="https://wa.me/+996702038656"><img src={Whatsapp} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
