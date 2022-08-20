import Head from 'next/head'
import siteConfig from '../config/siteConfig'
import useSWR from 'swr'
import { genSlug } from '../lib/utils'
import { useRef , useEffect, useLayoutEffect, useState} from 'react'
import Link from 'next/link'

import useIsomorphicLayoutEffect from '../components/hooks/useIsomorphicLayoutEffect'

import FadeInOut from '../components/FadeInOut'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import gsap from 'gsap'
import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home({ posts }) {
  const refs = useRef([]);
  const [isWaveRunning, setIsWaveRunning] = useState(false);

  useIsomorphicLayoutEffect(()=> {
    runWaveAnime();
  }, [refs])

  // iterate through the letters collection
  const runWaveAnime = () => {
    if(isWaveRunning) return;

    let refCount = refs.current.length - 1;

    // set animation lock to prevent "race conditions"
    setIsWaveRunning(true)

    refs?.current?.map((element, indexer) => {
      gsap.to(element, {
        yPercent: -20,
        delay: indexer * .2,
        duration: .35, 
        repeat: 1,
        yoyo: true,
        yoyoEase: true,
        ease: "sine.inOut",
        onComplete: () => {
          if(refCount === indexer){
            // reset animation lock
            setIsWaveRunning(false)
          }
        }
      })
    })
  }

  const splitText = (text) => {
    return [...text].map(x => <span ref={(ref) => {if(!refs.current.includes(ref) && ref != null) {refs.current = [...refs.current, ref]}}}>{x}</span>)
  }
  
  return (
    <>
    <FadeInOut x={-20} delay={2}>
    <div className="container bg-white dark:bg-gray-900 mx-auto my-8 px-16">
      <div className="bg-white dark:bg-gray-900 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
              <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                  <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                  </span>
                  <h1 onMouseOver={runWaveAnime} className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-inline leading-none dark:text-white text-gray-800">
                       {splitText("FATCAT")}
                  </h1>
                  <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-inline leading-none dark:text-white text-gray-800">
                       {splitText("CODER")}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                      Coding - Composing - Coffee 
                  </p>
                  <div className="flex mt-8">
                      <Link href="/blog">
                        <a className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Start Reading
                        </a>
                      </Link>
                      <Link href="/about">
                        <a className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                            About
                        </a>
                      </Link>
                  </div>
              </div>

              {/* Terminal */}
              <div className="w-1/2 mx-auto invisible lg:visible">
                <div className="w-10/12 xl:w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                  <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                    <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                    </div>
                    <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                    </div>
                    <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                    </div>
                    <div className="mx-auto pr-16" id="terminaltitle">
                      <p className="text-center text-sm">Terminal</p>
                    </div>

                  </div>
                  <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
                    <p className="pb-1">Last login: Wed Sep 25 09:11:04 on ttys001</p>
                    <p className="pb-1">FatCat@devprojects fatcat~$ docker ps</p>
                  </div>
                </div> 
              </div>
          </div>
      </div>
 
      {/* Recent Posts */}
      <div className="bg-white dark:bg-gray-900 py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Recent Posts</h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {posts.map((x, y) => (
              <Link key={x.slug} href={`/blog/${x.slug}`}>
                <a className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
                  <img src={x.frontmatter.img} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                  <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
                  <div className="relative p-4 mt-auto">
                    <span className="block text-gray-200 dark:text-gray-400 text-sm">{x.frontmatter.created}</span>
                    <h2 className="text-white dark:text-gray-200 text-xl font-semibold transition duration-100 mb-2">{x.frontmatter.title}</h2>
                    <span className="text-indigo-300 font-semibold">Read more</span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </FadeInOut >
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
