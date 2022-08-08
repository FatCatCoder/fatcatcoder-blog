import { useState, useEffect, useRef, React, useLayoutEffect, useMemo } from 'react'
import gsap  from 'gsap'
import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import FadeInOut from '../../components/FadeInOut';
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function index({posts}) {
    console.log(posts);

    const createElements = (items) => {
        let elements = [];
        items.forEach((x, y) => {
          elements.push(
            <div key={`${y}-${Math.floor(Math.random() * 50)}`} ref={(ref) => refs.current.push(ref)}  className="blog-post m-4 flex flex-col bg-white shadow-lg border rounded-lg overflow-hidden">
                <Link href={`/blog/${x.slug}`} >
                  <a className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                  <img src={x.frontmatter.img? x.frontmatter.img : "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                  </a>
                </Link>

                <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                    <Link href={`/blog/${x.slug}`}><a className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{x.frontmatter.title}</a></Link>
                </h2>

                <p className="text-gray-500 mb-8">{x.frontmatter.description}</p>

                <div className="flex justify-between items-end mt-auto">
                    <div className="flex items-center gap-2">
                    <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
                    </div>

                    <div>
                        <span className="block text-indigo-500">Mike Lane</span>
                        <span className="block text-gray-400 text-sm">updated: {new Date(x.frontmatter.updated).toLocaleString()}</span>
                        <p className="block text-gray-400 text-sm">created: {new Date(x.frontmatter.created).toLocaleString()}</p>
                    </div>
                    </div>

                    {x?.frontmatter?.tags?.map(tag => (<span className="text-gray-500 text-sm border rounded px-2 py-1">{tag}</span>))}
                </div>
                </div>
            </div>
          );
        }); 

        return elements;
      };

      const [blogs, setBlogs] = useState(createElements(posts));
      const [query, setQuery] = useState("")
      const refs = useRef([]);
      
      const search = (e) => {
        let text = e.target.value

        refs.current = [];


        let filteredPosts = posts.filter((x) => {
          if(x.frontmatter.title.toLowerCase().includes(text.toLowerCase()))
            return true
            else return false
        })

        setQuery(text)
        setBlogs(createElements(filteredPosts));
      }
    

    useLayoutEffect(()=> {
        // you can now iterate through your collection
        refs?.current?.map((element, indexer) => {
            gsap.fromTo(element, {opacity: 0, x: indexer % 2 == 0? -500 : 500}, { 
                scrollTrigger: {
                  id: indexer,
                  trigger: element,
                  start: "top bottom",
                  end: "+=500",
                  scrub: 1,
                  markers: true
                },
                x: 0,
                duration: 1,
                opacity: 1, // also tested without this line
              });
        })
      }, [refs, query])

  return (
    <>
    <FadeInOut x={-20} delay={2}>
    <div class="relative m-2 shadow-xl">
      <input onChange={search} value={query} type="text" id="rounded-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search"/>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
        {blogs}
    </div>
    </FadeInOut>
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