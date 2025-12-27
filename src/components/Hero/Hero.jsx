import { translations } from '../../translations/translations';
import './Hero.css';

function Hero({ language }) {
    const t = translations[language];

    const handleContactClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            {t.hero.greeting} <span className="highlight">{t.hero.name}</span>
                        </h1>
                        <h2 className="hero-subtitle">{t.hero.role}</h2>
                        <p className="hero-description">
                            {t.hero.description}
                        </p>
                        <div className="hero-cta">
                            <a href="#contact" className="btn btn-primary" onClick={handleContactClick}>
                                {t.hero.orderBtn}
                            </a>
                            <a href="#projects" className="btn btn-outline">
                                {t.hero.viewWorkBtn}
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-card">
                            <div className="code-window">
                                <div className="code-header">
                                    <div className="code-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span className="code-title">portfolio.jsx</span>
                                </div>
                                <div className="code-content">
                                    <code>
                                        <span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;<br />
                                        &nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">"Abdulaziz"</span>,<br />
                                        &nbsp;&nbsp;<span className="code-property">skills</span>: [<span className="code-string">"React"</span>, <span className="code-string">"JS"</span>],<br />
                                        &nbsp;&nbsp;<span className="code-property">passion</span>: <span className="code-string">"Clean Code"</span><br />
                                        &#125;;
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;