import { useEffect, createContext} from 'react'

export const Store = {isDarkMode: false};
export const StoreContext = createContext(Store);