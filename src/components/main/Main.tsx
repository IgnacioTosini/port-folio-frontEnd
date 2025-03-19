import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";
import '../../styles/components/main/_main.scss';
import Contact from "./Contact";

export default function Main() {
    return (
        <main>
            <PersonalInfo />
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </main>
    )
}