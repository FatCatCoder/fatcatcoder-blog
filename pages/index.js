import Head from 'next/head'

import siteConfig from '../config/siteConfig'

export default function Home() {
  return (
    <>
      {/* <div className="text-center bg-white">
        <h1 className="text-6xl bg-white font-bold mt-24 mb-8">
          <a className="text-blue-600 bg-white" href="https://github.com/datopian/nextjs-tailwind-mdx">
            {siteConfig.title}
            <span className="inline-flex my-auto bg-white">

            </span>
          </a>
        </h1>
        <h2 className="text-4xl">
          {siteConfig.tagline}
        </h2>
      </div> */}

      
      <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div class="container mx-auto px-6 flex relative py-16">
              <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                  <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                  </span>
                  <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                      FATCAT
                      <span class="text-5xl sm:text-7xl">
                          CODER
                      </span>
                  </h1>
                  <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                      Coding - Composing - Coffee 
                  </p>
                  <div class="flex mt-8">
                      <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                          Start Reading
                      </a>
                      <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                          About Me
                      </a>
                  </div>
              </div>
              <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                  <img src="https://images.unsplash.com/photo-1618489517022-5c31fa91d017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="max-w-xs md:max-w-sm m-auto"/>
              </div>
          </div>
      </div>


      {/* <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header class="flex justify-between items-center py-4 md:py-8 mb-4">
            <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
            
            </a>
          </header>

          <section class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
            <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center absolute inset-0" />

            <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>

            <div class="sm:max-w-xl flex flex-col items-center relative p-4">
              <p class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">Very proud to introduce</p>
              <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Revolutionary way to build the web</h1>

              <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                <a href="#" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start now</a>

                <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
              </div>
            </div>
          </section>
        </div>
      </div> */}
    </>
  )
}
