import Head from 'next/head'
import siteConfig from '../config/siteConfig'
import useSWR from 'swr'
import { genSlug } from '../lib/utils'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
    <div class="container bg-white dark:bg-gray-800 mx-auto px-16">
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
              {posts.filter(x => x.frontmatter.featured == true).map(y => (
                <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <a href="#!">
                        <img class="rounded-t-lg" src="https://fatcatart.com/wp-content/gallery/dutch-still-life/cache/Heda-Still-Life-with-a-Lobster-cat.jpg-nggid03161-ngg0dyn-714x800x100-00f0w010c010r110f110r010t010.jpg"  alt=""/>
                        {/* src={y.frontmatter.img} */}
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
      const slug = filename.replace('.md', '') // Create slug
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
