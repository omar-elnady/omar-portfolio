import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
  ];
  const platformLinks = [
    {
      path: "https://github.com/omar-elnady",
      platform: "Github",
      icon: <BsGithub size="2rem" />,
    },
    {
      path: "https://www.facebook.com/omarahmedelnadey",
      platform: "Facebook",
      icon: <FaFacebookSquare size="2rem" />,
    },
    {
      path: "https://www.linkedin.com/in/omar-ahmed-531654227/",
      platform: "LinkedIn",
      icon: <BsLinkedin size="2rem" />,
    },
  ];

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed z-20 bg-white w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full ">
            <div className="flex items-center sm:mx-10 md:mx-10 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  <Link href="/">
                    <a className="text-2xl pl-8 sm:pl-0">
                      Omar<span className="text-blue-500"> El-Nady</span>
                    </a>
                  </Link>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-10">
                  {links.map((link, index) => (
                    <h1
                      key={index}
                      className={
                        router.pathname == link.path
                          ? "text-blue-500"
                          : "cursor-pointer hover:text-blue-500"
                      }
                    >
                      <Link href={link.path}>
                        <a className="font-semibold">{link.name}</a>
                      </Link>
                    </h1>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center flex-shrink-0 md:block">
                <div className="flex space-x-4">
                  {platformLinks.map((link, index) => (
                    <div key={index}>
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block hover:text-blue-500 ease-in duration-200 "
                      >
                        {link.icon}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div onClick={handleMobileNav} className=" mr-14 md:hidden">
              <AiOutlineMenu className="cursor-pointer" size="2rem" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className={
              isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
            }
          >
            <div
              className={
                isOpen
                  ? "fixed left-0 top-0 w-full sm:w[40%] md:w-[30%] h-screen bg-culturedWhite p-10 ease-in duration-300"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
              }
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <div
                    onClick={handleMobileNav}
                    className="rounded-lg hover:bg-blue-500 hover:text-white
                                        ease-in duration-200 shadow-lg shadow-gray-400 p-3 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-4 pt-4 mt-10">
                  {links.map((link, index) => (
                    <h1
                      key={index}
                      className={
                        router.pathname == link.path
                          ? "text-blue-500"
                          : "cursor-pointer hover:text-blue-500"
                      }
                    >
                      <Link href={link.path}>
                        <a className="font-semibold" onClick={handleMobileNav}>{link.name}</a>
                      </Link>
                    </h1>
                  ))}
                </div>
                <div className="space-x-4 pt-20">
                  <div className="flex space-x-4">
                    {platformLinks.map((link, index) => (
                      <div
                        key={index}
                        className="rounded-lg hover:bg-blue-500 hover:text-white
                          ease-in duration-200 shadow-lg shadow-gray-400 p-3 cursor-pointer"
                      >
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
