import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/style/Content.scss";
const ScrollToElementLink = ({ targetId, linkText }) => {
  const scrollToElement = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <p onClick={scrollToElement} className="text-nav">
      {linkText}
    </p>
  );
};
const Content = () => {
  const { id } = useParams();
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    axios(
      `https://6576f7c7197926adf62ce478.mockapi.io/api/v1/okurmen/${id}`
    ).then(({ data }) => setTeamData(data));
  }, [id]);

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
      <section className="content-section">
        <div className="container">
          <div className="hover-card">
            <div className="flex__content">
              <div className="">
                <div className="element-animation">
                  <img id="avatar" className="avatar__content" src={teamData.avatar} alt="" />
                </div>
              </div>
              <div className="element-animation">
                <div className="">
                  <h1 className="name">{teamData.name}</h1>
                  <h2 className="text-pro">{teamData.title}</h2>
                  <div key={teamData.id} className="content-img__skill">
                    {teamData.images &&
                      teamData.images
                        .slice(`${teamData.sliceStart}`, `${teamData.sliceEnd}`)
                        .map(
                          (image, key) => (
                            // console.log(image.img),
                            (
                              <div key={key} className="\">
                                <img
                                  className="img-skill"
                                  src={image.img}
                                  alt=""
                                />
                              </div>
                            )
                          )
                        )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section__2">
        <div className="container">
          <div className="section__2-wrapper">
            <div className="lorem">
              <div className="element-animation">
                <h2 id="sel" style={{ color: "#5ac1e1" }}>
                  Цель
                </h2>
              </div>
              <div className="element-animation">
                <p className="target">{teamData.target}</p>
              </div>
              <div key={id} className="skills">
                <div className="element-animation">
                  <h1 id="navyki" className="logo-text">
                    Навыки
                  </h1>
                </div>
                <div className="element-animation">
                {teamData.skills &&
                  teamData.skills
                  .slice(`${teamData.sliceStart}`, `${teamData.sliceEnd}`)
                  .map((elemen, index) => (
                    console.log(elemen.skill),
                    <div>
                        <h1
                          style={{ paddingLeft: "20px" }}
                          className="text-skill"
                          key={index}
                          >
                          <span>{elemen.skill}</span>
                        </h1>
                        </div>
                    ))}
                    </div>
              </div>
            </div>
            <div
              style={{ paddingLeft: "20px", paddingTop: "20px", cursor: 'pointer' }}
              className="section2-card"
            >
              <div className="element-animation">
                <h1 style={{ color: "#5ac1e1" }} className="logo-navigation">
                  Навигация
                </h1>
              </div>
              <div className="element-animation">
              <ScrollToElementLink targetId="avatar" linkText="Цель" />
                <ScrollToElementLink targetId="sel" linkText="Навыки" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
