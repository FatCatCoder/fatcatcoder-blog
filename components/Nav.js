import { Fragment, useState, useContext, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

import siteConfig from '../config/siteConfig.js'
import navLinks from '../config/navLinks.js'
import nightwind from "nightwind/helper"
import Toggle from './bits/Toggle'
import DarkToggle from './DarkToggle.js'
import {imgPathFormatter} from "../lib/utils"

import {Store, StoreContext} from '../components/StoreContext'


export default function Nav() {
  const context = useContext(StoreContext);

  return (
    <>
    <Disclosure as="nav" className="shadow bg-white dark:bg-gray-900 text-black">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>{siteConfig.title}</a>
                  </Link>
                  <img src={imgPathFormatter("/fatcat-real.png")} width={30} height={30} className="max-w-xs md:max-w-sm m-auto" 
                       style={{filter: context.isDarkMode? "invert(100%)": ""}} />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navLinks.map((item) => (
                    <Link href={item.href}>
                      <a
                        key={item.name}
                        href={item.href}
                        className={item.current ?
                          'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' :
                          'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        }
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      </Link>
                    ))}

                  {/* <Toggle className="my-auto" onToggle={toggleDarkMode} /> */}
                  <DarkToggle />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navLinks.map((item) => (
                <Link href={item.href}>
                  <a
                    key={item.name}
                    href={item.href}
                    className={item.current ?
                      'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium' :
                      'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    }
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                  </Link>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}
