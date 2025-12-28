import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ToTopBtn/totopbtn';
import Footer from './components/Footer/Footer';
import './App.css';
// import ScrollToTop from './components/ToTopBtn/totopbtn';

function App() {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        // Save language preference to localStorage
        localStorage.setItem('preferredLanguage', language);
    }, [language]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="app">
            <h1>salom</h1>
            <Navbar
                theme={theme}
                toggleTheme={toggleTheme}
                language={language}
                changeLanguage={changeLanguage}
            />
            <Hero language={language} />
            <About language={language} />
            <Skills language={language} />
            <Services language={language} />
            <Projects language={language} />
            <Contact language={language} />
            <Footer language={language} />
            <ScrollToTop></ScrollToTop>
        </div>
    );
}

export default App;