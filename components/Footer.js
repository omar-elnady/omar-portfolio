import React from "react";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/omarelnadey",
      label: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/omar-elnady",
      label: "GitHub",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:omarahmedelnadey@gmail.com",
      label: "Email",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://facebook.com/omarahmedelnadey",
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-gray-800  text-white py-8 w-full">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright Notice */}
        <div className="text-gray-400 text-sm">
          &copy; {currentYear} Omar Ahmed
        </div>
      </div>
    </footer>
  );
};

export default Footer;
