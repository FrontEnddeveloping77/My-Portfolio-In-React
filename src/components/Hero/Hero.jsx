import { translations } from '../../translations/translations';
import heroImage from '../../assets/image.png';
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
                        <div className="hero-image-wrapper">
                            <div className="hero-image-glow"></div>
                            <img
                                src={heroImage}
                                alt="Abdulaziz Avazov"
                                className="hero-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;