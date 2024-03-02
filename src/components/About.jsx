import React from 'react';
import { profile } from '../assets';


const About = () => {
  return (
    <section id="about" className='py-20 relative w-full min-h-[300px] mx-auto bg-black pt-8 text-white'>
      <h2 className="text-center p-3 underline min-w-[30%] text-4xl">
          About Me
      </h2>
      <div className="flex flex-col py-10 md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-5xl px-10">
        <div className='flex flex-col items-center pr-10'>
          <img src={profile} alt="about" className="w-[15rem] h-[14rem] object-cover" />
        </div>
       
        <div className="flex-1">
        <p className='mb-5'>
        I am a third year CS major at the University of Toronto, with a passionate interest in software development and machine learning.
        In my free time I like to work on projects (such as this website) out of a habit for learning by doing. I am always eager to tackle new challenges
        and learn new skills.
        </p>
        <p>
        If you have exciting opportunities available please contact me!
        </p>
        </div>
      </div>
    </section>
  )
}

export default About;