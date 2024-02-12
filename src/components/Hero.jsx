import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas, StarsCanvas } from './canvas';
import { Link } from 'react-scroll';

import React from 'react';

import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start gap-4`}
      >
        <div className='flex w-[1200px] gap-3'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-40 h-40 violet-gradient' />
        </div>

        <div className='pt-3'>
          <h1 className={`${styles.sectionHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'> Minhal
            </span>
          </h1>
          <div>
            <p className={`${styles.sectionSubText} mt-2 text-white-100 inline`}>
            {'>'} <Typewriter
                options={{
                  strings: ['Software Developer', `Computer Science '22 @ University of Waterloo`, 'Use the terminal or scroll down to learn more :)'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000
                }}
                className='inline'
              />
          </p>
          </div>
          
        </div>
        </div>
        


        <ComputersCanvas/>
      </div>


      <div className='absolute xs:bottom-5 bottom-5 w-full flex justify-center items-center'>
        <Link
          activeClass="active"
          to={`about`}
          spy={true}
          smooth={true}
          offset={-50}
          duration={200}
          className='cursor-pointer'
        >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero