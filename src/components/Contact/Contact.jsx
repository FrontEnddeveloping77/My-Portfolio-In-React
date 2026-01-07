import { translations } from '../../translations/translations';
import './Contact.css';

function Contact({ language }) {
    const t = translations[language];

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
                                <span className="contact-icon">📱</span>
                                <div>
                                    <h4>{t.contact.telegram}</h4>
                                    <a href='https://t.me/abdulazizavazov_12'>Telegram</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📱</span>
                                <div>
                                    <h4>{t.contact.whatsapp}</h4>
                                    <a href='https://wa.me/+998949500058'>Whatsapp</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
