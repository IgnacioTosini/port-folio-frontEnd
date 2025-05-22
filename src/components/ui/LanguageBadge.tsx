import { memo, useRef } from 'react';
import { useGsapFadeInUp } from '../../hooks/gsap/useGsapFadeInUp';
import '../../styles/components/ui/_languageBadge.scss';

type LanguageBadgeProps = {
    language: string;
};

const languageColors: { [key: string]: string } = {
    JavaScript: '#f0db4f',
    TypeScript: '#007acc',
    Java: '#b07219',
    CSS: '#563d7c',
    HTML: '#e34c26',
    SCSS: '#c6538c',
};

export const LanguageBadge = memo(function LanguageBadge({ language }: LanguageBadgeProps) {
    const ref = useRef<HTMLLIElement>(null);
    useGsapFadeInUp(ref);
    const color = languageColors[language] || '#333';

    return (
        <li ref={ref} className="language-badge" style={{ '--hover-color': color } as React.CSSProperties}>
            <p>{language}</p>
        </li>
    );
});
