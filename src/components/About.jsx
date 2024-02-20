import React from 'react';
import { profile } from '../assets';


const About = () => {
  return (
    <section id="about" className='py-20 relative w-full min-h-[300px] mx-auto bg-black pt-8 text-white'>
      <h2 className="text-center p-3 underline min-w-[30%] text-4xl">
          About Me
      </h2>
      <div className="flex flex-col py-10 md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-6xl px-10">
        <div className='flex flex-col items-center pr-10 '>
          <img src={profile} alt="about" className="w-[16rem] h-[16rem] object-cover rounded-2xl border-4 border-purple-900" />
        </div>
       
        <div className="flex-1 text-justify mx-3 mt-10 md:mt-3">
          <p className='mb-5'>
            I recently completed my undergrad in Computer Science from the University of Waterloo, and I'm in love with all things software. A lot of my free time is spent on developing projects and solving challenging algorithm problems. I'm constantly trying to learn more and am always on the lookout for new fun ideas to develop!
          </p>
          <p>
          I'm a developer with a history of designing scalable architectures, developing APIs/user interfaces, leading end-to-end product feature design, and
          deploying software solutions. In the past leveraged multiple programming languages and frameworks to deliver high-quality code. I've worked with teams to
          analyze requirements, identify improvement opportunities, and implement strategies aligning with technical and business goals. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;