import React, {useEffect} from 'react'
import FadeInOut from '../../components/FadeInOut'
import ProfileCard from "../../components/bits/ProfileCard"

import { SiBlazor, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";


export default function About() {
  return (
    <>
    <FadeInOut x={-20} delay={2}>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img width={350} height={350} src="sirfatcat.jpg" class="mb-10 object-center rounded-full" alt="hero" />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About</h1>
          <blockquote class="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">
            “A fullstack developer looking to give back to the community.”
          </blockquote>
          <p class="mb-8 leading-relaxed">
          By sharing what I've learned, I hope you too can continue to succeed. Constantly growing and tackling new challenges is what keeps me going.
          Using technology as the medium to achieve the beauty of creativity within productive constraints. Often working the the web development space
          using cutting edge front frameworks like React.js, Next.js & C#'s Blazor, powered by behemoths such as .Net Core, Node.js and SQL RDMS
          </p>
          
          <div class="max-w-7xl mx-auto">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                </svg>
                <div class="space-y-2">
                  {/* <p class="text-slate-800">Like the content? Find me on github, twitter, and my portfolio website</p>
                  <div>
                    <a class="text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">
                      Christian Claudeaux →
                    </a>
                  </div> */}
                  <div class="bg-transparent py-6 sm:py-8 lg:py-12">
              <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="flex flex-col lg:flex-row lg:justify-between items-center bg-gray-100 rounded-lg p-4 sm:p-8">
                  <div class="mb-4 sm:mb-8 lg:mb-0">
                    <h2 class="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left">Looking for something?</h2>
                    <p class="text-gray-500 text-center lg:text-left">Email me a request @here</p>
                  </div>

                  <div class="flex flex-col items-center lg:items-end">
                    <form class="w-full max-w-md flex gap-2 mb-3">
                      <input placeholder="Email" class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />

                      <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Send</button>
                    </form>

                    <p class="text-gray-400 text-xs text-center lg:text-right">Let's get in touch</p>
                  </div>
                </div>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>

            {/* <div className='myCircle'><div className='rotatingIcon'>TEST</div></div> */}

            <ProfileCard />

            {/* <div class="bg-transparent py-6 sm:py-8 lg:py-12">
              <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="flex flex-col lg:flex-row lg:justify-between items-center bg-gray-100 rounded-lg p-4 sm:p-8">
                  <div class="mb-4 sm:mb-8 lg:mb-0">
                    <h2 class="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left">Looking for something?</h2>
                    <p class="text-gray-500 text-center lg:text-left">Email me a request @here</p>
                  </div>

                  <div class="flex flex-col items-center lg:items-end">
                    <form class="w-full max-w-md flex gap-2 mb-3">
                      <input placeholder="Email" class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />

                      <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Send</button>
                    </form>

                    <p class="text-gray-400 text-xs text-center lg:text-right">Let's get in touch</p>
                  </div>
                </div>
              </div>
            </div> */}

        </div>
      </div>
    </section>
    </FadeInOut>
    </>
  )
}
