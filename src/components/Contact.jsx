import React from 'react'
import { BallCanvas } from './canvas';
import { technologies } from '../constants';

const Contact = () => {
  return (
    <section id="contact">
      <div className='relative w-full min-h-[300px] mx-auto bg-slate-500 pt-8'>
        <div className='flex justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold py-5'>
              Contact Me
            </h1>
            <p className='max-w-[600px]'>
              Looking to hire a Software Developer for a full time position? Please reach out below!
            </p>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
              {technologies.map((technology) => {
                return (
                  <div className='w-28 h-28' key={technology.name}>
                    <a target='_blank' href='https://google.com'>
                      <BallCanvas icon={technology.icon} />
                    </a>

                  </div>
                )
              })
              }
            </div>

          </div>
        </div>
        <p className='text-center'>
          Minhal Shanjer &copy; 2024
        </p>
      </div>
    </section>
  )
}

export default Contact