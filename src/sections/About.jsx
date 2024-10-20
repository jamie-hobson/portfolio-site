import { motion } from "framer-motion";

import developerIllustration from "../content/graphics/undraw_developer_activity.svg";
import kelvingroveImage from "../content/graphics/winston-tjia-3-AIhvdawzc-unsplash.jpg";

const About = () => {
  return (
    <>
      <section className="relative my-navbarHeight overflow-x-clip ">
        <div className="absolute top-28 -left-[50vw] bg-pink opacity-5 h-[400px] w-[200vw] -rotate-12 -z-50" />
        <div className="h-11 sm:h-32" />
        <div className="max-w-6xl mx-auto left-0 right-0 px-5 flex flex-col-reverse sm:flex-row md:space-x-[75px] max-h-sectionHeight">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            src={developerIllustration}
            alt="Developer Illustration"
            className="max-w-80 hidden md:block"
            viewport={{ once: true }}
          />
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-semibold text-black">About Me</h2>
            <p className="text-black opacity-70">
              I am a recent graduate from the University of Strathclyde with an
              integrated Masters degree in Computer and Electronic Systems. I
              have a passion for software development and I am always looking to
              learn new technologies and further my skills. I am currently
              working as a Junior Cloud Developer at Cobry where I am leading
              the development of a new customer portal for the company.
            </p>
            <div>
              <img
                src={kelvingroveImage}
                alt="Kelvingrove Art Gallery"
                className=" w-full h-[75px] object-cover filter grayscale"
              />
              <div className="w-full h-[11px] bg-accentBlue" />
            </div>
          </motion.div>
        </div>
        <div className="h-11 sm:h-32" />
      </section>
    </>
  );
};

export default About;
