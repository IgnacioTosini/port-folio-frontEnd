import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { FormData } from "../../types";
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/components/ui/_form.scss';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success('Mensaje enviado con éxito');
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Hubo un error al enviar el mensaje');
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error('Error desconocido');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form" role="form" aria-label="Formulario de contacto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'El nombre es requerido' })}
                />
                {errors.name && <span className="error" aria-live="polite">{errors.name.message}</span>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', {
                        required: 'El email es requerido',
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                            message: 'Email no válido',
                        },
                    })}
                />
                {errors.email && <span className="error" aria-live="polite">{errors.email.message}</span>}

                <label htmlFor="message">Mensaje</label>
                <textarea
                    id="message"
                    {...register('message', {
                        required: 'El mensaje es requerido',
                        minLength: { value: 10, message: 'El mensaje es muy corto' },
                    })}
                />
                {errors.message && <span className="error" aria-live="polite">{errors.message.message}</span>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}