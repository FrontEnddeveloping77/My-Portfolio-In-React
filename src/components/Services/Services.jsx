import { translations } from '../../translations/translations';
import './Services.css';

function Services({ language }) {
    const t = translations[language];

    const services = [
        {
            icon: '🌐',
            title: t.services.landingPages.title,
            description: t.services.landingPages.description,
            features: t.services.landingPages.features
        },
        {
            icon: '💼',
            title: t.services.businessWebsites.title,
            description: t.services.businessWebsites.description,
            features: t.services.businessWebsites.features
        },
        {
            icon: '⚛️',
            title: t.services.reactApps.title,
            description: t.services.reactApps.description,
            features: t.services.reactApps.features
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="container">
                <div className="section-title">
                    <h2>{t.services.title}</h2>
                    <p>{t.services.subtitle}</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="services-cta">
                    <h3>{t.services.ctaTitle}</h3>
                    <p>{t.services.ctaDescription}</p>
                    <a href="#contact" className="btn btn-primary">{t.services.ctaButton}</a>
                </div>
            </div>
        </section>
    );
}

export default Services;