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
    <section id="resume">
			<div className="flex flex-col py-10 md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-7xl px-10 bg-black text-black">
				<h2 className="flex-initial self-center md:self-start p-10 underline min-w-[30%] text-xl">Skills</h2>
				<div className="flex-1">
					<p>JavaScript, React, Python, C++, Java, Git, Jenkins, Docker</p>
					Summary of relevant skills
				</div>
			</div>
		</section>
  )
}

export default About;