import React from "react";
import { Mail, Linkedin, Facebook, GithubIcon } from "lucide-react";
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
    <div className="min-h-screen pt-24 w-full bg-white dark:bg-gray-900 transition-colors duration-500 pb-20">
      <section className=" ">
        <div className="flex flex-col items-center justify-center mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Let’s Build Something Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 w-3/4 text-center">
            Interested in working together? Have a question about my services?
            Feel free to reach out, and I'll get back to you as soon as
            possible.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center justify-center ">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="flex flex-col items-center p-6 rounded-lg border border-gray-100 
                       dark:border-gray-700 bg-gray-100 dark:bg-gray-800
                         shadow-sm hover:shadow-md dark:shadow-gray-900 
                       dark:hover:shadow-blue-500/20 
                      transition-all duration-300"
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
