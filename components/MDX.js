import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { CopyBlock } from "react-code-blocks";

import Quote  from '../components/bits/Quote'


const components = {
  Head,
  Quote: Quote
}

export default function MdxPage({ children, source, frontMatter }) {
  return (
    <article className="prose mx-auto p-6 min-w-[45vw]">
      <header>
        <div className="mb-6">
          <h1>{frontMatter.title}</h1>
          {frontMatter.author && (
            <div className="-mt-6"><p className="opacity-60 pl-1">{frontMatter.author}</p></div>
          )}
          {frontMatter.description && (
            <p className="description">{frontMatter.description}</p>
          )}
        </div>
      </header>
      <section>
        <MDXRemote {...source} components={{...components}} />
      </section>
    </article>
  )
}
