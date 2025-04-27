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
  const backendSkilss = [
    { name: "Node Js", icon: <FaNode size="40" /> },
    { name: "MongoDB", icon: <SiMongodb size="40" /> },
    { name: "Mysql", icon: <SiMysql size="40" /> },
    { name: "Express Js", icon: <SiExpress size="40" /> },
  ];
  const frontendSkills = [
    { name: "React Js", icon: <FaReact size="30" /> },
    { name: "Next Js", icon: <SiNextdotjs size="30" /> },
    { name: "JavaScript", icon: <IoLogoJavascript size="30" /> },
    { name: "TypeScript", icon: <SiTypescript size="30" /> },
    { name: "Tailwind Css", icon: <SiTailwindcss size="30" /> },
    { name: "Bootstrap", icon: <FaBootstrap size="30" /> },
    { name: "CSS3", icon: <FaCss3Alt size="30" /> },
    { name: "HTML5", icon: <FaHtml5 size="30" /> },
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
          <p className=" font-bold text-blue-900 pb-4 text-center">Skills</p>

          <ul className="flex justify-start items-center flex-row flex-wrap gap-8 mb-2 bg-blue-50 p-8 rounded-2xl">
            <span className="text-blue-500 text-2xl w-full text-center md:w-fit">
              Backend
            </span>
            {backendSkilss.map((skill, index) => (
              <li className=" text-xl font-bold flex justify-center items-center flex-col">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>

          <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
            <span className="text-blue-500 text-2xl w-full text-center md:w-fit">
              Frontend
            </span>

            {frontendSkills.map((skill, index) => (
              <li className=" text-xl font-bold flex justify-center items-center flex-col">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>

          <ul className="flex items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
            <span className="text-blue-500 text-2xl w-full text-center lg:w-fit">
              Other
            </span>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              C++
            </li>
            <li className="text-xl font-bold flex justify-center items-center flex-col">
              <FaGithub size="40px" />
              git/GitHub
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
