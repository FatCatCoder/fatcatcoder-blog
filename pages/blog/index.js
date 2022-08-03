import { useEffect, useRef, React, useLayoutEffect, useMemo } from 'react'
import gsap  from 'gsap'
import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function index({posts}) {
    const el = useRef();
    const q = gsap.utils.selector(el);
    
    // console.log(posts);

    const createElements = () => {
        let elements = [];
        posts.forEach((x, y) => {
          elements.push(
            <div key={`${y}-${Math.floor(Math.random() * 50)}`} ref={(ref) => refs.current.push(ref)}  class="blog-post flex flex-col bg-white shadow-lg border rounded-lg overflow-hidden">
                <a href={`/blog/${x.slug}`} class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                <img src={x.frontmatter.img? x.frontmatter.img : "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"} loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                </a>

                <div class="flex flex-col flex-1 p-4 sm:p-6">
                <h2 class="text-gray-800 text-lg font-semibold mb-2">
                    <a href={`/blog/${x.slug}`} class="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{x.frontmatter.title}</a>
                </h2>

                <p class="text-gray-500 mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

                <div class="flex justify-between items-end mt-auto">
                    <div class="flex items-center gap-2">
                    <div class="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" class="w-full h-full object-cover object-center" />
                    </div>

                    <div>
                        <span class="block text-indigo-500">Mike Lane</span>
                        <span class="block text-gray-400 text-sm">July 19, 2021</span>
                    </div>
                    </div>

                    <span class="text-gray-500 text-sm border rounded px-2 py-1">Article</span>
                </div>
                </div>
            </div>
          );
        }); 

        return elements;
      };

    const arr = createElements();
    const refs = useRef([]);
    

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
      },[])
      // [refs, arr]


      // let postsRef = useRef();


      // let onMouseOver = (el) => {
      //   gsap.to(el.target, { duration: 0.5, scale: 1.3, ease: "power4" });
      // };
    
      // let onMouseOut = (el) => {
      //   gsap.to(el.target, { duration: 0.5, scale: 1, ease: "power4" });
      // };
    
      // useEffect(() => {
      //   postsRef.current = gsap.utils.toArray(".blog-post");
      //   gsap.set(postsRef.current, { autoAlpha: 0, scale: 0 });
      //   setTimeout(() => {
      //     gsap.to(postsRef.current, {
      //       autoAlpha: 1,
      //       scale: 1,
      //       delay: 5,
      //       scrollTrigger: {
      //         trigger: ".blog-post",
      //         scrub: 1,
      //         start: "top top",
      //         markers: true,
      //         end: "+=100%"
      //       }
      //     });
      //   });
      // }, []);

  return (
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
        {arr}
    </div>
  )
}


export async function getStaticProps() {
  const dirname = "content";
  // Get files from the posts dir
  const files = fs.readdirSync(path.join(dirname))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

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