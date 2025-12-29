import { translations } from '../../translations/translations';
import './About.css';

function About({ language }) {
    const t = translations[language];

    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-title">
                    <h2>{t.about.title}</h2>
                    <p>{t.about.subtitle}</p>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            {t.about.intro}
                        </p>
                        <p>
                            {t.about.description}
                        </p>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <h3>1+</h3>
                                <p>{t.about.projectsCompleted}</p>
                            </div>
                            <div className="highlight-item">
                                <h3>100%</h3>
                                <p>{t.about.clientSatisfaction}</p>
                            </div>
                            <div className="highlight-item">
                                <h3>2+</h3>
                                <p>{t.about.yearsExperience}</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="about-card">
                            <div className="about-card-inner">
                                <h3>{t.about.valueTitle}</h3>
                                <ul className="value-list">
                                    {t.about.values.map((value, index) => (
                                        <li key={index}>
                                            <span className="value-icon">✓</span>
                                            <span>{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;