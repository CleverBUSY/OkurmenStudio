
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import "../assets/style/Comands.scss";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const MemberCard = ({ member }) => {

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

  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered ? "scale(1.07)" : "scale(1)",
    opacity: isHovered ? 0.9 : 1,
  });

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  }


  return (
    <div className="element-animation">
      <animated.div
        onClick={handleScrollToTop}
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
    </div>
  );
};

const Comands = () => {
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

  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    axios("https://6576f7c7197926adf62ce478.mockapi.io/api/v1/okurmen")
      .then(({ data }) => setTeamData(data))
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="comands-wrapper">
          <div className="content-comands">
            <div className="element-animation">
              <h1 className="h1">Команда</h1>
            </div>
            <div className="element-animation">
              <p>
                Наша команда: Инноваторы, Разработчики, Творцы. Создаем <br />{" "}
                уникальные решения, воплощаем творческие идеи.
              </p>
            </div>
          </div>
        </div>

        <div
          className="comandsPhoto"
        >
          {teamData.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comands;
