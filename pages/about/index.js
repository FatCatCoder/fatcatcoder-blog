import React from 'react'

export default function About() {
  return (
    <>
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
          <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
            <li>C# w/ Dotnet Core 6+</li>
            <li>Javascript / Typescript</li>
            <li>Node.js</li>
            <li>React / Next.js</li>
            <li>Blazor Web Assembly</li>
            <li>Devops with scripting langs (powershell, bash)</li>
          </ul>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
