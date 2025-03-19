import CustomIcon from "./CustomIcon";
import '../../styles/components/ui/_iconList.scss';

type IconListProps = {
    icons: { icon: string, url: string }[];
}

export default function IconList({ icons }: IconListProps) {
    return (
        <ul className="icon-list">
            {icons.map((icon, index) => (
                <li key={index}><CustomIcon icon={icon.icon} url={icon.url} /></li>
            ))}
        </ul>
    );
}