import React from "react";
import {
  Mail,
  Linkedin,
  Phone,
  MessageSquare,
  Facebook,
  GithubIcon,
} from "lucide-react";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "omarahmedelnadey@gmail.com",
      href: "mailto:omarahmedelnadey@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/omarelnadey",
      href: "https://linkedin.com/in/omarelnadey",
    },
    {
      icon: <GithubIcon className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/omar-elnady",
      href: "https://github.com/omar-elnady",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
      value: "facebook.com/omarahmedelnadey",
      href: "https://www.facebook.com/omarahmedelnadey",
    },
  ];

  return (
    <section className="h-screen pt-32 px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
          Let’s Build Something Together
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          I’m always happy to discuss new ideas, solve problems, or collaborate
          on interesting projects. Feel free to reach out anytime — I’d love to
          hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="flex flex-col items-center p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow bg-gray-100 dark:bg-gray-800"
              target={method.href?.includes("http") ? "_blank" : undefined}
              rel={
                method.href?.includes("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <div className="bg-blue-100 dark:bg-white p-3 rounded-full mb-4">
                {method.icon}
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                {method.label}
              </span>
              <span className="text-gray-800 dark:text-gray-100 font-medium text-center">
                {method.value}
              </span>
            </a>
          ))}
        </div>

        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/201013341863"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300"
            aria-label="Message me on WhatsApp"
          >
            <FaWhatsapp className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
