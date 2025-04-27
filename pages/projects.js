import { FiGithub } from "react-icons/fi";
// import {HiOutlineExternalLink} from 'react-icons/hi'
import Image from "next/image";
import Head from "next/head";

const projects = () => {
  const projects = [
    {
      imgSrc: "",
      title: "Warhouse Management",
      description:
        "It is a program to manage one or more stores at the same time and easy to use for a comfortable user experience . There is adding products, modifying, deleting, knowing the products that have been purchased and sold, retrieving the last invoices that have been sold, exchange and addition permissions",
      techStack: "ReactJs , Shadcn, Tailwind, CSS, Nodejs, ExpressJs , MongoDB",
      linkInGitHub: "",
    },
    {
      imgSrc: "/images/project-images/Courses.png",
      title: "Learning Management System",
      description:
        "It is a platform designed to manage online learning experiences easily and efficiently. It supports creating courses, enrolling students, tracking progress, managing assignments and quizzes, and providing a smooth and user-friendly experience for both instructors and learners. It also allows monitoring course performance, managing certifications, and delivering educational content in an organized and interactive way.",
      techStack:
        "NextJs , Shadcn, Redux ,  Tailwind, Nodejs, ExpressJs , MongoDB , Multer , Cloudinary",
      linkInGitHub:
        "https://github.com/omar-elnady/Front-Learning-mangment-System",
      clickLink: "https://lms-omar.vercel.app/",
    },
  ];
  return (
    <div className="h-screen mx-5 sm:mx-auto pt-32">
      <Head>
        <title>Projects | Omar Ahmed</title>
      </Head>
      <h1 className="font-bold text-3xl text-center"></h1>
      <div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-20">
        {projects.map((project, index) => (
          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl hover:-translate-y-5 ease-out transition-all duration-300">
            <h1
              onClick={() => window.open(project.clickLink, "_blank")}
              className="font-bold text-lg md:text-xl text-blue-500  w-fit cursor-pointer"
            >
              {project.title}
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  onClick={() => window.open(project.clickLink, "_blank")}
                  className="cursor-pointer"
                  src={project.imgSrc || "/images/project-images/NoImage.png"}
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">{project.description}</p>
                <cite className="inline-flex items-center mt-8 not-italic">
                  <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                  <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                    {project.techStack}
                  </p>
                </cite>
                <div className="flex pt-8 space-x-4">
                  <div>
                    <a
                      href={project.linkInGitHub}
                      target="_blank"
                      rel="noopner noreferrer"
                    >
                      <FiGithub size="30px" />
                    </a>
                  </div>
                </div>
              </blockquote>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default projects;
