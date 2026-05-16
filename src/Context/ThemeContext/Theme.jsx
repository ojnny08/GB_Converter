import { Children, useState } from "react";
import { useContext, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState()
    const toggleTheme = () => setDarkMode(prev !=prev)

    return (
        <ThemeContext.Provider value={darkMode, toggleTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = useContext(ThemeContext)