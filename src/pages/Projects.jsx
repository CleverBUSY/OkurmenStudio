import React, { useState, useEffect } from "react";
import axios from "axios"; // Add this import statement
import "../assets/style/Projects.scss";
import "../assets/style/Home.scss";
import contentCardImg from "../assets/media/contentCard.svg";

const Projects = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    axios(
      "https://65a2702f42ecd7d7f0a79fa0.mockapi.io/https/codemoon/projects/Projects"
    )
      .then(({ data }) => {
        setTeamData(data);
      });
  }, []);
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-wrapper">
            <h1 className="logo-pro-text">Проекты</h1>
            <p className="logo-pro">Проекты, разработанные нашей командой. Мы внесли свой профессионализм и творческий подход в каждый из них.</p>
            <div className="pro-flex">
              {
                teamData.slice(0,3).map((item, index) => (
                  <div className="content__card_pro">
                      <img className="cardimg card_images_alpins" src={item.avatar} alt="" />
                      <h1 className="card_logo">{item.name}</h1>
                    <p className="card_text">
                      {item.smalltarget}
                    </p>
                    <h1 className="cr_opis">
                      Краткое описание
                    </h1>
                    <p className="target">
                      {item.target}
                    </p>
                    <h1 className="cr_stek">
                      Используемый стек технологий
                    </h1>
                      
                    <div className="card_img_flex">
                      {item.doImageSkills.map((member) => (
                      <img src={member.img} alt="" />
                        ))}
                        </div>
                    {
                      item.doSkills.map((ele) => (
                        console.log(ele.sliceStart, "lorem", ele.sliceEnd),
                        <div className="">
                        <p className="text_skill_steg" ><b style={{fontSize: "25px", fontWeight: "100"}}>{ele.skills.slice(`${ele.sliceStart}`, `${ele.sliceEnd}`)} </b> {ele.skills.slice(`${ele.sliceStartEnd}`, `${1000}`)}</p>
                          </div>
                      ))
                    }
                    <a href={item.sylka}>
                      <button className="card__btn">
                        Подробное <span>→</span>
                      </button>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Projects;
