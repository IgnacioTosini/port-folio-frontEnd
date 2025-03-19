import PersonalText from "../ui/PersonalText";
import RepoList from "../ui/RepoList";

export default function Projects() {
    return (
        <section>
            <PersonalText title="Mis Proyectos" text="Aquí hay una selección de mis proyectos más recientes. Puedes encontrar más en mi perfil de GitHub." />
            <RepoList />
        </section>
    )
}
