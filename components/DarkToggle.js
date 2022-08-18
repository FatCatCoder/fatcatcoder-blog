import {useState, useEffect, useContext} from 'react'
import nightwind from "nightwind/helper"
import Toggle from './bits/Toggle'
import { Store, StoreContext } from './StoreContext';

export default function DarkToggle() {
    const {isDarkMode, setIsDarkMode} = useContext(StoreContext);

    useEffect(() => {
      if(typeof(window) != undefined){
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          window.document.documentElement.classList.add('dark');
          setIsDarkMode(true)
        } 
        else {
          window.document.documentElement.classList.remove('dark')
          setIsDarkMode(false)
        }
      }
    }, [])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        nightwind.toggle()
    }
    return (
        <Toggle className="my-auto" onToggle={toggleDarkMode} />
    )
}
