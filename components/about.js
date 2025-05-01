import { motion } from "framer-motion";
import Skills from "./Skills";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen  bg-white dark:bg-gray-900 transition-colors duration-500">
      <Head>
        <title>About | Omar Ahmed</title>
      </Head>
      <div className="flex justify-between md:mx-20 md:pt-32 pt-28">
        <div className="flex flex-col md:ml-20 px-4 sm:px-10 mt-10 w-full">
          <div className="flex flex-col lg:flex-row">
            <div className="md:px-8 w-full">
              <motion.div
                className="md:w-96"
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
                      delay: 0.4,
                    },
                  },
                }}
              >
                <h1 className="text-3xl font-bold sm:text-4xl mb-8 text-black dark:text-white transition-colors duration-500">
                  Hello, I&#39;m{" "}
                  <span className="text-blue-500 dark:text-blue-400 transition-colors duration-500">
                    Omar
                  </span>
                </h1>
              </motion.div>
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
                      delay: 1,
                    },
                  },
                }}
              >
                <h2 className="font-bold text-2xl sm:text-3xl text-left mb-5 text-black dark:text-white transition-colors duration-500">
                  I&#39;m a
                  <span className="text-blue-500 dark:text-blue-400 transition-colors duration-500">
                    {" "}
                    FullStack Developer
                  </span>{" "}
                  with a MERN Stack
                  <span className="text-blue-500 dark:text-blue-400 transition-colors duration-500">
                    {" "}
                    (React, NodeJs)
                  </span>
                  .
                </h2>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              className="w-full"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.6,
                  },
                },
              }}
            >
              <p className="text-left font-normal mb-5 flex-wrap text-gray-700 dark:text-gray-300 transition-colors duration-500">
                I am studying computer science in the faculty of science of Ain
                Shams University. Most of my experience is in full stack web
                development and problem solving. Check out some of my work
                <span> </span>
                <Link href="/projects">
                  <a
                    className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                    id="projects"
                  >
                    projects
                  </a>
                </Link>
              </p>
            </motion.div>
          </div>
          <div className="text-bold text-3xl mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
