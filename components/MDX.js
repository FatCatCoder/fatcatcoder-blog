import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'


import { CopyBlock } from "react-code-blocks";
import Quoteblock  from '../components/bits/Quoteblock'
import ProfileCard from "../components/bits/ProfileCard"
import AnchorHeading from "../components/bits/AnchorHeading"
import SyntaxHighlighter from './SyntaxHighlighter';
import { useEffect, useLayoutEffect } from 'react';


const components = {
  Head,
  Quoteblock: Quoteblock,
  ProfileCard: ProfileCard,
  CopyBlock: CopyBlock,
  code: SyntaxHighlighter,
  AnchorHeading: AnchorHeading
}

export default function MdxPage({ children, source, frontMatter }) {
  useEffect(() => {
    if(window?.location?.hash?.length > 1){
      console.log(window.location.hash.substring(1));
      document.getElementById(window.location.hash.substring(1)).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }, [])
  return (
    <>
    <Head>
      <title>{frontMatter.title}</title>
    </Head>
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
          {frontMatter.description && (
            <p className="description text-[.65rem] text-gray-400 dark:text-gray-500">
              Created: {new Date(frontMatter.created).toLocaleString()} \
              Updated: {new Date(frontMatter.updated).toLocaleString()}
            </p>
          )}
        </div>
      </header>
      <section>
        <MDXRemote {...source} components={{...components}} />
      </section>
    </article>
    </>
  )
}
