import { motion } from 'framer-motion';

import passwordManagerThumbnail from '../content/projects/password-manager-thumbnail.png';
import litterPickerThumbnail from '../content/projects/litter-picking-thumbnail.jpg';
import portfolioThumbnail from '../content/projects/portfolio-thumbnail.png';
import amongFriendsThumbnail from '../content/projects/among-friends-thumbnail.png';
import liftYourLandingThumbnail from '../content/projects/lift-your-landing-thumbnail.png';
import fourArmThumbnail from '../content/projects/4-arm-thumbnail.png';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Projects = () => {
  return (
    <>
      <section className="relative py-navbarHeight overflow-x-clip">
      <div className='absolute top-36 -left-[50vw] bg-orange opacity-5 h-[600px] w-[200vw] rotate-12 -z-50' />
        <div className="max-w-6xl mx-auto left-0 right-0 px-5">
          <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} className="text-5xl font-semibold text-black">Projects</motion.h1>
          <motion.div
            className="grid grid-cols-12 grid-rows-8 gap-3 md:gap-5 w-full h-[700px] md:h-[500px] mt-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.button 
              className="relative col-span-6 md:col-span-5 row-span-2 md:row-span-5 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img src={passwordManagerThumbnail} alt="Password Manager Project Thumbnail" className="object-cover w-full h-full brightness-50" />
              <div className="absolute inset-0 flex items-end p-3">
                <h2 className="text-white text-md md:text-xl font-bold text-left">SafeHouse: Password Manager Google Chrome Extension</h2>
              </div>
            </motion.button>
            <motion.button 
              className="relative col-span-6 md:col-span-4 row-span-3 md:row-span-4 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img src={litterPickerThumbnail} alt="Litter Picking Robot Project Thumbnail" className="object-cover w-full h-full brightness-50" />
              <div className="absolute inset-0 flex items-end p-3">
                <h2 className="text-white text-md md:text-xl font-bold text-left">Make Scotland Tidy: <br />Autonomous Litter Picking Rover</h2>
              </div>
            </motion.button>
            <motion.button 
              className="relative col-span-6 md:col-span-3 row-span-3 md:row-span-6 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img src={amongFriendsThumbnail} alt="Among Friends Project Thumbnail" className="object-cover w-full h-full brightness-75" />
              <div className="absolute inset-0 flex items-end p-3">
                <h2 className="text-white text-md md:text-xl font-bold text-left">Among Friends: <br />Design for Chat App aimed at the Elderly</h2>
              </div>
            </motion.button>
            <motion.button 
              className="relative col-span-6 md:col-span-4 row-span-3 md:row-span-2 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img src={portfolioThumbnail} alt="Portfolio site project thumbnail" className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-end p-3">
                <h2 className="text-white text-md md:text-xl font-bold text-left">Portfolio Website</h2>
              </div>
            </motion.button>
            <motion.button 
              className="relative col-span-6 md:col-span-5 row-span-3 md:row-span-3 bg-orange-100 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img src={fourArmThumbnail} alt="4-Arm Project Thumbnail" className="object-cover w-full h-full brightness-50" />
              <div className="absolute inset-0 flex items-end p-3">
                <h2 className="text-white text-md md:text-xl font-bold text-left">4-Arm: Web-enabled, mobile controlled ball game</h2>
              </div>
            </motion.button>
            <motion.button 
              className="relative col-span-6 md:col-span-7 row-span-2 bg-teal-100 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img src={liftYourLandingThumbnail} alt="Lift Your Landing Project thumbnail" className="object-cover w-full h-full brightness-75" />
              <div className="absolute inset-0 flex items-end p-3">
                <h2 className="text-white text-md md:text-xl font-bold text-left">Lift your Landing: AI Powered Landing Page Analyser</h2>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Projects;