import React from 'react';
import projectList from "./projectList";

const Proj = (props)=> {
  const {color, name, linkSite, linkCode}=props;
  return (
    <div className="post">
      <div className="post__img-wrap">
        <div 
          className={`post__img post__img_${name}`}
          style={{'backgroundColor': color}}
        ></div>
      </div>
      <div className="post__links">
        <a href={linkSite} className="post__link post__link_site">{name}</a>
        <a href={linkCode} className="post__link post__link_code">code</a>
      </div>
    </div>
)};

const Projects = () => {
    return (
      <section className="projects">
      <div className="main-container">
        <h3 className="projects__h3">Избранные работы</h3>
        <div className="post-wrapper">
          {projectList.map((item, index) => <Proj {...item} key={index}/>)}
        </div>
      </div>
    </section>
    )
};

export default Projects;