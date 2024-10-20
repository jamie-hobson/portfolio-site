import { Canvas } from "@react-three/fiber";
import TextureMesh from "./../components/TextureMesh";
import { motion } from "framer-motion";

const ballVariant = {
  bounce: {
    x: 0,
    y: [-40, 0],
    transition: {
      y: {
        duration: 0.45,
        ease: "easeIn",
        repeat: Infinity,
        delay: 2,
        type: "tween",
        repeatType: "reverse",
      },
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = ({
  homeRef,
  aboutRef,
  projectsRef,
  experienceRef,
  skillsRef,
  contactRef,
  scrollY,
}) => {
  return (
    <>
      <section className="overflow-hidden relative">
        <div className="hidden sm:block absolute top-0 w-full h-navbarHeight z-50">
          <div className="max-w-6xl h-full mx-auto flex justify-between items-center px-5 text-white z-50">
            <h1 className="text-2xl font-bold">Jamie Hobson</h1>
            <ul className="flex space-x-5 items-center">
              <li>
                <button
                  onClick={() =>
                    homeRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-lg"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    aboutRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-lg"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    projectsRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-lg"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    experienceRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-lg"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    skillsRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-lg"
                >
                  Skills
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    contactRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-lg border-2 border-white rounded-full py-2 px-8 text-center hover:bg-white hover:text-navy"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        <Canvas
          className="absolute z-0"
          gl={{
            preserveDrawingBuffer: true,
            premultipliedAlpha: false,
            alpha: true,
            transparent: true,
            antialias: true,
            precision: "highp",
            powerPreference: "high-performance",
          }}
          resize={{
            debounce: 0,
            scroll: false,
            offsetSize: true,
          }}
          dpr={1}
          camera={{
            fov: 75,
            near: 0.1,
            far: 1000,
            position: [0, 0, 5],
          }}
          style={{ height: "100vh", width: "100vw" }}
        >
          <TextureMesh />
        </Canvas>
        <motion.div
          className="absolute flex flex-col z-10 top-[40%] sm:top-1/2 transform -translate-y-1/2 max-w-6xl mx-auto left-0 right-0 space-y-3 px-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={item} className="text-6xl font-bold text-white">
            Jamie Hobson
          </motion.h1>
          <motion.p variants={item} className="text-white text-3xl opacity-70">
            Software Developer in Glasgow
          </motion.p>
          <motion.a
            href="mailto:jamie.m.hobson@btinternet.com"
            variants={item}
            className="border-2 border-white text-white  text-xl px-8 py-3 rounded-full text-center hover:bg-white hover:text-navy self-start"
          >
            Contact Me
          </motion.a>
        </motion.div>
        <div className="absolute z-10 bottom-32 sm:bottom-24 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border-white border-[1px] pt-11 pb-1 px-1"
          >
            <motion.div
              className="bg-white w-4 h-4 rounded-full"
              variants={ballVariant}
              animate="bounce"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
