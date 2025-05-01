import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsMoon, BsSun } from "react-icons/bs";
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (storedTheme === "dark") {
        setIsDark(true);
      } else if (storedTheme === "light") {
        setIsDark(false);
      } else {
        setIsDark(prefersDark);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDark]);

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed z-20 w-full bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="w-full transition-colors duration-500">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center sm:mx-10 md:mx-10 justify-between w-full transition-colors duration-500">
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-bold text-xl cursor-pointer text-black dark:text-white transition-colors duration-500">
                  <Link href="/">
                    <a className="text-2xl pl-8 sm:pl-0">
                      Omar<span className="text-blue-500"> El-Nady</span>
                    </a>
                  </Link>
                </h1>
              </div>

              {/* NAVBAR LINKS ON DESKTOP */}
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-10 transition-colors duration-500">
                  {links.map((link, index) => (
                    <h1
                      key={index}
                      className={`${
                        router.pathname == link.path
                          ? "text-blue-500"
                          : "cursor-pointer hover:text-blue-500 text-black dark:text-white"
                      } transition-colors duration-500`}
                    >
                      <Link href={link.path}>
                        <a className="font-semibold">{link.name}</a>
                      </Link>
                    </h1>
                  ))}
                </div>
              </div>

              {/* DARK MODE TOGGLE AND SOCIAL ICONS ON DESKTOP */}
              <div className="justify-center items-center flex-shrink-0 hidden md:block">
                <div className="flex space-x-4 transition-colors duration-500">
                  {platformLinks.map((link, index) => (
                    <div key={index}>
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block hover:text-blue-500 text-black dark:text-white transition-colors duration-500"
                      >
                        {link.icon}
                      </a>
                    </div>
                  ))}
                  <div
                    onClick={() => setIsDark(!isDark)}
                    className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-500"
                  >
                    <div className="absolute left-0 flex justify-center items-center w-1/2">
                      <BsSun size={18} className="text-yellow-500" />
                    </div>

                    <div
                      className={`bg-white w-6 h-6 rounded-full z-50 shadow-md transform transition duration-300 ${
                        isDark ? "translate-x-8" : "translate-x-0"
                      }`}
                    />

                    <div className="absolute right-0 flex justify-center items-center w-1/2">
                      <BsMoon size={18} className="text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HAMBURGER MENU ON MOBILE AND SWITCH TO DARK MODE */}
            <div
              onClick={handleMobileNav}
              className="mr-14 md:hidden flex items-center gap-4"
            >
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-3 rounded-lg shadow-md cursor-pointer bg-blue-500 text-white"
              >
                {isDark ? <BsSun /> : <BsMoon />}
              </button>
              <AiOutlineMenu
                className="cursor-pointer text-black dark:text-white"
                size="2rem"
              />
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <div
            className={
              isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
            }
          >
            <div
              className={`${
                isOpen
                  ? "fixed left-0 top-0 w-full sm:w-[40%] md:w-[30%] h-screen bg-gray-800 p-10 ease-in duration-300"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
              } transition-colors duration-500`}
            >
              <div className="flex w-full items-center justify-between">
                <div
                  onClick={handleMobileNav}
                  className="bg-white rounded-lg hover:bg-blue-500 hover:text-white ease-in duration-200 shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-4 pt-4 mt-10 transition-colors duration-500">
                  {links.map((link, index) => (
                    <h1
                      key={index}
                      className={`${
                        router.pathname == link.path
                          ? "text-blue-500"
                          : "cursor-pointer hover:text-blue-500 text-white"
                      } transition-colors duration-500`}
                    >
                      <Link href={link.path}>
                        <a className="font-semibold" onClick={handleMobileNav}>
                          {link.name}
                        </a>
                      </Link>
                    </h1>
                  ))}
                </div>
                <div className="space-x-4 pt-20">
                  <div className="flex space-x-4">
                    {platformLinks.map((link, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg hover:bg-blue-500 hover:text-white ease-in duration-200 shadow-lg shadow-gray-400 p-3 cursor-pointer transition-colors duration-500"
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
