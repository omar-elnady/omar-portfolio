import Link from 'next/link'
import Head from 'next/head'

const Error404 = () => {
    return (
        <section className='flex items-center text-black dark:text-white bg-white dark:bg-gray-900 transition-colors duration-500'>
            <Head>
                <title>404 | Omar Ahmed</title>
            </Head>

            <div className='h-screen container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-800 dark:text-gray-200 transition-colors duration-500'>
                        <span className='sr-only'>Error</span>404
                    </h2>
                    <p className='text-2xl text-black dark:text-white font-semibold md:text-3xl transition-colors duration-500'>
                        Sorry, we couldn&#39;t find this page.
                    </p>
                    <p className='mt-4 mb-8 text-gray-600 dark:text-gray-400 transition-colors duration-500'>
                        Don&#39;t worry you can find a lot more things on this website!
                    </p>
                    <Link href='/'>
                        <a
                            rel='noopener noreferrer'
                            className='inline-flex w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow sm:w-auto hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors duration-300'
                        >
                            Back to homepage
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error404