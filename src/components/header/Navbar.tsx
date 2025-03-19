import { useRef } from 'react';
import { CiDark, CiLight } from "react-icons/ci";
import useTheme from '../../hooks/theme/useTheme';
import '../../styles/components/header/_navbar.scss';

export default function Navbar() {
    const submenuRef = useRef<HTMLLIElement>(null);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`navbar ${theme}`}>
            <ul className='menu'>
                <li><a href="#about-me">Acerca de Mí</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li ref={submenuRef}>
                    {theme === 'light' ? <CiDark onClick={toggleTheme} /> : <CiLight onClick={toggleTheme} />}
                </li>
            </ul>
        </div>
    );
}