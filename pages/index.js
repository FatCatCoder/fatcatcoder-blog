import Head from 'next/head'
import siteConfig from '../config/siteConfig'
import useSWR from 'swr'
import { genSlug } from '../lib/utils'
import { useRef , useEffect, useLayoutEffect} from 'react'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import gsap from 'gsap'
import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home({ posts }) {
  const refs = useRef([]);

  useLayoutEffect(()=> {
    // iterate through the letters collection
    refs?.current?.map((element, indexer) => {
      gsap.to(element, {
        y: 20,
        delay: indexer * .2,
        duration: .5, 
        repeat: 3,
        yoyo: true,
        yoyoEase: true,
        ease: "sine.inOut"
      })
    })
  }, [refs])

  const splitText = (text) => {
    return [...text].map(x => <span ref={(ref) => refs.current.push(ref)}>{x}</span>)
  }
  
  return (
    <>
    <div class="container bg-white dark:bg-gray-800 mx-auto my-8 px-16">
      <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div class="container mx-auto px-6 flex relative py-16">
              <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                  <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                  </span>
                  <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-inline leading-none dark:text-white text-gray-800">
                       {splitText("FATCAT")}
                  </h1>
                  <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-inline leading-none dark:text-white text-gray-800">
                       {splitText("CODER")}
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

              <div class="w-1/2 mx-auto invisible md:visible">
                <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                  <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                    <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                    </div>
                    <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                    </div>
                    <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                    </div>
                    <div class="mx-auto pr-16" id="terminaltitle">
                      <p class="text-center text-sm">Terminal</p>
                    </div>

                  </div>
                  <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
                    <p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
                    <p class="pb-1">FatCatAdmin:DevProjects fatcatadmin$ docker ps</p>
                  </div>
                </div> 
              </div>

              {posts.filter(x => x.frontmatter.featured == true).map(y => (
                <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <a href={"/blog/" + y.slug}>
                        <img class="rounded-t-lg" src="https://fatcatart.com/wp-content/gallery/dutch-still-life/cache/Heda-Still-Life-with-a-Lobster-cat.jpg-nggid03161-ngg0dyn-714x800x100-00f0w010c010r110f110r010t010.jpg"  alt=""/>
                      </a>
                      <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{y.frontmatter.title}</h5>
                        <p class="text-gray-700 text-base mb-4">
                          {y.frontmatter.description}
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
      </div>


      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Recent Posts</h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
      
      <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">July 19, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">New trends in Tech</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
      

      
      <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">April 07, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">Working with legacy stacks</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
      

      
      <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">March 15, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">10 best smartphones for devs</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
      

      
      <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">January 27, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">8 High performance Notebooks</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
      
    </div>
  </div>
</div>


      {posts.map((x,y) => (
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href={`/blog/${x.slug}`} class="w-full block h-full">
                <img alt="img" src={x?.frontmatter?.img} class="max-h-40 w-full object-cover"/>
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-indigo-500 text-md font-medium">
                    </p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {x?.frontmatter?.title}
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                        {x?.frontmatter?.description}
                    </p>
                </div>
            </a>
        </div>
      ))}
      </div>
    </>
  )
}

  export async function getStaticProps() {
    const dirname = "content";
    // Get files from the posts dir
    const files = fs.readdirSync(path.join(dirname))
    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
      const slug = filename.endsWith(".md")? filename.replace('.md', ''): filename.replace('.mdx', '') // Create slug
      // Get frontmatter
      const markdownWithMeta = fs.readFileSync(
        path.join(dirname, filename),
        'utf-8'
      )
    
      const { data: frontmatter } = matter(markdownWithMeta)

      return {
        slug,
        frontmatter,
      }
    })
  
    return {
      props: {
        posts: posts,
      },
    }
  }
