import { useState } from 'react';
import { translations } from '../../translations/translations';
import './Contact.css';

function Contact({ language }) {
    const t = translations[language];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/send-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (data.success) {
                alert(t.contact.form.successMessage);
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Xatolik yuz berdi, qayta urinib ko‘ring.');
            }
        } catch (error) {
            console.error(error);
            alert('Server bilan bog‘lanishda xatolik yuz berdi.');
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-title">
                    <h2>{t.contact.title}</h2>
                    <p>{t.contact.subtitle}</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>{t.contact.getInTouch}</h3>
                        <p>{t.contact.description}</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div>
                                    <h4>{t.contact.email}</h4>
                                    <a href='.'>abdulazizxon.0058@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">{t.contact.form.nameLabel}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={t.contact.form.namePlaceholder}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t.contact.form.emailLabel}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder={t.contact.form.emailPlaceholder}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t.contact.form.messageLabel}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder={t.contact.form.messagePlaceholder}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-submit">
                                {t.contact.form.submitBtn}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
