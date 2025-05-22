import { useRef } from 'react';
import { useGsapFadeInUp } from '../../hooks/gsap/useGsapFadeInUp';
import { CustomIcon } from "./CustomIcon";
import '../../styles/components/ui/_iconList.scss';

type IconListProps = {
    icons: { icon: string, url: string }[];
}

function AnimatedIconItem({ icon, url, delay }: { icon: string, url: string, delay: number }) {
    const ref = useRef<HTMLLIElement>(null);
    useGsapFadeInUp(ref, delay);
    return (
        <li ref={ref}><CustomIcon icon={icon} url={url} /></li>
    );
}

export default function IconList({ icons }: IconListProps) {
    return (
        <ul className="icon-list">
            {icons.map((icon, index) => (
                <AnimatedIconItem key={index} icon={icon.icon} url={icon.url} delay={index * 0.1} />
            ))}
        </ul>
    );
}