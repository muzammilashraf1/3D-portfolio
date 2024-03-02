import React from 'react'
import { BallCanvas } from './canvas';
import { contact } from '../constants';

const Contact = () => {
  return (
    <section id="contact">
      <div className='relative w-full min-h-[300px] mx-aut pt-8 bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div className='flex justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold py-5'>
              Contact Me
            </h1>
            <p className='max-w-[600px]'>
              Want to collaborate? Looking to hire a Software Developer for a full time position? Please reach out below!
            </p>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
              {contact.map((contactItem) => {
                return (
                  <div className='w-28 h-28' key={contactItem.name}>
                    <a target='_blank' href={contactItem.link}>
                      <BallCanvas icon={contactItem.icon} />
                    </a>

                  </div>
                )
              })
              }
            </div>

          </div>
        </div>
        <p className='text-center'>
          Muzammil Ashraf &copy; 2024
        </p>
      </div>
    </section>
  )
}

export default Contact