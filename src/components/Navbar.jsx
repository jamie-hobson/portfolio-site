import { motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = ({
  homeRef,
  aboutRef,
  projectsRef,
  experienceRef,
  skillsRef,
  contactRef,
  scrollY,
}) => {
  const [hidden, setHidden] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <>
      <motion.nav
        className="hidden md:block fixed top-0 w-full h-navbarHeight z-50 bg-navy bg-opacity-50"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
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
      </motion.nav>
      {/* Mobile Menu: */}
      <div className="md:hidden fixed top-0 w-full h-14 z-50 bg-navy bg-opacity-70">
        <div className="flex items-center justify-between h-full px-4">
          <h1 className="text-xl font-bold text-white">Jamie Hobson</h1>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu color="white" size={40} />
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="bg-navy bg-opacity-70 py-3">
            <ul className="flex flex-col items-center space-y-1 w-full text-white">
              <li>
                <button
                  onClick={() => {
                    homeRef.current.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className=""
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    aboutRef.current.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className=""
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    projectsRef.current.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className=""
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    experienceRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMobileMenuOpen(false);
                  }}
                  className=""
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    skillsRef.current.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className=""
                >
                  Skills
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    contactRef.current.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className=" border-2 border-white rounded-full py-1 px-6 text-center hover:bg-white hover:text-navy"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
