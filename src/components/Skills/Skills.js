import React from 'react';
import skillList from "./skillList";
 
const Skill = (props)=> {
  const {name, img, level, points, color}=props;
  return <a className="skill" 
      href="https://app.pluralsight.com/profile/Denis-shchetinin" 
      target="_blank" rel="noopener noreferrer">
      <div className={`skill__icon skill__icon_${img}`}></div>
      {name}
      <span className={`skill__score skill__score_${color}`}>{level} {points}</span>
    </a>
};

const Skills = () => {
    return (
      <section className="skills">
        <div className="main-container">
          <h4 className="skills_h4">Уровень навыков по тестам  <a href="https://app.pluralsight.com/profile/Denis-shchetinin" target="_blank" rel="noopener noreferrer">pluralsight.com</a>
          </h4>
          {skillList.map((item, index) =>  <Skill {...item}   key={index}/>)}
        </div>
      </section>
    )
};

export default Skills;