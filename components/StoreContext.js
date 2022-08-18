import { useState, createContext} from 'react'

export const Store = { isDarkMode: false, setIsDarkMode: (bool) => {} };
export const StoreContext = createContext(Store);