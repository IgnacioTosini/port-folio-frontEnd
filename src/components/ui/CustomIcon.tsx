import { JSX } from 'react/jsx-runtime';
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb';
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

export default function CustomIcon({ icon, url }: CustomIconProps) {
    return (
        <a href={url} target='_blank' className="custom-icon">
            {iconMap[icon] || null}
        </a>
    );
}