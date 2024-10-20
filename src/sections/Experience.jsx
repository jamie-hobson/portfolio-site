import { motion } from "framer-motion";
import { useState } from "react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(
    "juniorCloudDeveloper"
  );
  const experiences = [
    {
      id: "juniorCloudDeveloper",
      heading: (
        <>
          <h3 className="text-xl pb-4">
            Junior Cloud Developer{" "}
            <a
              href="https://cobry.co.uk"
              className="cursor-pointer text-accentBlue"
            >
              @ Cobry
            </a>
          </h3>
        </>
      ),
      dates: "August 2023 - Present",
      content: (
        <>
          <p className="pb-2">
            I am working in this role to lead development of the customer
            portal. I have been working full time since August 2024, and prior
            to that I worked part time while concluding my studies at
            university.
          </p>
          <p>I Performed various tasks including:</p>
          <li>System and UI design</li>
          <li>Full stack development with NextJS</li>
          <li>
            Configuring and integrating with a relational PostgreSQL database
            and Google APIs
          </li>
          <li>Deployment using GCP</li>
        </>
      ),
    },
    {
      id: "cloudDeveloperIntern",
      heading: (
        <>
          <h3 className="text-xl pb-4">
            Cloud Developer Intern{" "}
            <a
              href="https://cobry.co.uk"
              className="cursor-pointer text-accentBlue"
            >
              @ Cobry
            </a>
          </h3>
        </>
      ),
      dates: "June 2023 - August 2023",
      content: (
        <>
          <p>Began constructing the company’s customer portal</p>
          <p>
            Reached an impressive level of functionality for the short 6-week
            timeframe
          </p>
          <p>
            Quickly adapted to the challenge of picking up new technologies such
            as React, NextJS, and Tailwind
          </p>
        </>
      ),
    },
    {
      id: "autoApplicationsIntern",
      heading: (
        <>
          <h3 className="text-xl pb-4">
            Auto Applications Intern{" "}
            <a
              href="https://www.nxp.com/"
              className="cursor-pointer text-accentBlue"
            >
              @ NXP
            </a>
          </h3>
        </>
      ),
      dates: "June 2022 - September 2022",
      content: (
        <>
          <p>Wrote embedded C code to initialize and test a new device</p>
          <p>
            Gained valuable experience of both debugging software and
            collaborating with other engineers, while developing my analytical
            skills
          </p>
          <p>
            Budgeted, organised, and ran a charity “Family Day” event alongside
            other interns and new graduates. The event was successful with over
            130 attendees
          </p>
        </>
      ),
    },
    {
      id: "designEngineerIntern",
      heading: (
        <>
          <h3 className="text-xl pb-4">
            Design Engineer Intern{" "}
            <a
              href="https://www.nxp.com/"
              className="cursor-pointer text-accentBlue"
            >
              @ NXP
            </a>
          </h3>
        </>
      ),
      dates: "June 2021 - August 2021",
      content: (
        <>
          <p>
            Designed and coded a Verilog bus functional model to improve
            simulation time for Elliptic Curve Crypto IP
          </p>
          <p>
            Presented on progress made which improved my technical communication
            skills
          </p>
        </>
      ),
    },
    {
      id: "student",
      heading: (
        <>
          <h3 className="text-xl pb-4">
            MEng Computer and Electronic Systems Student{" "}
            <a
              href="https://www.strath.ac.uk/courses/undergraduate/computerelectronicsystemsmeng/"
              className="cursor-pointer text-accentBlue"
            >
              @ University of Strathclyde
            </a>
          </h3>
        </>
      ),
      dates: "September 2019 - June 2024",
      content: (
        <>
          <p className="font-bold">Grade: Distinction (equivalent to a 1st)</p>
          <li>
            Triple accredited by the Institution of Engineering and Technology
            (IET), Engineering Council and British Computer Society
          </li>
          <li>
            Course content is broad without sacrificing depth, as computer
            science/software engineering and electrical and electronic
            engineering are covered
          </li>
          <li>
            I have taken the opportunity to prioritise software engineering and
            computer science related subjects over the years
          </li>
        </>
      ),
    },
  ];

  return (
    <>
      <section className="relative py-navbarHeight overflow-x-cli bg-navy text-white">
        <div className="max-w-6xl mx-auto left-0 right-0 px-5 cursor-default">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl pb-6 font-semibold"
          >
            Experience
          </motion.h1>
          <div className="hidden md:flex flex-col md:flex-row w-full mt-5">
            <ul className="hidden md:flex border-r-white border-r-2  flex-col w-full md:max-w-64">
              <li
                className={`p-2 ${
                  selectedExperience == "juniorCloudDeveloper" &&
                  "text-accentBlue bg-white bg-opacity-20"
                } text-left`}
                onClick={() => setSelectedExperience("juniorCloudDeveloper")}
              >
                Junior Cloud Developer @ Cobry
              </li>
              <li
                className={`p-2 ${
                  selectedExperience == "cloudDeveloperIntern" &&
                  "text-accentBlue bg-white bg-opacity-20"
                } text-left`}
                onClick={() => setSelectedExperience("cloudDeveloperIntern")}
              >
                Cloud Developer Intern <br />@ Cobry
              </li>
              <li
                className={`p-2 ${
                  selectedExperience == "autoApplicationsIntern" &&
                  "text-accentBlue bg-white bg-opacity-20"
                } text-left`}
                onClick={() => setSelectedExperience("autoApplicationsIntern")}
              >
                Auto Applications Intern <br />@ NXP
              </li>
              <li
                className={`p-2 ${
                  selectedExperience == "designEngineerIntern" &&
                  "text-accentBlue bg-white bg-opacity-20"
                } text-left`}
                onClick={() => setSelectedExperience("designEngineerIntern")}
              >
                Design Engineer Intern <br />@ NXP
              </li>
              <li
                className={`p-2 ${
                  selectedExperience == "student" &&
                  "text-accentBlue bg-white bg-opacity-20"
                } text-left`}
                onClick={() => setSelectedExperience("student")}
              >
                MEng Computer and Electronic Systems Student <br />@ University
                of Strathclyde
              </li>
            </ul>
            <div className="p-2 pl-5">
              {
                experiences.find((exp) => exp.id === selectedExperience)
                  ?.heading
              }
              <p className="pb-3">
                {
                  experiences.find((exp) => exp.id === selectedExperience)
                    ?.dates
                }
              </p>
              <span className="opacity-80">
                {
                  experiences.find((exp) => exp.id === selectedExperience)
                    ?.content
                }
              </span>
            </div>
          </div>
          {/* Mobile */}
          {/* Print out all experience at once */}
          <div className="md:hidden space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="p-2">
                {exp.heading}
                <p className="pb-3">{exp.dates}</p>
                <span className="opacity-80">{exp.content}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
