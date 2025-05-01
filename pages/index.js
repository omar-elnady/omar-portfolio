import HomePage from "../components/Home";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="lg:px-60 md:px-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500 flex flex-col items-center">
        <Head>
          <meta
            name="google-site-verification"
            content="VJs2G3ynvYQ1KG06ciOhdPdklC1gIUEkJ2KcplrnfWU"
          />
          <meta
            name="description"
            content="Omar Ahmed portfolio. I am web developer, data analyst and web appliaction. OmarAhmed, Omarahmed, Omar Ahmed"
          />
          <title>Omar Ahmed</title>
        </Head>

        <section id="home" className="w-full min-h-screen">
          <HomePage />
        </section>
        <section id="project" className="w-full min-h-screen">
          <About />
        </section>
        <section id="projects" className="w-full min-h-screen">
          <Projects />
        </section>
      </div>
      <Footer />
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
    </>
  );
}
