import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="page about">
      <h1>Про мене</h1>
      <p>
        Привіт! Я — Анна, студентка 2-го курсу спеціальності
         “Комп’ютерні науки” на факультеті інформаційних технологій.
      </p>
      <p>
        З дитинства мене приваблював світ технологій, тому я пробувала себе у різних напрямках:
         створювала вебсайти, займалась дизайном, а також цікавилась
         розробкою ігор з використанням Unity та
         Unreal Engine. Кожна з цих сфер відкривала для мене нові горизонти.
      </p>
      
      <h2>Мої проєкти</h2>

      <div className="projects">
        <div className="project-card">
          <h3>HTML + CSS</h3>
          <div className="project-buttons">
            <a href="https://github.com/AnnaPavlyk/html-css-landing" target="_blank" rel="noreferrer" className="btn">
              HTML + CSS (1)
            </a>
            <a href="https://github.com/AnnaPavlyk/color-change-app" target="_blank" rel="noreferrer" className="btn">
              HTML + CSS (2)
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>JavaScript</h3>
          <div className="project-buttons">
            <a href="https://github.com/AnnaPavlyk/js-DOM1" target="_blank" rel="noreferrer" className="btn">
              JavaScript (1)
            </a>
            <a href="https://github.com/AnnaPavlyk/js-DOM2" target="_blank" rel="noreferrer" className="btn">
              JavaScript (2)
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>React</h3>
          <div className="project-buttons">
            <a href="https://github.com/AnnaPavlyk/react-intro" target="_blank" rel="noreferrer" className="btn">
              React (1)
            </a>
            <a href="https://github.com/AnnaPavlyk/react-second-lab" target="_blank" rel="noreferrer" className="btn">
              React (2)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
