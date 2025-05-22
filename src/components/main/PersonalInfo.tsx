import { CustomCard } from "../ui/CustomCard";
import PersonalText from "../ui/PersonalText";
import IconList from "../ui/IconList";
import { useGitHubData } from "../../hooks/github/useGitHubData";
import '../../styles/components/main/_personalInfo.scss'

export default function PersonalInfo() {
    const { userData } = useGitHubData();
    const icons = [{ icon: 'github', url: 'https://github.com/IgnacioTosini' }, { icon: 'linkedin', url: 'https://www.linkedin.com/in/ignacio-tosini/' }, { icon: 'cv', url: '/cv.pdf' }];

    return (
        <section className="personal-info-container">
            <section className="personal">
                <section className="personal-text-icons">
                    <PersonalText title="Hola, soy Nacho Tosini" subtitle="Desarrollador Web" text="Soy un desarrollador apasionado por crear soluciones web elegantes y funcionales. Me especializo en React, Next.js y diseño de experiencias de usuario intuitivas. Siempre estoy aprendiendo nuevas tecnologías y buscando desafíos interesantes." />
                    <IconList icons={icons} />
                </section>
                {userData.avatar_url ? <img src={userData.avatar_url} alt={userData.name} loading="lazy" /> : <div className="placeholder-avatar" />}
            </section>
            <section className="cards-info">
                <CustomCard title="Educación" subtitle="Tecnicatura en Programación, UTN (2021-2023)" mail={false} />
                <CustomCard title="Habilidades" subtitle="React, Angular, Next.js, TypeScript, Tailwind CSS, Node.js" mail={false} />
                <CustomCard title="Experiencia" subtitle="Sin experiencia profesional" mail={false} />
            </section>
        </section>
    )
}