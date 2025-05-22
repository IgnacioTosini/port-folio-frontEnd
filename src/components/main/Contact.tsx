import Form from "../ui/Form";
import { CustomCard } from "../ui/CustomCard";
import PersonalText from "../ui/PersonalText";
import '../../styles/components/main/_contact.scss';

export default function Contact() {
    return (
        <div className="contact">
            <PersonalText title="Contacto" text="Si quieres contactarme." />
            <section className="contact-container">
                <CustomCard title="Información de contacto" subtitle="Puedes contactarme a través de los siguientes medios." mail buttons={[
                    { type: 'linkein', url: 'https://www.linkedin.com/in/ignacio-tosini/' }
                ]} />
                <Form />
            </section>
        </div>
    )
}
