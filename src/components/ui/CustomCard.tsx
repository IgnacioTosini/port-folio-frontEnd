import { JSX } from 'react';
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';
import LanguageBadge from './LanguageBadge';
import { CiMail } from 'react-icons/ci';
import '../../styles/components/ui/_customCard.scss';

type CustomCardProps = {
    title: string;
    subtitle?: string;
    languages?: string[];
    buttons?: { type: string, url: string }[];
    mail: boolean;
}

const buttonMap: { [key: string]: { icon: JSX.Element, label: string } } = {
    git: { icon: <FaGithub />, label: 'Código' },
    linkein: { icon: <FaLinkedin />, label: 'Perfil' },
    demo: { icon: <FaExternalLinkAlt />, label: 'Demo' }
};

export default function CustomCard({ title, subtitle, languages, buttons, mail }: CustomCardProps) {
    return (
        <section className={languages ? 'custom-card custom-card-projects' : 'custom-card'}>
            <h2 className="title-card">{title.toUpperCase()}</h2>
            {subtitle && <h3 className="subTitle-card">{subtitle}</h3>}
            {languages && languages.length > 0 && (
                <ul className="languages">
                    {languages.map((language, index) => (
                        <LanguageBadge key={index} language={language} />
                    ))}
                </ul>
            )}
            {mail && (
                <div className="mail-container">
                    <CiMail />
                    <p>Ignaciotosini2002@gmail.com</p>
                </div>
            )}
            {buttons && buttons.length > 0 && (
                <div className="buttons">
                    {buttons.map((button, index) => (
                        <a
                            href={button.url}
                            key={index}
                            className={`button-card ${!button.url ? 'disabled' : ''}`}
                            target={button.url ? "_blank" : undefined}
                            rel={button.url ? "noopener noreferrer" : undefined}
                            onClick={(e) => !button.url && e.preventDefault()}
                        >
                            {buttonMap[button.type]?.icon}
                            <span>{buttonMap[button.type]?.label}</span>
                        </a>
                    ))}
                </div>
            )}
        </section>
    )
}