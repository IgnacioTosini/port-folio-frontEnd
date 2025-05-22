import { memo, useRef } from 'react';
import { JSX } from 'react/jsx-runtime';
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb';
import { useGsapFadeInUp } from '../../hooks/gsap/useGsapFadeInUp';
import '../../styles/components/ui/_customIcon.scss';

type CustomIconProps = {
    icon: string;
    url: string;
}

const iconMap: { [key: string]: JSX.Element } = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    externalLink: <FaExternalLinkAlt />,
    mail: <FaEnvelope />,
    sendIcon: <FaPaperPlane />,
    cv: <TbFileCv />
};

export const CustomIcon = memo(function CustomIcon({ icon, url }: CustomIconProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    // Mapeo de labels accesibles
    const ariaLabels: { [key: string]: string } = {
        github: 'Ir a GitHub',
        linkedin: 'Ir a LinkedIn',
        externalLink: 'Abrir enlace externo',
        mail: 'Enviar correo',
        sendIcon: 'Enviar mensaje',
        cv: 'Descargar CV',
    };
    useGsapFadeInUp(ref);
    return (
        <a
            ref={ref}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className="custom-icon"
            aria-label={ariaLabels[icon] || 'Enlace externo'}
        >
            {iconMap[icon] || null}
        </a>
    );
});
