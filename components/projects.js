import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import Head from "next/head";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      imgSrc: "",
      title: "Warhouse Management",
      description:
        "It is a program to manage one or more stores at the same time and easy to use for a comfortable user experience. There is adding products, modifying, deleting, knowing the products that have been purchased and sold, retrieving the last invoices that have been sold, exchange and addition permissions",
      techStack: "ReactJs, Shadcn, Tailwind, CSS, Nodejs, ExpressJs, MongoDB",
      linkInGitHub: "",
    },
    {
      imgSrc: "/images/project-images/Courses.png",
      title: "Learning Management System",
      description:
        "It is a platform designed to manage online learning experiences easily and efficiently. It supports creating courses, enrolling students, tracking progress, managing assignments and quizzes, and providing a smooth and user-friendly experience for both instructors and learners. It also allows monitoring course performance, managing certifications, and delivering educational content in an organized and interactive way.",
      techStack:
        "NextJs, Shadcn, Redux, Tailwind, Nodejs, ExpressJs, MongoDB, Multer, Cloudinary",
      linkInGitHub:
        "https://github.com/omar-elnady/Front-Learning-mangment-System",
      clickLink: "https://lms-omar.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen  pt-24  bg-white dark:bg-gray-900 transition-colors duration-500">
      <h1 className="font-bold text-blue-700 dark:text-blue-400 pb-4 text-center transition-colors duration-500 text-3xl">
        Projects
      </h1>
      <div className="  pb-32 mx-auto space-y-10 pt-6">
        {projects.map((project, index) => (
          <section
            key={index}
            className="p-4 md:p-8 bg-gray-100 dark:bg-gray-800 rounded-lg 
    shadow-lg hover:shadow-xl
    dark:shadow-gray-900/50
    dark:hover:shadow-white/10
    
    ease-out transition-all duration-300"
          >
            <h1
              onClick={() =>
                project.clickLink && window.open(project.clickLink, "_blank")
              }
              className={`font-bold mb-5 text-lg md:text-xl text-blue-500 dark:text-blue-400 w-fit ${
                project.clickLink ? "cursor-pointer" : ""
              } transition-colors duration-500`}
            >
              {project.title}
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  onClick={() =>
                    project.clickLink &&
                    window.open(project.clickLink, "_blank")
                  }
                  className={project.clickLink ? "cursor-pointer" : ""}
                  src={project.imgSrc || "/images/project-images/NoImage.png"}
                  layout="fill"
                  objectFit="contain"
                  alt={project.title}
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base text-gray-800 dark:text-gray-200 transition-colors duration-500">
                  {project.description}
                </p>
                <cite className="inline-flex items-center mt-8 not-italic">
                  <span className="hidden w-6 h- bg-gray-400 dark:bg-gray-500 sm:inline-block transition-colors duration-500"></span>
                  <p className="text-xs md:text-base text-gray-500 dark:text-gray-400 sm:ml-3 transition-colors duration-500">
                    {project.techStack}
                  </p>
                </cite>
                {project.linkInGitHub && (
                  <div className="flex pt-8 space-x-4 justify-between">
                    <div>
                      <a
                        href={project.linkInGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        <FiGithub size="30" />
                      </a>
                    </div>
                    <div>
                      <a
                        href={project.linkInGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        View Project <ArrowRight size={20} />
                      </a>
                    </div>
                  </div>
                )}
              </blockquote>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
