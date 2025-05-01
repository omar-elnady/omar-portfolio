import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsMoon, BsSun } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaArrowLeft, FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const platformLinks = [
    {
      path: "https://github.com/omar-elnady",
      platform: "Github",
      icon: <BsGithub size={32} />,
    },
    {
      path: "https://www.facebook.com/omarahmedelnadey",
      platform: "Facebook",
      icon: <FaFacebookSquare size={32} />,
    },
    {
      path: "https://www.linkedin.com/in/omar-ahmed-531654227/",
      platform: "LinkedIn",
      icon: <BsLinkedin size={32} />,
    },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className={`fixed z-20 w-full bg-white dark:bg-gray-900 transition-all duration-500
          ${
            isScrolled
              ? "border-b border-gray-200 dark:border-gray-700 shadow-lg"
              : "border-transparent"
          }`}
      >
        <div className="w-full transition-colors duration-500">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-4 md:mx-10 justify-between w-full transition-colors duration-500">
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-bold text-xl cursor-pointer text-black dark:text-white transition-colors duration-500">
                  {router.pathname === "/contact" ? (
                    <Link href="/">
                      <a className="flex items-center gap-2 text-xl hover:text-blue-500 ">
                        <FaArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                      </a>
                    </Link>
                  ) : (
                    <span className="text-2xl">
                      Omar<span className="text-blue-500"> El-Nady</span>
                    </span>
                  )}
                </h1>
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
            <div className="mr-4 md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-3 rounded-lg shadow-md cursor-pointer bg-blue-500 text-white"
              >
                {isDark ? <BsSun /> : <BsMoon />}
              </button>
              <AiOutlineMenu
                onClick={handleMobileNav}
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
              className={`fixed top-0 p-10 ease-in duration-300 h-screen bg-gray-800 dark:bg-gray-900 transition-all ${
                isOpen ? "left-0 w-full sm:w-[40%] md:w-[30%]" : "left-[-100%]"
              }`}
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
