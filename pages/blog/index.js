import { useState, useEffect, useRef, React, useLayoutEffect, useMemo } from 'react'
import gsap  from 'gsap'
import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import FadeInOut from '../../components/FadeInOut';
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import SelectInput from '../../components/bits/SelectInput';
import BlogCard from '../../components/bits/BlogCard';

export default function index({posts}) {
    const createElements = (items) => {
        let elements = [];
        items.forEach((x, y) => {
          elements.push(
            <BlogCard 
              key={`${y}-${Math.floor(Math.random() * 50)}`} 
              ref={(ref) => refs.current.push(ref)} 
              slug={`/blog/${x.slug}`}
              img={x.frontmatter.img}
              title={x.frontmatter.title}
              desc={x.frontmatter.description}
              created={x.frontmatter.created}
              updated={x.frontmatter.updated}
              tags={x.frontmatter.tags}
              />
          );
        }); 

        return elements;
      };

      const [selectedList, setSelectedList] = useState([]);
      const [blogs, setBlogs] = useState(createElements(posts));
      const [query, setQuery] = useState("")
      const refs = useRef([]);


      useEffect(() => {
        let filteredPosts = selectedList.length === 0? posts : posts.filter((x) => {
          if(x.frontmatter.tags.some(x => selectedList.includes(x)))
            return true
          else 
            return false
        })

        filteredPosts = query === ""? filteredPosts : filteredPosts.filter((x) => {
          if(x.frontmatter.title.toLowerCase().includes(query.toLowerCase()))
            return true
          else 
            return false
        })



        setBlogs(createElements(filteredPosts));
      }, [selectedList, query])
      
      const search = (e) => {
        let text = e.target.value
        setQuery(text)
        
        refs.current = [];
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
                opacity: 1,
              });
        })
      }, [refs, query])

  return (
    <>
    <FadeInOut x={-20} delay={2}>
    
      <div class="container py-8 mx-auto">
        {/* <div class="mb-10 md:mb-16">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Blog
          </h2>
          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Articles, tutorials, projects & other content...
          </p>
      </div> */}
        <div class="relative shadow-xl grid grid-cols-12">
          <input onChange={search} value={query} type="text"
          class="col-span-8 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search" />
          <SelectInput className="col-span-4" selectList={[...new Set(posts.flatMap(x => x.frontmatter.tags))]} getSelected={(x) => setSelectedList(x)} placeholder={"Select Tags"} />
        </div>
      </div>

      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
            {blogs}
        </div>
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