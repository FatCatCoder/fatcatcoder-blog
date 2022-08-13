import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { CopyBlock } from "react-code-blocks";

import Quote  from '../components/bits/Quote'
import Quoteblock  from '../components/bits/Quoteblock'
import ProfileCard from "../components/bits/ProfileCard"
import SyntaxHighlighter from './SyntaxHighlighter';


const components = {
  Head,
  Quote: Quote,
  Quoteblock: Quoteblock,
  ProfileCard: ProfileCard,
  CopyBlock: CopyBlock,
  code: SyntaxHighlighter
}

export default function MdxPage({ children, source, frontMatter }) {
  return (
    <article className="prose mx-auto p-6 min-w-[45vw] text-black dark:text-gray-200">
      <header>
        <div className="mb-6">
          <h1 className="text-black dark:text-gray-200">{frontMatter.title}</h1>
          {frontMatter.author && (
            <div className="-mt-6 text-black dark:text-gray-200"><p className="opacity-60 pl-1">{frontMatter.author}</p></div>
          )}
          {frontMatter.description && (
            <p className="description text-black dark:text-gray-200">{frontMatter.description}</p>
          )}
        </div>
      </header>
      <section>
        <MDXRemote {...source} components={{...components}} />
      </section>
    </article>
  )
}
