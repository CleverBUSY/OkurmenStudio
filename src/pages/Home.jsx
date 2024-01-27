import bgcImg from "../assets/media/bgc.svg";
import "../assets/style/Home.scss";
import contentCardImg from "../assets/media/contentCard.svg";
import { Link } from "react-router-dom";
import cardProImg from "../assets/media/cardPro.svg";
import FaTelegram from "../assets/media/Vector.png";
import Instagram from "../assets/media/instagram.png";
import Whatsapp from "../assets/media/watsap.png";
import Phone from "../assets/media/tl.png";
import { useEffect, useState } from "react";
import contentImage from "../assets/media/image12.png";
import { useSpring, animated, config } from "react-spring";
import { Element, scroller } from "react-scroll";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import axios from "axios";

const MemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered ? "scale(1.07)" : "scale(1)",
    opacity: isHovered ? 0.9 : 1,
  });

  return (
    <animated.div
      style={springProps}
      className="flexComands"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/Content/${member.id}`}>
        <div className="user__content">
          <img className="avatar__user" src={member.avatar} alt={member.name} />
          <h2 className="user__name" style={{ color: "#fff" }}>{member.name}</h2>
          <p className="text__user">{member.title}</p>
          <div
            className="flex__skill"
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr fr",
            }}
          >
            {member.images
              .slice(`${member.sliceStart}`, `${member.sliceEnd}`)
              .map((image, index) => (
                <div className="img__content " key={index}>
                  {Object.entries(image).map(([key, value]) => (
                    <img
                      className="img__user__skill"
                      style={{ width: "1.4em", borderRadius: "7px" }}
                      key={key}
                      src={value}
                      alt=""
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </Link>
    </animated.div>
  );
};


const Home = () => {
  const [teamData, setTeamData] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);


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

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  }

  const fadeIn = useSpring({
    opacity: showAnimation ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
    onRest: () => setShowAnimation(true),
  });


  useEffect(() => {
    axios(
      "https://6576f7c7197926adf62ce478.mockapi.io/api/v1/okurmen"
    )
      .then(({ data }) => {
        setTeamData(data);
        setShowAnimation(true);
      })

      // .catch((error) => console.error("Error fetching team data:", error));
  }, []);


  return (
    <>
      <animated.section className="section__home" style={fadeIn}>
        <section className="section__home">
          <div className="container">
            <div className="section__home-wrapper">
              <div className="element-animation">
                <h1 className="logo__text_home">Добро пожаловать в ОКУРМЭН-STUDIO</h1>
              </div>
              <div className="element-animation">
                <p className="logo__par_home">
                  Здесь, в уникальном цифровом пространстве ОКУРМЕН-studio, мы не только <br /> вдохновляем, но и превращаем в реальность ваши самые амбициозные цели. Для нас <br /> код - это не просто строки, а мощный инструмент воплощения ваших идей. <br /> Присоединяйтесь к нам, чтобы вместе создать нечто уникальное и достичь ваших <br /> высших технологических целей!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Мощь Проект */}
        <section className="section__home_2">
          <div className="container">
            <div className="section__home_wrapper">
              <div className="content__text">
                <div className="element-animation">
                  <h1 className="scHome_2_text">
                  Почувствуйте мощь наших инновационных проектов! 
                  </h1>
                </div>
                <div className="element-animation">
                  <p className="content_par">
                  ОКУРМЭН-STUDIO - мощь инноваций в цифровом мире! Мы специализируемся на создании уникальных веб-сайтов и приложений, где творчество и передовые технологии гармонично сочетаются. Наша команда стремится не просто разрабатывать проекты, а создавать цифровые шедевры, вдохновляющие и функциональные. Присоединяйтесь к ОКУРМЭН-STUDIO, где каждое решение - это уникальное искусство в цифровом пространстве.
                  </p>
                </div>
              </div>
              <div className="element-animation">
                <div className="content__card animated-card">
                  <h1 className="card_logo">ОкурМэн</h1>
                  <p className="card_text">
                    ОкурМэн - это веб-сайт где можете узнать информацию про курсы
                    в сфере проммирование
                  </p>

                  <div className="card_img_flex">
                    <img
                      style={{ width: "24px" }}
                      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIn8PmHMkn0YN7GE59_vNH0P7ZNETWp_d_JoDWnxjKAnHHPv4z"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D0jwOFY9FYS5QKirMcPFAJxdQrPMyCf3YNVypUzVm5GI8SOI"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHLTpGcTkgmXjQLARRkYrweUbh27jxuGvm5GluPCbJ7Cb3-dS"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSQLaJn09xYtPiac1Hhz2D5ritA6IZkNUuZKicSs5SZjHxWfm"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7HdlK1H6OcWBx920WajBr1LnKiarnoMeIuIVU54a_S_qOHJGM"
                      alt=""
                    />
                  </div>
                  <a href="https://www.instagram.com/okurmen_it/?next=%2Fp%2FCMXMViXrb6J%2F&hl=bg">
                    <img className="cardimg" src={contentCardImg} alt="" />
                    <button className="card__btn">
                      Подробное <span>→</span>
                    </button>
                  </a>
                </div>
                <div className="content__card2 animated-card">
                  <h1 className="card_logo">BAINUR</h1>
                  <p className="card_text">
                    ОкурМэн - это веб-сайт где можете узнать информацию про курсы
                    в сфере проммирование
                  </p>

                  <div className="card_img_flex">
                    <img
                      style={{ width: "24px" }}
                      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIn8PmHMkn0YN7GE59_vNH0P7ZNETWp_d_JoDWnxjKAnHHPv4z"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D0jwOFY9FYS5QKirMcPFAJxdQrPMyCf3YNVypUzVm5GI8SOI"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHLTpGcTkgmXjQLARRkYrweUbh27jxuGvm5GluPCbJ7Cb3-dS"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSQLaJn09xYtPiac1Hhz2D5ritA6IZkNUuZKicSs5SZjHxWfm"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7HdlK1H6OcWBx920WajBr1LnKiarnoMeIuIVU54a_S_qOHJGM"
                      alt=""
                    />
                  </div>
                  <a href="https://www.instagram.com/okurmen_it/?next=%2Fp%2FCMXMViXrb6J%2F&hl=bg">
                    <img className="cardimg" src={contentCardImg} alt="" />
                    <button className="card__btn">
                      Подробное <span>→</span>
                    </button>
                  </a>
                </div>
                <div className="content__card3 animated-card">
                  <h1 className="card_logo">ALPINS</h1>
                  <p className="card_text">
                    ОкурМэн - это веб-сайт где можете узнать информацию про курсы
                    в сфере проммирование
                  </p>

                  <div className="card_img_flex">
                    <img
                      style={{ width: "24px" }}
                      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIn8PmHMkn0YN7GE59_vNH0P7ZNETWp_d_JoDWnxjKAnHHPv4z"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D0jwOFY9FYS5QKirMcPFAJxdQrPMyCf3YNVypUzVm5GI8SOI"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHLTpGcTkgmXjQLARRkYrweUbh27jxuGvm5GluPCbJ7Cb3-dS"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSQLaJn09xYtPiac1Hhz2D5ritA6IZkNUuZKicSs5SZjHxWfm"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7HdlK1H6OcWBx920WajBr1LnKiarnoMeIuIVU54a_S_qOHJGM"
                      alt=""
                    />
                  </div>
                  <a href="https://www.instagram.com/okurmen_it/?next=%2Fp%2FCMXMViXrb6J%2F&hl=bg">
                    <img className="cardimg" src={contentCardImg} alt="" />
                    <button className="card__btn">
                      Подробное <span>→</span>
                    </button>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Проекты */}
        <section className="section__home_3">
          <div className="container">
            <div className="element-animation">
              <div className="sc__home__wrapper">
                <h1 className="sc_2_logo">Проекты</h1>

                <div className="sc_3_card_flex">

                  <div className="card_1 card_none" >
                    <h1 className="card_logo">ОкурМэн</h1>
                    <p className="card_text">
                      ОкурМэн - это веб-сайт где можете узнать информацию про
                      курсы в сфере проммирование
                    </p>

                    <div className="card_img_flex">
                      <img
                        style={{ width: "24px" }}
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIn8PmHMkn0YN7GE59_vNH0P7ZNETWp_d_JoDWnxjKAnHHPv4z"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D0jwOFY9FYS5QKirMcPFAJxdQrPMyCf3YNVypUzVm5GI8SOI"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHLTpGcTkgmXjQLARRkYrweUbh27jxuGvm5GluPCbJ7Cb3-dS"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSQLaJn09xYtPiac1Hhz2D5ritA6IZkNUuZKicSs5SZjHxWfm"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7HdlK1H6OcWBx920WajBr1LnKiarnoMeIuIVU54a_S_qOHJGM"
                        alt=""
                      />
                    </div>

                    <Link onClick={handleScrollToTop} to="/projects">
                      <img className="cardimg" src={contentCardImg} alt="" />
                      <button className="card__btn">
                        Подробное <span>→</span>
                      </button>
                    </Link>
                  </div>

                  <div className="card_1  card_none">
                    <h1 className="card_logo">BAINUR</h1>
                    <p className="card_text">
                      ОкурМэн - это веб-сайт где можете узнать информацию про
                      курсы в сфере проммирование
                    </p>
                    <div className="card_img_flex">
                      <img
                        style={{ width: "24px" }}
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIn8PmHMkn0YN7GE59_vNH0P7ZNETWp_d_JoDWnxjKAnHHPv4z"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D0jwOFY9FYS5QKirMcPFAJxdQrPMyCf3YNVypUzVm5GI8SOI"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHLTpGcTkgmXjQLARRkYrweUbh27jxuGvm5GluPCbJ7Cb3-dS"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSQLaJn09xYtPiac1Hhz2D5ritA6IZkNUuZKicSs5SZjHxWfm"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7HdlK1H6OcWBx920WajBr1LnKiarnoMeIuIVU54a_S_qOHJGM"
                        alt=""
                      />
                    </div>
                    <Link onClick={handleScrollToTop} to="/projects">
                      <img className="cardimg" src={cardProImg} alt="" />
                      <button className="card__btn">
                        Подробное <span>→</span>
                      </button>
                    </Link>
                  </div>

                  <div className="card_1">
                    <h1 className="card_logo">ALPINS</h1>
                    <p className="card_text">
                      ОкурМэн - это веб-сайт где можете узнать информацию про
                      курсы в сфере проммирование
                    </p>
                    <div className="card_img_flex card_images_alpins">
                      <img
                        style={{ width: "24px" }}
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIn8PmHMkn0YN7GE59_vNH0P7ZNETWp_d_JoDWnxjKAnHHPv4z"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D0jwOFY9FYS5QKirMcPFAJxdQrPMyCf3YNVypUzVm5GI8SOI"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHLTpGcTkgmXjQLARRkYrweUbh27jxuGvm5GluPCbJ7Cb3-dS"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSQLaJn09xYtPiac1Hhz2D5ritA6IZkNUuZKicSs5SZjHxWfm"
                        alt=""
                      />
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7HdlK1H6OcWBx920WajBr1LnKiarnoMeIuIVU54a_S_qOHJGM"
                        alt=""
                      />
                    </div>
                    <Link onClick={handleScrollToTop} to="/projects">
                      <img className="cardimg" src={contentCardImg} alt="" />
                      <button className="card__btn">
                        Подробное <span>→</span>
                      </button>
                    </Link>
                  </div>

                </div>
                <Link to="/Projects">
                  <button onClick={handleScrollToTop} className="vse_Pro">Все проекты</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </animated.section>

      {/* Контакты */}
      <section className="section__home_4">
        <div className="container">
          <div className="sc_4_wrapper">
            <div className="contact-content">

              <div className="leftContent">
                <div className="element-animation">
                  <h1>Свяжитесь с нами!</h1>
                </div>
                <div className="element-animation">
                  <p>
                    Готовы помочь воплотить ваши идеи в жизнь! <br /> Обеспечим
                    ваш бизнес успешным онлайн <br />
                    -присутствием. Заполните форму или свяжитесь <br /> с нами –
                    обсудим решения для вашей компании.
                  </p>
                </div>
                <div className="element-animation">
                  <div className="icons">
                    <a href="https://t.me/+996500443423" className="iconFlex">
                      <img src={FaTelegram} alt="" />
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
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section style={{ paddingBottom: "40px" }} className="section__home_5">
        <div className="container">
          <div className="sc_5_wrapper">
            <div className="element-animation">
              <h1 className="home_5_logo">Наша команда!</h1>
            </div>
            <div className="sc_5_map ">
              {teamData.slice(0, 3).map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
          <div className="element-animation">
            <Link to="/comands">
              <button onClick={handleScrollToTop} className="vse-dev">Все разработчики</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Разбор  */}
      {/* <section className="section__home_6">
        <div className="container">
          <div className="sc__6_wrapper">
            <div className="contentimage">
              <div className="element-animation">
                <hr />
                <img src={contentImage} alt="" />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section> */}

    </>
  );
};

export default Home;