import React from 'react';
import FaceCard from "../FaceCard";
import Reviews from "../Reviews";
import Contacts from "../Contacts";
import Skills from "../Skills";
import Projects from "../Projects";

import "fontsource-russo-one" ;
require('@openfonts/roboto-mono_cyrillic')
const Landing = () => {
  return (
    <div>    
      <FaceCard/>
      <Skills/>
      <Projects/>
      <Reviews/>
      <Contacts/>
    </div>
  );
};

export default Landing;