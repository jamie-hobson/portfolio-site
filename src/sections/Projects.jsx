import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import passwordManagerThumbnail from "../content/projects/password-manager-thumbnail.png";
import litterPickerThumbnail from "../content/projects/litter-picking-thumbnail.jpg";
import portfolioThumbnail from "../content/projects/portfolio-thumbnail.png";
import amongFriendsThumbnail from "../content/projects/among-friends-thumbnail.png";
import liftYourLandingThumbnail from "../content/projects/lift-your-landing-thumbnail.png";
import fourArmThumbnail from "../content/projects/4-arm-thumbnail.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeVariant = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleSelectedProject = (project) => {
    if (selectedProject === project) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <>
      <section className="relative py-navbarHeight overflow-x-clip">
        <div className="absolute top-36 -left-[50vw] bg-orange opacity-5 h-[600px] w-[200vw] rotate-12 -z-50" />
        <div className="max-w-6xl mx-auto left-0 right-0 px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-semibold text-black"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base text-black mt-10"
          >
            More detail, including GitHub and Figma links where appropriate,
            will be added. Please don't hesitate to get in touch if you would
            like to know more!
          </motion.p>
          <motion.div
            className="grid grid-cols-12 grid-rows-8 gap-3 md:gap-5 w-full h-[700px] md:h-[500px] mt-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Password Manager Project */}
            <motion.button
              className="relative col-span-6 md:col-span-5 row-span-2 md:row-span-5 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleSelectedProject("passwordManager")}
            >
              <AnimatePresence mode="wait">
                {selectedProject !== "passwordManager" ? (
                  <motion.div
                    key="front"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={passwordManagerThumbnail}
                      alt="Password Manager Project Thumbnail"
                      className="absolute inset-0 object-cover w-full h-full brightness-50"
                    />
                    <div className="absolute inset-0 flex items-end p-3">
                      <h2 className="text-white text-md md:text-xl font-bold text-left">
                        SafeHouse: Password Manager Google Chrome Extension
                      </h2>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center p-3 bg-lime-100 text-black"
                  >
                    <p className="text-xs sm:text-sm md:text-lg">
                      SafeHouse is a password manager Google Chrome extension
                      that I built for my individual project in my fourth year
                      of university. It was implemented using AngularJS and
                      NodeJS, as well as MongoDB.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Litter Picker Project */}
            <motion.button
              className="relative col-span-6 md:col-span-4 row-span-3 md:row-span-4 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleSelectedProject("litterPicker")}
            >
              <AnimatePresence mode="wait">
                {selectedProject !== "litterPicker" ? (
                  <motion.div
                    key="front"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={litterPickerThumbnail}
                      alt="Litter Picking Robot Project Thumbnail"
                      className="absolute inset-0 object-cover w-full h-full brightness-50"
                    />
                    <div className="absolute inset-0 flex items-end p-3">
                      <h2 className="text-white text-md md:text-xl font-bold text-left">
                        Make Scotland Tidy: <br />
                        Autonomous Litter Picking Rover
                      </h2>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center p-3 bg-amber-200 text-black"
                  >
                    <p className="text-sm sm:text-base lg:text-lg">
                      My final year group project at university was a to design
                      and build an autonomous litter picking rover. The project
                      was a great success and we had great fun demonstrating the
                      finished rover to members of the industry.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Among Friends Project */}
            <motion.button
              className="relative col-span-6 md:col-span-3 row-span-3 md:row-span-6 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleSelectedProject("amongFriends")}
            >
              <AnimatePresence mode="wait">
                {selectedProject !== "amongFriends" ? (
                  <motion.div
                    key="front"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={amongFriendsThumbnail}
                      alt="Among Friends Project Thumbnail"
                      className="absolute inset-0 object-cover w-full h-full brightness-75"
                    />
                    <div className="absolute inset-0 flex items-end p-3">
                      <h2 className="text-white text-md md:text-xl font-bold text-left">
                        Among Friends: <br />
                        Design for Chat App aimed at the Elderly
                      </h2>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center p-3 bg-fuchsia-200 text-black"
                  >
                    <p className="text-sm sm:text-base lg:text-lg">
                      Among Friends is an app I designed as part of my Usable
                      Systems module at university. The app design is intended
                      to be usable for the elderly to enable them to find
                      friends and people with shared interests, and help fight
                      isolation among the older population.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Portfolio Project */}
            <motion.button
              className="relative col-span-6 md:col-span-4 row-span-3 md:row-span-2 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleSelectedProject("portfolio")}
            >
              <AnimatePresence mode="wait">
                {selectedProject !== "portfolio" ? (
                  <motion.div
                    key="front"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={portfolioThumbnail}
                      alt="Portfolio site project thumbnail"
                      className="absolute inset-0 object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-end p-3">
                      <h2 className="text-white text-md md:text-xl font-bold text-left">
                        Portfolio Website
                      </h2>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center p-3 bg-lime-200 text-black"
                  >
                    <p className="text-sm">
                      This is the website you are viewing right now! I built it
                      after graduating from university to showcase my skills and
                      projects. It is built using React, Tailwind CSS, Framer
                      Motion and ThreeJS for the animated background.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* 4-Arm Project */}
            <motion.button
              className="relative col-span-6 md:col-span-5 row-span-3 md:row-span-3 bg-orange-100 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleSelectedProject("fourArm")}
            >
              <AnimatePresence mode="wait">
                {selectedProject !== "fourArm" ? (
                  <motion.div
                    key="front"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={fourArmThumbnail}
                      alt="4-Arm Project Thumbnail"
                      className="absolute inset-0 object-cover w-full h-full brightness-50"
                    />
                    <div className="absolute inset-0 flex items-end p-3">
                      <h2 className="text-white text-md md:text-xl font-bold text-left">
                        4-Arm: Web-enabled, mobile controlled ball game
                      </h2>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center p-3 bg-red-200 text-black"
                  >
                    <p className="text-sm sm:text-base lg:text-lg">
                      This is a web enabled, gamified robotic arm that I
                      designed as part of a group in my third year at
                      university. My role was to build the web interface that
                      controlled the arm and the server for the game that the
                      users could play.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Lift Your Landing Project */}
            <motion.button
              className="relative col-span-6 md:col-span-7 row-span-2 bg-teal-100 rounded-xl overflow-hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleSelectedProject("liftYourLanding")}
            >
              <AnimatePresence mode="wait">
                {selectedProject !== "liftYourLanding" ? (
                  <motion.div
                    key="front"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={liftYourLandingThumbnail}
                      alt="Lift Your Landing Project thumbnail"
                      className="absolute inset-0 object-cover w-full h-full brightness-75"
                    />
                    <div className="absolute inset-0 flex items-end p-3">
                      <h2 className="text-white text-md md:text-xl font-bold text-left">
                        Lift your Landing: AI Powered Landing Page Analyser
                      </h2>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center p-3 bg-blue-200 text-black"
                  >
                    <p className="text-xs sm:text-base">
                      This personal project is a web app that visits a website's
                      landing page, takes a screenshot, and uses the GPT-4 API
                      to analyze and suggest improvements. It's being built with
                      NextJS and TypeScript.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
