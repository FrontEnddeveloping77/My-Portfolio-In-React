import { useState, useEffect } from 'react';
import { translations } from '../../translations/translations';
import './Navbar.css';

function Navbar({ theme, toggleTheme, language, changeLanguage }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

    const t = translations[language];

    const languages = [
        { code: 'en', label: 'English', },
        { code: 'ru', label: 'Русский', },
        { code: 'uz', label: 'O\'zbek', }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.language-selector')) {
                setIsLanguageDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const handleLanguageSelect = (langCode) => {
        changeLanguage(langCode);
        setIsLanguageDropdownOpen(false);
    };

    const getCurrentLanguage = () => {
        return languages.find(lang => lang.code === language);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <a href="/" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
                        Abdulaziz<span></span>
                    </a>

                    <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-open' : ''}`}>
                        <button
                            className="x"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <i className={`fa-solid fa-x ${theme === 'dark' ? 'theme-dark' : ''}`}></i>                        </button>
                    <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>{t.nav.home}</a></li>
                    <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t.nav.about}</a></li>
                    <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>{t.nav.skills}</a></li>
                    <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{t.nav.services}</a></li>
                    <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>{t.nav.projects}</a></li>
                    <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.nav.contact}</a></li>
                </ul>

                <div className="navbar-actions">
                    {/* Language Selector */}
                    <div className="language-selector">
                        <button
                            className="language-toggle"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                            }}
                            aria-label="Select language"
                        >
                            <span className="language-flag">{getCurrentLanguage().flag}</span>
                            <span className="language-code">{language.toUpperCase()}</span>
                            <span className={`language-arrow ${isLanguageDropdownOpen ? 'language-arrow-open' : ''}`}>
                                ▼
                            </span>
                        </button>

                        {isLanguageDropdownOpen && (
                            <div className="language-dropdown">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`language-option ${language === lang.code ? 'language-option-active' : ''}`}
                                        onClick={() => handleLanguageSelect(lang.code)}
                                    >
                                        <span className="language-flag">{lang.flag}</span>
                                        <span className="language-label">{lang.label}</span>
                                        {language === lang.code && (
                                            <span className="language-check">✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        className={`theme-toggle ${theme === 'dark' ? 'theme-dark' : ''}`}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? 'Light' : 'Dark'}
                    </button>


                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
        </nav >
    );
}

export default Navbar;