import React from 'react'
import Link from 'next/link'

export default function BlogCard({img, slug, title, desc, created, updated, tags}) {
  return (
    <div className="blog-post m-4 flex flex-col bg-white dark:bg-gray-900 dark:shadow-2xl shadow-lg rounded-lg overflow-hidden">
                <Link href={slug} >
                  <a className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                  <img src={img? img : "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                  </a>
                </Link>

                <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                    <Link href={slug}><a className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{title}</a></Link>
                </h2>

                <p className="text-gray-500 mb-8">{desc}</p>

                <div className="flex justify-between items-end mt-auto">
                    <div className="flex items-center gap-2">
                    <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                        <img src={"ccavatar.png"} loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
                    </div>

                    <div>
                        <span className="block text-indigo-500">Christian Claudeaux</span>
                        <p className="block text-gray-400 text-sm">{new Date(updated).toLocaleString()}</p>
                        {/* <p className="block text-gray-400 text-sm">updated: {new Date(updated).toLocaleString()}</p>
                        <p className="block text-gray-400 text-sm">created: {new Date(created).toLocaleString()}</p> */}
                    </div>
                    </div>

                    <div className='flex'>{tags.map(tag => (<span className="text-gray-500 text-sm border rounded px-2 py-1">{tag}</span>))}</div>
                </div>
                </div>
            </div>
  )
}
