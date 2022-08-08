import React from 'react'
import FadeInOut from '../../components/FadeInOut'

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
            “Just a fat cat looking for a snack and some cash”
          </blockquote>
          <p class="mb-8 leading-relaxed">
            Haha, no. I'm really just a fullstack developer looking to give back to the community by sharing what I've learned.
          </p>

          <ul className="list-disc list-inside text-start text-gray-500 sm:text-lg mb-6 md:mb-8">
            <li>C# w/ Dotnet Core 6+</li>
            <li>Javascript / Typescript</li>
            <li>Node.js</li>
            <li>React / Next.js</li>
            <li>Blazor Web Assembly</li>
            <li>Devops with scripting langs (powershell, bash)</li>
          </ul>
          
            <div class="max-w-7xl mx-auto">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                  </svg>
                  <div class="space-y-2">
                    <p class="text-slate-800">Like the content? Find me on github, twitter, and my portfolio website</p>
                    <div>
                      <a class="text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">
                        Christian Claudeaux →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


        </div>
      </div>
    </section>
    </FadeInOut>
    </>
  )
}
