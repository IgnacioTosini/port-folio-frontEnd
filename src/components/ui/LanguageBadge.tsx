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

export default function LanguageBadge({ language }: LanguageBadgeProps) {
    const color = languageColors[language] || '#333';

    return (
        <li className="language-badge" style={{ '--hover-color': color } as React.CSSProperties}>
            <p>{language}</p>
        </li>
    );
}