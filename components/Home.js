import { motion } from 'framer-motion'
import Link from 'next/link'

const Home = () => {
    return (

        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            // Add background color that adapts to the theme
            className='bg-white dark:bg-gray-900 transition-colors duration-500'
        >
            {/* Ensure the container takes full height and centers content */}
            <div className='flex px-4 md:py-32 mx-auto h-screen items-center'>
                <div className='text-center mx-auto'>
                    {/* Name: Black text in light mode, White text in dark mode */}
                    <h1 className='text-4xl text-black dark:text-white font-extrabold md:text-6xl transition-colors duration-500'>
                        Omar Ahmed
                    </h1>
                    {/* Title: Blue text, slightly lighter blue in dark mode */}
                    <h1 className='text-4xl text-blue-600 dark:text-blue-400 font-extrabold md:text-6xl transition-colors duration-500'>
                        FullStack Developer
                    </h1>
                    {/* Subtitle: Black text in light mode, Lighter gray text in dark mode */}
                    <p className='text-sm mt-4 sm:leading-relaxed md:text-xl text-gray-700 dark:text-gray-300 transition-colors duration-500'>
                        MERN Stack (ReactJs - NodeJs )
                    </p>
                    <div className='flex flex-wrap justify-center gap-4 mt-8 grid-cols-2'>
                        {/* Buttons: Adjusted background, text, hover, active, and focus states for both themes */}
                        <Link href='/contact'>
                            <a
                                className='px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300'
                            >
                                Contact Me
                            </a>
                        </Link>
                        <Link href='/resume.pdf'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300'
                            >
                                Resume
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home

