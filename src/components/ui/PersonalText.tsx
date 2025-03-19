import '../../styles/components/ui/_personalText.scss';

type PersonalTextProps = {
    title?: string;
    subtitle?: string;
    text?: string;
};

export default function PersonalText({ title, subtitle, text }: PersonalTextProps) {
    return (
        <section className="personal-text">
            <h2 className='title'>{title}</h2>
            <h3 className='subTitle'>{subtitle}</h3>
            <p className='text'>{text}</p>
        </section>
    )
}
