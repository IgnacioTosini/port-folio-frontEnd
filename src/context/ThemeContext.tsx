import { createContext } from "react";

export type Theme = 'light' | 'dark';

type ThemeContextProps = {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);