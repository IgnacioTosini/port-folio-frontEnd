import React, { useState, useEffect } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('dark');

    const toggleTheme = () => {
        setTheme((prevTheme: Theme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;