import React, {useEffect, useState} from 'react'
import FadeInOut from '../../components/FadeInOut'
import ProfileCard from "../../components/bits/ProfileCard"

import { SiBlazor, SiNextdotjs } from "react-icons/si";
import { FaReact, FaCat, FaHeart } from "react-icons/fa";

import { Transition } from '@headlessui/react'


export default function About() {
  const [isShowing, setIsShowing] = useState(false)

  const addToast = () => { 
    setIsShowing((isShowing) => !isShowing); 
    setTimeout(() => setIsShowing((isShowing) => !isShowing), 2500); 
    navigator.clipboard.writeText("christianclaudeaux@gmail.com");
  }
  return (
    <>
    {/* Toast */}
    <div style={{position: "fixed", bottom: "0"}}>
          <Transition
          show={isShowing}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div class="flex w-96 shadow-lg rounded-lg">
              <div class="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              </div>
              <div class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                <div>Copied To Clipboard</div>
                {/* <button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                </button> */}
              </div>
            </div>
                </Transition>
        </div>

    <FadeInOut x={-20} delay={2}>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <a href="https://fatcatart.com/"><img style={{objectFit: "cover", borderRadius: "50%", height: 350, width: 350}} width={350} height={350} src="sirfatcat.jpg" class="mb-10" alt="hero" /></a>
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About</h1>
            <blockquote class="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">
              “Giving back to the community by sharing what I've learned so you too can continue to succeed.”
            </blockquote>
            <p class="mb-8 leading-relaxed">
            Using technology as the medium to achieve the beauty of creativity within productive constraints. Often working the the web development space
            using cutting edge front frameworks like React.js, Next.js & C#'s Blazor, powered by behemoths such as .Net Core, Node.js and SQL RDS. 
            Every now and again I'll pick up a new interest such as micro-controller programing with arduino, wood working, or hacking at my espresso machine.
            </p>
            
            <div class="max-w-6xl mx-auto">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative p-0 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div class="space-y-2 mx-auto">
                    <div class="bg-transparent py-8 sm:py-8 lg:py-8">
                      <div class="max-w-screen-2xl px-2 md:px-2 mx-auto">
                        <div class="flex flex-col lg:flex-row lg:justify-between items-center bg-gray-100 rounded-lg p-4 sm:p-8">
                          <div class="mb-4 sm:mb-8 lg:mb-0 lg:pb-4 lg:mr-2">
                            <h2 class="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left">Connect.</h2>
                            <p class="text-gray-500 text-center lg:text-left">Send me a message</p>
                          </div>

                          <div class="flex flex-col items-center lg:items-end">
                            <form class="w-full max-w-md flex gap-2 mb-3">
                              <a onClick={() => addToast()} class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Copy</a>
                              <a href="mailto:christianclaudeuax@gmail.com" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Email</a>
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
          
            {/* Attribute Footer */}
            <div className='my-2'>
              <small>
                made with <FaHeart style={{display: "inline"}} /> by Christian Claudeaux (The FatCatCoder <FaCat style={{display: "inline"}} /> )
              </small>
            </div>

            

            <ProfileCard />
          </div>
        </div>
      </section>
    </FadeInOut>
    </>
  )
}
