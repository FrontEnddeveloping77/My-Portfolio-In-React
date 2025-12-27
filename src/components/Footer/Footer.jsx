import { translations } from '../../translations/translations';
import './Footer.css';

function Footer({ language }) {
    const t = translations[language];
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Abdulaziz<span>.dev</span></h3>
                        <p>{t.footer.tagline}</p>
                    </div>
                    <div className="footer-links">
                        <a href="#home">{t.nav.home}</a>
                        <a href="#about">{t.nav.about}</a>
                        <a href="#services">{t.nav.services}</a>
                        <a href="#projects">{t.nav.projects}</a>
                        <a href="#contact">{t.nav.contact}</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Abdulaziz Avazov. {t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;