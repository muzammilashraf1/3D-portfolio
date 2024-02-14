import React from 'react';
// import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({index, title, icon}) => {
  return (
    <p>
      { title }
    </p>
  )
};



const About = () => {
  return (
    <section id="about" className='py-20 relative w-full min-h-[300px] mx-auto bg-black pt-8 text-white'>
      <h2 className="text-center p-3 underline min-w-[30%] text-4xl">
          About Me
      </h2>
      <div className="flex flex-col py-10 md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-5xl px-10">
        <div className='flex flex-col items-center pr-10'>
          <img src="public/profile.jpg" alt="about" className="w-[11rem] h-[11rem] object-cover" />
        </div>
       
        <div className="flex-1">
        I recently completed my undergrad in Computer Science from the University of Waterloo, and I'm in love with all things software. A lot of my free time is spent on developing projects and solving challenging algorithm problems. I'm constantly trying to learn more and am always on the lookout for new fun ideas to develop!
        </div>
      </div>
    </section>
  )
}

export default About;