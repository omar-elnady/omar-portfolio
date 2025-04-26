import { motion } from "framer-motion";
import Skills from "../components/Skills";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div className="h-screen lg:pl-20 lg:pr-32">
      <Head>
        <title>About | Omar Ahmed</title>
      </Head>
      <div className="flex justify-between md:mx-20 md:pt-32 pt-28">
        <div className="flex flex-col md:ml-20 px-10 mt-10">
          <div className="flex flex-col md:flex-row">
            <div className=" md:px-8 ">
              <motion.div className="md:w-96"
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
                <h1 className="text-3xl font-bold sm:text-4xl mb-8">
                  Hello, I&#39;m <span className="text-blue-500">Omar</span>
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
                <h2 className="font-bold text-3xl text-left mb-5">
                  I&#39;m a
                  <span className="text-blue-500"> FullStack Developer</span> with a
                  MERN Stack
                  <span className="text-blue-500"> (React , NodeJs) </span>.
                </h2>
              </motion.div>
            </div>
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
                    delay: 1.6,
                  },
                },
              }}
            >
              <p className="text-left font-normal mb-5 flex-wrap">
                I am studying computer science in the faculty of science of Ain Shams University . Most of
                my experience is in full stack web development and problem
                solving. Check out some of my work
                <span> </span> 

                <Link id='projects'  href='/projects'>
                  <a className="text-blue-500 " >projects</a>
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
