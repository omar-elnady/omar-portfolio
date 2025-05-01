import { motion } from "framer-motion";

import {
  FaCss3Alt,
  FaGithub,
  FaNode,
  FaReact,
  FaBootstrap,
  FaHtml5,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  const backendSkills = [
    { name: "Node Js", icon: <FaNode size="40" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "MongoDB", icon: <SiMongodb size="40" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "Mysql", icon: <SiMysql size="40" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "Express Js", icon: <SiExpress size="40" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
  ];
  
  const frontendSkills = [
    { name: "React Js", icon: <FaReact size="30" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "Next Js", icon: <SiNextdotjs size="30" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "JavaScript", icon: <IoLogoJavascript size="30" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "TypeScript", icon: <SiTypescript size="30" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "Tailwind Css", icon: <SiTailwindcss size="30" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap size="30" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size="30" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
    { name: "HTML5", icon: <FaHtml5 size="30" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" /> },
  ];
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 2.0,
          },
        },
      }}
    >
      <div className="w-full pb-32">
        <div className="mx-auto flex flex-col justify-center">
          <p className="font-bold text-blue-700 dark:text-blue-400 pb-6 text-center transition-colors duration-500">Skills</p>

          <ul className="flex justify-start items-center flex-row flex-wrap gap-8 mb-4 bg-blue-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md transition-colors duration-500">
            <span className="text-blue-500 dark:text-blue-400 text-xl sm:text-2xl w-full text-center md:w-fit font-bold mb-2 md:mb-0 transition-colors duration-500">
              Backend
            </span>
            {backendSkills.map((skill, index) => (
              <li
                key={index}
                className="group text-lg sm:text-xl font-bold flex justify-center items-center flex-col gap-2 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors duration-500"
              >
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>

          <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-4 bg-blue-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md transition-colors duration-500">
            <span className="text-blue-500 dark:text-blue-400 text-xl sm:text-2xl w-full text-center md:w-fit font-bold mb-2 md:mb-0 transition-colors duration-500">
              Frontend
            </span>

            {frontendSkills.map((skill, index) => (
              <li
                key={index}
                className="group text-lg sm:text-xl font-bold flex justify-center items-center flex-col gap-2 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors duration-500"
              >
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>

          <ul className="flex items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md transition-colors duration-500">
            <span className="text-blue-500 dark:text-blue-400 text-xl sm:text-2xl w-full text-center lg:w-fit font-bold mb-2 lg:mb-0 transition-colors duration-500">
              Other
            </span>
            <li className="group text-lg sm:text-xl font-bold flex justify-center items-center flex-col text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors duration-500">
              C++
            </li>
            <li className="group text-lg sm:text-xl font-bold flex justify-center items-center flex-col gap-2 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors duration-500">
              <FaGithub size="40px" className="group-hover:text-blue-500 text-black dark:text-white transition-colors duration-500" />
              git/GitHub
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;