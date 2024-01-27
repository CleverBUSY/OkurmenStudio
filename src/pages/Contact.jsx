import "../assets/style/Contact.scss";
import Telegram from "../assets/media/Vector.png";
import Instagram from "../assets/media/instagram.png";
import Whatsapp from "../assets/media/watsap.png";
import Phone from "../assets/media/tl.png";
import contentImage from '../assets/media/image12.png'
import { useEffect, useState } from "react";

const Contact = () => {
  const onEntry = (entry) => {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      } else {
        change.target.classList.remove("element-show");
      }
    });
  };
  
  useEffect(() => {
    let options = {
      threshold: [0.3],
    };
  
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(".element-animation");
  
    for (let elm of elements) {
      observer.observe(elm);
    }
  
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="leftContent">
            <div className="element-animation">
              <h1>Свяжитесь с нами!</h1>
              </div>
              <div className="element-animation">
              <p>
                Готовы помочь воплотить ваши идеи в жизнь! <br /> Обеспечим ваш
                бизнес успешным онлайн <br />
                -присутствием. Заполните форму или свяжитесь <br /> с нами –
                обсудим решения для вашей компании.
              </p>
              </div>
              <div className="element-animation">
              <div className="icons">
                <a href="https://t.me/+996500443423" className="iconFlex">
                  <img src={Telegram} alt="" />
                  <p>@ОКУРМЭН-STUDIO</p>
                </a>
                <a href="https://www.instagram.com/codemoon.studio?igsh=MTkxYnByMnZhOTRjdA==" className="iconFlex">
                  <img src={Instagram} alt="" />
                  <p>ОКУРМЭН-STUDIO</p>
                </a>
                <a href="https://wa.me/+996702038656" className="iconFlex">
                  <img src={Whatsapp} alt="" />
                  <p>+996706954121</p>
                </a>
                <a href="tel:+996500443423" className="iconFlex">
                  <img src={Phone} alt="" />
                  <p>+996706954121</p>
                </a>
              </div>
              </div>
            </div>
            <div className="element-animation">
            <form action="https://formsubmit.co/sanjarkairatkeldiev@gmail.com" method="POST" className="rightContent">
              <input type="text" name="name" placeholder="Имя" />
              <input type="email" name="email" placeholder="E-mail" />
              <input type="text" name="phone" placeholder="Номер телефона" />

              <input type="name" name="telegram" placeholder="Телеграм" />
              <button type='submit'>Отправить</button>
            </form>
            </div>
            <div >
            </div>
          </div>
        </div>

      </section>
    </>
  );
};



export default Contact;

