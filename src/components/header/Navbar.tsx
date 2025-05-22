import { useRef } from 'react';
import { CiDark, CiLight } from "react-icons/ci";
import useTheme from '../../hooks/theme/useTheme';
import '../../styles/components/header/_navbar.scss';

export default function Navbar() {
    const submenuRef = useRef<HTMLLIElement>(null);
    const { theme, toggleTheme } = useTheme();

    // Referencia para el header (ajusta el selector si tu header tiene otro id o clase)
    const headerSelector = '.navbar';
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
        e.preventDefault();
        const section = document.querySelector(sectionId);
        const header = document.querySelector(headerSelector);
        if (section) {
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            // Centrar la sección en la ventana, restando la altura del header
            window.scrollTo({
                top: sectionTop - headerHeight - 24, // 24px extra para margen visual
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={`navbar ${theme}`} role="navigation" aria-label="Navegación principal">
            <ul className='menu'>
                <li><a href="#about-me" onClick={e => handleNavClick(e, '#about-me')}>Acerca de Mí</a></li>
                <li><a href="#projects" onClick={e => handleNavClick(e, '#projects')}>Proyectos</a></li>
                <li><a href="#contact" onClick={e => handleNavClick(e, '#contact')}>Contacto</a></li>
                <li ref={submenuRef}>
                    <button
                        onClick={toggleTheme}
                        aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
                        className='themeToggle'
                        aria-expanded={submenuRef.current?.contains(document.activeElement) ? 'true' : 'false'}
                    >
                        {theme === 'light' ? <CiDark /> : <CiLight />}
                    </button>
                </li>
            </ul>
        </div>
    );
}