import { useState } from 'react';
import { translations } from '../../translations/translations';
import './Contact.css';

function Contact({ language }) {
    const t = translations[language];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        platform: 'telegram'
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const BOT_TOKEN = '8238860417:AAERcbHXD8aUixfsgkOK44heOJ6yboFoNGY';
    const CHAT_ID = '5977830644';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const platformEmoji = formData.platform === 'telegram' ? '📱 Telegram' : '📱 WhatsApp';

        const message = `
🔔 *Yangi Aloqa So'rovi!*

👤 *Ism:* ${formData.firstName}
👤 *Familya:* ${formData.lastName}
📞 *Telefon:* ${formData.phone}
${platformEmoji} orqali bog'lanishni xohlaydi

⏰ *Vaqt:* ${new Date().toLocaleString('uz-UZ')}
        `.trim();

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown'
                })
            });

            const data = await response.json();

            if (data.ok) {
                setStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    platform: 'telegram'
                });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error(data.description || 'Failed to send message');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage(error.message);
            setTimeout(() => setStatus('idle'), 5000);
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
                        <h3 className='contact-title'>{t.contact.getInTouch}</h3>
                        <p className='contact-description'>{t.contact.description}</p>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">{t.contact.form.firstNameLabel}</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder={t.contact.form.firstNamePlaceholder}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">{t.contact.form.lastNameLabel}</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder={t.contact.form.lastNamePlaceholder}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">{t.contact.form.phoneLabel}</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={t.contact.form.phonePlaceholder}
                                    required
                                />
                            </div>

                            <div className="form-group platform-selection">
                                <label>{t.contact.form.platformLabel}</label>
                                <div className="platform-options">
                                    <label className={`platform-option ${formData.platform === 'telegram' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="platform"
                                            value="telegram"
                                            checked={formData.platform === 'telegram'}
                                            onChange={handleChange}
                                        />
                                        <span className="platform-icon">📱</span>
                                        <span className="platform-name">Telegram</span>
                                    </label>
                                    <label className={`platform-option ${formData.platform === 'whatsapp' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="platform"
                                            value="whatsapp"
                                            checked={formData.platform === 'whatsapp'}
                                            onChange={handleChange}
                                        />
                                        <span className="platform-icon">📱</span>
                                        <span className="platform-name">WhatsApp</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary btn-submit ${status === 'loading' ? 'loading' : ''}`}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? t.contact.form.sendingBtn : t.contact.form.submitBtn}
                            </button>

                            {status === 'success' && (
                                <div className="form-message success">
                                    ✅ {t.contact.form.successMessage}
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-message error">
                                    ❌ {t.contact.form.errorMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
