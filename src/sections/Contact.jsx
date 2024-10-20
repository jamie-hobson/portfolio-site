import { motion } from "framer-motion";

import mailIllustration from "../content/graphics/undraw_mail_re_duel.svg";

const Contact = () => {
  return (
    <section id="contact" className="bg-navy text-white py-40">
      <div className="flex flex-col max-w-6xl mx-auto left-0 right-0 px-5 cursor-default">
        <div className="w-full h-full flex flex-col sm:flex-row sm:space-x-6 justify-between items-center">
          <div className="flex flex-col space-y-5">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold"
            >
              Contact Me
            </motion.h1>
            <p className="mt-5">
              If you would like to get in touch, please feel free to reach out
              to me via email or LinkedIn.
            </p>
            <div className="flex space-x-5 mt-5">
              <a
                href="mailto:jamie.m.hobson@btinternet.com"
                className="border-2 border-white rounded-full py-2 px-6 hover:bg-white hover:text-navy text-center items-center justify-center"
              >
                Send me an Email
              </a>
              <a
                href="https://www.linkedin.com/in/jamie-hobson/"
                className="border-2 border-white rounded-full py-2 px-8 text-center items-center hover:bg-white hover:text-navy flex justify-center"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            src={mailIllustration}
            alt="Developer Illustration"
            className="max-w-80 hidden md:block"
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
