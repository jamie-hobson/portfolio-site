import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
      delay: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  const [category, setCategory] = useState("all");

  const skillArray = [
    { name: "React", category: "framework" },
    { name: "Angular", category: "framework" },
    { name: "Node.js", category: "framework" },
    { name: "Tailwind", category: "framework" },
    { name: "Material UI", category: "framework" },
    { name: "Python", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "Java", category: "language" },
    { name: "C", category: "language" },
    { name: "PHP", category: "language" },
    { name: "HTML", category: "language" },
    { name: "CSS", category: "language" },
    { name: "MongoDB", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "Figma", category: "tool" },
    { name: "VSCode", category: "tool" },
    { name: "Git", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "GCP", category: "devops" },
    { name: "IntelliJ", category: "tool" },
    { name: "Eclipse", category: "tool" },
    { name: "PyCharm", category: "tool" },
  ];

  return (
    <>
      <section className="relative py-navbarHeight overflow-x-cli bg-navy text-white">
        <div className="flex flex-col max-w-6xl mx-auto left-0 right-0 px-5 cursor-default items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-semibold text-center"
          >
            Skills
          </motion.h1>
          <div className="flex flex-wrap overflow-y-clip space-x-2 md:space-x-6 mt-5 sm:text-lg min-h-14 justify-center">
            <button
              onClick={() => setCategory("all")}
              className={category === "all" ? "relative text-accentBlue" : ""}
            >
              All
              {category === "all" && (
                <div className="absolute bg-accentBlue w-5 h-1 sm:h-2" />
              )}
            </button>
            <button
              onClick={() => setCategory("language")}
              className={
                category === "language" ? "relative text-accentBlue" : ""
              }
            >
              Languages
              {category === "language" && (
                <div className="absolute bg-accentBlue w-8 h-1 sm:h-2" />
              )}
            </button>
            <button
              onClick={() => setCategory("framework")}
              className={
                category === "framework" ? "relative text-accentBlue" : ""
              }
            >
              Frameworks
              {category === "framework" && (
                <div className="absolute bg-accentBlue w-8 h-1 sm:h-2" />
              )}
            </button>
            <button
              onClick={() => setCategory("database")}
              className={
                category === "database" ? "relative text-accentBlue" : ""
              }
            >
              Databases
              {category === "database" && (
                <div className="absolute bg-accentBlue w-8 h-1 sm:h-2" />
              )}
            </button>
            <button
              onClick={() => setCategory("tool")}
              className={category === "tool" ? "relative text-accentBlue" : ""}
            >
              Tools
              {category === "tool" && (
                <div className="absolute bg-accentBlue w-8 h-1 sm:h-2" />
              )}
            </button>
            <button
              onClick={() => setCategory("devops")}
              className={
                category === "devops" ? "relative text-accentBlue" : ""
              }
            >
              DevOps
              {category === "devops" && (
                <div className="absolute bg-accentBlue w-8 h-1 sm:h-2" />
              )}
            </button>
          </div>
          <motion.div
            key={category}
            className="flex flex-wrap justify-center gap-4 mt-5 max-w-3xl"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skillArray.map((skill, index) => {
              if (category === "all" || category === skill.category) {
                return (
                  <motion.div
                    key={index}
                    className="bg-white bg-opacity-20 py-2 px-5 rounded-full"
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.div>
                );
              }
              return null;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
