import { translations } from '../../translations/translations';
import './Skills.css';

function Skills({ language }) {
    const t = translations[language];

    const skills = [
        { name: 'HTML5', level: 100, icon: '📄' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 90, icon: '⚡' },
        { name: 'React', level: 99, icon: '⚛️' },
        { name: language === 'en' ? 'Responsive Design' : language === 'ru' ? 'Адаптивный дизайн' : 'Moslashuvchan dizayn', level: 100, icon: '📱' },
        { name: 'Git & GitHub', level: 85, icon: '🔧' }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-title">
                    <h2>{t.skills.title}</h2>
                    <p>{t.skills.subtitle}</p>
                </div>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                <span className="skill-icon">{skill.icon}</span>
                                <h3>{skill.name}</h3>
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className="skill-percentage">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;