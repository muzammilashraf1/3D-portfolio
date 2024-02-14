import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';

import { github } from '../assets';
// import { SectionWrapper } from './SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 onClick={() => window.open(source_code_link, "_blank")} className='cursor-pointer text-white font-bold text-[24px] underline decoration-4 decoration-blue-400'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  return (
    <section id="works" name="works" className='py-20 flex flex-col justify-center items-center w-full min-h-[300px] mx-auto bg-hero-pattern pt-8 text-white'>
      <h2 className="text-center p-3 underline min-w-[30%] text-4xl">
        Projects
      </h2>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[1.5rem] max-w-3xl leading-[30px]'>
        Here are some of my projects. You can find more on my Gitub.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={`project-${index}`}
              index={index} {...project} />
          );

        })}

      </div>
    </section>
  )
}

export default Works